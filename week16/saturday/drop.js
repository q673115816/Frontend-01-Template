function drop(element) {

    const contexts = Object.create(null)

    const MOUSE_EVENT = Symbol('mouse')

    element.addEventListener('mousedown', (event) => {
        contexts[MOUSE_EVENT] = Object.create(null)
        start(event, contexts[MOUSE_EVENT])
        let mousemove = event => {
            move(event, contexts[MOUSE_EVENT])
        }
        let mouseend = event => {
            end(event, contexts[MOUSE_EVENT])
            element.removeEventListener('mousemove', mousemove)
            element.removeEventListener('mouseup', mouseend)
        }

        element.addEventListener('mousemove', mousemove)
        element.addEventListener('mouseup', mouseend)
    })

    element.addEventListener('touchstart', (event) => {
        for (let touch of event.changedTouches) {
            contexts[touch.identifier] = Object.create(null)
            start(touch, contexts[touch.identifier])
        }
    })
    element.addEventListener('touchmove', (event) => {
        for (let touch of event.changedTouches) {
            move(touch, contexts[touch.identifier])
        }
    })
    element.addEventListener('touchend', (event) => {
        for (let touch of event.changedTouches) {
            end(touch, contexts[touch.identifier])
            delete contexts[touch.identifier]
        }
    })
    element.addEventListener('touchcancel', (event) => {
        for (let touch of event.changedTouches) {
            cancel(touch, contexts[touch.identifier])
            delete contexts[touch.identifier]
        }
    })

    let start = (point, context) => {
        const reg = /translate\((?<x>.+)px, (?<y>.+)px\)/
        const { x, y } = reg.exec(element.style.transform).groups
        context.startX = point.clientX
        context.startY = point.clientY
        context.dx = Number(x)
        context.dy = Number(y)
        context.isTap = true
        context.isPan = false
        context.isPress = false
        context.isFlick = false
        context.moves = []
        element.dispatchEvent(new CustomEvent('start', {
        }))
        context.timeoutHandler = setTimeout(() => {
            if (context.isPan) {
                return false
            }
            context.isTap = false
            context.isPan = false
            context.isPress = true
        }, 500);
    }

    let move = (point, context) => {
        let { clientX, clientY } = point
        let { startX, startY } = context
        let apartX = clientX - startX
        let apartY = clientY - startY
        context.apartX = apartX
        context.apartY = apartY
        if (!context.isPan && apartX ** 2 + apartY ** 2 > 100) {
            context.isTap = false
            context.isPan = true
            context.isPress = false
        }
        if (context.isPan) {
            context.moves.push({
                apartX, apartY,
                t: Date.now()
            })
            context.moves = context.moves.filter(move => Date.now() - move.t < 300)
        }
        element.dispatchEvent(new CustomEvent('move', {
            detail: {
                apartX: context.apartX,
                apartY: context.apartY,
                dx: context.dx,
                dy: context.dy,
            }
        }))
    }

    let end = (point, context) => {
        if (context.isPan) {
            const moveend = context.moves.pop()
            console.log(moveend)
            const spend = (moveend.apartX ** 2 + moveend.apartY ** 2) / (300) ** 2
            if (spend > 5) {
                console.log(spend);
                context.isFlick = true
            }
        }
        element.dispatchEvent(new CustomEvent('end', {
            detail: {
                isFlick: context.isFlick
            }
        }))
        clearTimeout(context.timeoutHandler)
    }

    let cancel = (point, context) => {
        clearTimeout(context.timeoutHandler)
    }
}

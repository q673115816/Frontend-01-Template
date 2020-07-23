let element = document.body

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
    context.dx = point.clientX
    context.dy = point.clientY
    context.isTap = true
    context.isPan = false
    context.isPress = false
    context.moves = []
    console.log('tapstart')
    context.timeoutHandler = setTimeout(() => {
        if (context.isPan) {
            return false
        }
        context.isTap = false
        context.isPan = false
        context.isPress = true
        console.log('pressstart')
    }, 500);
}

let move = (point, context) => {
    let { clientX, clientY } = point
    let apartX = clientX - context.dx
    let apartY = clientY - context.dy
    if (!context.isPan && apartX ** 2 + apartY ** 2 > 100) {
        console.log('panStart')
        context.isTap = false
        context.isPan = true
        context.isPress = false
    }
    if(context.isPan) {
        context.moves.push({
            apartX, apartY,
            t: Date.now()
        })
        context.moves = context.moves.filter(move => Date.now() - move.t < 300)
        console.log('pan')
    }
}

let end = (point, context) => {
    if(context.isTap) console.log('tapend')
    if(context.isPan) console.log('panend')
    if(context.isPress) console.log('pressend')
    console.log(context);
    clearTimeout(context.timeoutHandler)
}

let cancel = (point, context) => {
    clearTimeout(context.timeoutHandler)

}
export class TimeLine {
    constructor() {
        this.animations = new Set
        this.finishAnimations = new Set
        this.addTime = new Map
        this.requestID = null
        this.state = 'inited'
    }
    tick() {
        let t = Date.now() - this.startTime
        // this.animations = this.animations.filter(animation => animation.finish !== true)
        // let allFinish = this.animations.some(animation => animation.finish !== true)

        for (let animation of this.animations) {
            if (animation.finish) {
                continue
            }
            let t = Date.now() - animation.createTime
            let { object, property, template, start, end, duration, delay = 0, timingFunction } = animation
            let addTime = this.addTime.get(animation)
            if (t > duration + delay) {
                // animation.finish = true
                t = duration + delay
                this.animations.delete(animation)
            }
            let process = timingFunction(t / duration)
            let value = start + (end - start) * process
            object[property] = template(value)
        }
        if (this.animations.size)
            this.requestID = requestAnimationFrame(() => this.tick())
        else
            this.requestID = null
        // if (allFinish) {
        // } else {
        //     this.state = 'finish'
        // }
    }
    start() {
        if (this.state !== 'inited')
            return

        this.state = 'playing'
        this.startTime = Date.now()
        this.tick()
    }

    pause() {
        if (this.state !== 'playing')
            return
        this.state = 'paused'
        this.endTime = Date.now()

        if (this.requestID !== null) {
            cancelAnimationFrame(this.requestID)
            this.requestID = null
        }
    }

    resume() {
        if (this.state !== 'paused') {
            return
        }
        this.state = 'playing'
        this.startTime += Date.now() - this.endTime
        this.tick()
    }

    clear() {
        if (this.state !== 'finish') {
            this.state = 'finish'
            cancelAnimationFrame(this.requestID)
            for (const animation of this.animations) {
                let { object, property, template, start, end, duration, delay = 0, timingFunction } = animation
                object[property] = template(start + end)
                animation.finish = true
            }
        }
    }

    reset() {
        if (this.start === 'playing')
            this.pause()
        this.animations = new Set
        this.addTime = new Map
        this.requestID = null
        this.state = 'playing'
        this.startTime = Date.now()
        this.tick()
    }

    restart() {
        if (this.start === 'playing')
            this.pause()
        this.animations = new Set
        this.addTime = new Map
        this.requestID = null
        this.state = 'playing'
        this.startTime = Date.now()
        this.tick()
    }

    add(animation, addTime) {
        this.animations.add(animation)
        // animation.finish = false
        if (this.state === 'playing' && this.requestID === null)
            this.tick()
        if (this.state === 'playing')
            this.addTime.set(animation, this.addTime.get(animation) !== void 0 ? addTime : Date.now() - this.startTime)
        else
            this.addTime.set(animation, this.addTime.get(animation) !== void 0 ? addTime : 0)

    }
}
export class ColorTimeLine {
    constructor() {
        this.animations = []
        this.requestID = null
        this.state = 'pending'
    }
    tick() {
        // let t = Date.now() - this.startTime
        //this.animations = this.animations.filter(animation => animation.finish !== true)
        let allFinish = this.animations.some(animation => animation.finish !== true)
        for (let animation of this.animations) {
            if (animation.finish) {
                continue
            }
            let t = Date.now() - animation.createTime
            let { object, property, template, start, end, duration, delay = 0, timingFunction } = animation
            if (t > duration + delay) {
                animation.finish = true
                t = duration + delay
            }
            let [r1, g1, b1] = start.match(/(\d{1,3})/g)
            let [r2, g2, b2] = end.match(/(\d{1,3})/g)
            let process = timingFunction(t / duration)
            let value1 = r1 * 1 + (r2 * 1 - r1 * 1) * process
            let value2 = g1 * 1 + (g2 * 1 - g1 * 1) * process
            let value3 = b1 * 1 + (b2 * 1 - b1 * 1) * process

            object[property] = template(`${value1},${value2},${value3}`)
        }

        if (allFinish) {
            this.requestID = requestAnimationFrame(() => this.tick())
        } else {
            this.state = 'finish'
        }
    }
    start() {
        this.state = 'running'
        this.startTime = Date.now()
        this.tick()
    }

    pause() {
        if (this.requestID !== null && this.state === 'running') {
            this.state = 'paused'
            this.endTime = Date.now()
            cancelAnimationFrame(this.requestID)
        }
    }

    resume() {
        if (this.state === 'paused') {
            this.state = 'running'
            this.startTime += Date.now() - this.endTime
            this.tick()
        }
    }

    clear() {
        if (this.state !== 'finish') {
            this.state = 'finish'
            cancelAnimationFrame(this.requestID)
            for (const animation of this.animations) {
                let { object, property, template, start, end, duration, delay = 0, timingFunction } = animation
                object[property] = template(start + end)
                animation.finish = true
            }
        }
    }

    reset() {
        this.animations.map(animation => animation.finish = false)
        this.start()
    }

    add(animation) {
        this.animations.push(animation)
    }
}

export class Animation {
    constructor(object, property, template, start, end, duration, delay, timingFunction) {
        this.object = object
        this.property = property
        this.template = template
        this.start = start
        this.end = end
        this.duration = duration
        this.delay = delay
        this.timingFunction = timingFunction
        this.createTime = Date.now()
    }
}
export class ColorAnimation {
    constructor(object, property, template, start, end, duration, delay, timingFunction) {
        this.object = object
        this.property = property
        this.template = template
        this.start = start
        this.end = end
        this.duration = duration
        this.delay = delay
        this.timingFunction = timingFunction
    }
}

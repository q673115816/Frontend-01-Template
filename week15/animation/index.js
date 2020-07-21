class TimeLine {
    constructor() {
        this.animations = []
        this.requestID = null
        this.state = 'pending'
    }
    tick() {
        let t = Date.now() - this.startTime
        this.animations = this.animations.filter(animation => animation.finish !== true)
        for (let animation of this.animations) {
            let { object, property, template, start, end, duration, delay = 0, timingFunction } = animation
            if (t > duration + delay) {
                animation.finish = true
                t = duration + delay
            }
            let process = timingFunction(t / duration)
            let value = start + (end - start) * process

            object[property] = template(value)
        }
        if (this.animations.length > 0) {
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
        if(this.state === 'paused') {
            this.state = 'running'
            this.startTime += Date.now() - this.endTime
            this.tick()
        }
    }

    clear() {
        if(this.state !== 'finish') {
            this.state = 'finish'
            cancelAnimationFrame(this.requestID)
            for(const animation of this.animations) {
                let { object, property, template, start, end, duration, delay = 0, timingFunction } = animation
                object[property] = template(start + end)
                animation.finish = true
            }
        }
    }

    reset() {
        this.state = 'pending'
    }

    add(animation) {
        this.animations.push(animation)
    }
}

class Animation {
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

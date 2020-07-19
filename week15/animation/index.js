class TimeLine {
    constructor() {
        this.animations = []
        this.requestID = null
    }
    tick() {
        let t = Date.now() - this.startTime
        this.animations = this.animations.filter(animation => animation.finish !== true)
        for (let animation of this.animations) {
            let { object, property, template, start, end, duration, delay = 0, timingFunction } = animation
            if (t > duration + delay) {
                animation.finish = true
                continue
            }
            let process = start + (end - start) * (t / duration)
            let value = timingFunction(process)

            object[property] = template(value)
        }
        if (this.animations.length > 0)
            this.requestID = requestAnimationFrame(() => this.tick())
    }
    start() {
        this.startTime = new Date
        this.tick()
    }

    pause() {
        if (this.requestID !== null)
            cancelAnimationFrame(this.requestID)
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

const createElement = require('./createElement.js')
class Carousel {
    constructor() {
        this.children = []
        this.attrs = new Map
        this.props = new Map
    }

    setAttribute(name, attr) {
        this[name] = attr
        // this.root.setAttribute(name, attr)
    }

    appendChildren(child) {
        this.children.push(child)
    }

    mount(parent) {
        // parent.append(this.root)
        // for (let child of this.children) {
        //     child.mount(this.root)
        // }
        this.render().mount(parent)
    }

    render() {
        let child = this.data.map(url => {
            let ele = <img src={url} />
            ele.addEventListener('dragstart', (e) => e.preventDefault())
            return ele
        })
        let root = (
            <div class="carousel">
                {
                    child
                }
            </div>
        )
        let position = 0

        let nexPic = () => {
            let nextPostion = (position + 1) % child.length
            let curr = child[position]
            let next = child[nextPostion]
            curr.style.transition = 'ease 0s'
            next.style.transition = 'ease 0s'
            curr.style.transform = `translateX(${- 100 * position}%)`
            next.style.transform = `translateX(${100 - 100 * nextPostion}%)`
            // window.innerWidth
            setTimeout(() => {
                curr.style.transition = 'ease 0.4s'
                next.style.transition = 'ease 0.4s'
                curr.style.transform = `translateX(${-100 - 100 * position}%)`
                next.style.transform = `translateX(${-100 * nextPostion}%)`
                position = nextPostion
            }, 16);
            setTimeout(nexPic, 3000);
        }
        // setTimeout(nexPic, 3000)

        root.addEventListener('mousedown', (e) => {
            let startX = e.clientX, startY = e.clientY
            let length = child.length
            let lastPosition = (position - 1 + length) % length
            let nextPosition = (position + 1) % length
            let curr = child[position]
            let width = curr.clientWidth
            let last = child[lastPosition]
            let next = child[nextPosition]

            curr.style.transition = 'ease 0s'
            last.style.transition = 'ease 0s'
            next.style.transition = 'ease 0s'

            curr.style.transform = `translateX(${- width * position}px)`
            last.style.transform = `translateX(${-width - width * lastPosition}px)`
            next.style.transform = `translateX(${width - width * nextPosition}px)`

            let move = e => {
                curr.style.transform = `translateX(${- width * position + e.clientX - startX}px)`
                last.style.transform = `translateX(${-width - width * lastPosition + e.clientX - startX}px)`
                next.style.transform = `translateX(${width - width * nextPosition + e.clientX - startX}px)`
            }
            let up = e => {
                let offset = 0
                if (e.clientX - startX > width / 4) {
                    offset = -1
                } else if (e.clientX - startX < -width / 4) {
                    offset = 1
                }
                curr.style.transition = 'ease 0.4s'
                last.style.transition = 'ease 0.4s'
                next.style.transition = 'ease 0.4s'

                curr.style.transform = `translateX(${- width * position - offset * width}px)`
                last.style.transform = `translateX(${-width - width * lastPosition - offset * width}px)`
                next.style.transform = `translateX(${width - width * nextPosition - offset * width}px)`
                position = (position + offset + length) % length
                document.removeEventListener('mousemove', move)
                document.removeEventListener('mouseup', up)
            }
            document.addEventListener('mousemove', move)
            document.addEventListener('mouseup', up)
        })
        return root
    }
}

/** @jsx createElement  */
let carousel = <Carousel data={[
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
]}/>

carousel.mount(document.body)

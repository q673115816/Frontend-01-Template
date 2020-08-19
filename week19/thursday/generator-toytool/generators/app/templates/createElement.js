import { drop } from './drop.js';

export default function createElement(Cls, attributes, ...children) {
    var o
    if (typeof Cls === 'string') {
        o = new Wrap(Cls)
    } else {
        o = new Cls
    }
    for (let name in attributes) {
        o.setAttribute(name, attributes[name])
        // o[name] = attributes[name]
    }
    const visit = (children) => {
        for (let child of children) {
            if (typeof child === 'string') {
                return o.appendChildren(new Text(child))
            } else if (child instanceof Array) {
                visit(child)
                continue
            }
            o.appendChildren(child)
        }
    }
    visit(children)
    // console.log(arguments)
    return o
}

// class Div {
//     constructor(props) {
//         this.children = []
//         this.root = document.createElement('div')
//     }

//     setAttribute(name, attr) {
//         this.root.setAttribute(name, attr)
//     }

//     appendChildren(child) {
//         this.children.push(child)
//     }

//     mount(parent) {
//         parent.append(this.root)
//         for (let child of this.children) {
//             child.mount(this.root)
//         }
//     }
// }

class Wrap {
    constructor(type) {
        this.children = []
        this.root = document.createElement(type)
    }

    setAttribute(name, attr) {
        if(name === 'picdrop') {
            drop(this.root)
            return
        }
        if (/^on[A-Z]\w+$/.test(name)) {
            let handle = name.toLowerCase().match(/^on(\w+)$/)[1]
            this.root.addEventListener(handle, attr)
            return 
        }
        this.root.setAttribute(name, attr)
    }

    appendChildren(child) {
        this.children.push(child)
    }

    get width() {
        return getComputedStyle(this.root).width
    }

    get style() {
        return this.root.style
    }

    get clientWidth() {
        return this.root.clientWidth
    }

    addEventListener() {
        this.root.addEventListener(...arguments)
    }

    mount(parent) {
        parent.append(this.root)
        for (let child of this.children) {
            child.mount(this.root)
        }
    }
}

class Text {
    constructor(text) {
        this.root = document.createTextNode(text)
    }
    mount(parent) {
        parent.append(this.root)
    }
}

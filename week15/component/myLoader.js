const parser = require('./parser(2).js')

module.exports = function (source, map) {
    var tree = parser.parseHTML(source)
    // console.log(tree.children[1].children[0].content)
    // console.log('hello world!', this.resourcePath)
    let template = null
    let script = null
    for (let node of tree.children) {
        if (node.tagName === 'template')
            template = node.children.filter(e => e.type !== 'text')[0]
        if (node.tagName === 'script')
            script = node.children[0].content
    }

    let createCode = ''


    // console.log(template)

    let visit = (node) => {
        if (node.type === 'text') {
            return JSON.stringify(node.content)
        }
        let attrs = {}
        // if(node.attributes) {
        for (let attribute of node.attributes) {
            attrs[attribute.name] = attribute.value
        }
        // }
        let children = node.children.map(node => visit(node))
        return `createElement("${node.tagName}", ${JSON.stringify(attrs)}, ${children})`
    }

    let r = `
    import { createElement, Wrap, Text } from './createElement.js'
    export class Carousel {
        render() {
            return ${visit(template)}
        }
        setAttribute(name, attr) {
           this[name] = attr
       }
        mount(parent) {
            this.render().mount(parent)
        }
    }
    `
    console.log(r)
    return r
}
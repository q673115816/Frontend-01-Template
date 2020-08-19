// import { parseHTML } from '../src/parser.js'
// import assert from 'assert'
var assert = require('assert')
var { parseHTML } = require('../src/parser.js')
describe('1', () => {
    it('can run', () => {
        let dom = parseHTML('<div></div>')
        assert.equal(dom.children.length, 1)

        // console.log(dom);
    })

})
describe('2', () => {
    it('tag dismatch', () => {
        try {
            let dom = parseHTML('<div></vid>')
        } catch (error) {
            assert.equal(error.message, `Tag start end doesn't match!`)
        }
    })
    it('tag error', () => {
        try {
            let dom = parseHTML('<div')
        } catch (error) {
            assert.equal(error.message, `Tag doesn't close!`)
        }
    })
    it('end tag error', () => {
        try {
            let dom = parseHTML('<div></>')
        } catch (error) {
            assert.equal(error.message, `end Tag error`)
        }
    })

    it('小于号', () => {
        let dom = parseHTML('<div><555</div>')
        assert.equal(dom.children[0].type, 'element')
        assert.equal(dom.children[0].attributes[0].name, 'type')
        assert.equal(dom.children[0].attributes[0].value, 'startTag')
        assert.equal(dom.children[0].attributes[1].name, 'tagName')
        assert.equal(dom.children[0].attributes[1].value, 'div')
        assert.equal(dom.children[0].children[0].type, 'text')
        assert.equal(dom.children[0].children[0].content, '555')
    })

    it('self close', () => {
        let dom = parseHTML('<img src="exmple.png" alt="" />')
        // console.log(dom.children[0].attributes);
        assert.equal(dom.children.length, 1)
        assert.equal(dom.children[0].attributes[0].name, 'type')
        assert.equal(dom.children[0].attributes[0].value, 'startTag')
        assert.equal(dom.children[0].attributes[1].name, 'tagName')
        assert.equal(dom.children[0].attributes[1].value, 'img')
        assert.equal(dom.children[0].attributes[2].name, 'src')
        assert.equal(dom.children[0].attributes[2].value, 'exmple.png')
        assert.equal(dom.children[0].attributes[3].name, 'alt')
        assert.equal(dom.children[0].attributes[3].value, '')
        assert.equal(dom.children[0].attributes[4].name, 'isSelfClosing')
        assert.equal(dom.children[0].attributes[4].value, true)
    })

    it('self close beofrejust attr', () => {
        let dom = parseHTML('<img/>')
        assert.equal(dom.children.length, 1)
        assert.equal(dom.children[0].attributes[0].name, 'type')
        assert.equal(dom.children[0].attributes[0].value, 'startTag')
        assert.equal(dom.children[0].attributes[1].name, 'tagName')
        assert.equal(dom.children[0].attributes[1].value, 'img')
        assert.equal(dom.children[0].attributes[2].name, 'isSelfClosing')
        assert.equal(dom.children[0].attributes[2].value, true)
    })

    it('big tag name', () => {
        let dom = parseHTML('<DIV></DIV>')
        // console.log(dom.children[0].attributes);
        assert.equal(dom.children.length, 1)
        assert.equal(dom.children[0].attributes[0].name, 'type')
        assert.equal(dom.children[0].attributes[0].value, 'startTag')
        assert.equal(dom.children[0].attributes[1].name, 'tagName')
        assert.equal(dom.children[0].attributes[1].value, 'DIV')
    })
})

describe('3', () => {
    it('has text', () => {
        let dom = parseHTML('<div>hello world!</div>')
        assert.equal(dom.children.length, 1)
        assert.equal(dom.children[0].children[0].type, 'text')
        assert.equal(dom.children[0].children[0].content, 'hello world!')
        
    })
})

describe('4', () => {
    it('add attr', () => {
        let dom = parseHTML('<div class="classname"></div>')
        assert.equal(dom.children.length, 1)
        assert.equal(dom.children[0].attributes[0].name, 'type')
        assert.equal(dom.children[0].attributes[0].value, 'startTag')
        assert.equal(dom.children[0].attributes[1].name, 'tagName')
        assert.equal(dom.children[0].attributes[1].value, 'div')
        assert.equal(dom.children[0].attributes[2].name, 'class')
        assert.equal(dom.children[0].attributes[2].value, 'classname')
    })

    it('add attr and has space', () => {
        let dom = parseHTML('<div    class   =   "classname"></div>')
        assert.equal(dom.children.length, 1)
        assert.equal(dom.children[0].attributes[0].name, 'type')
        assert.equal(dom.children[0].attributes[0].value, 'startTag')
        assert.equal(dom.children[0].attributes[1].name, 'tagName')
        assert.equal(dom.children[0].attributes[1].value, 'div')
        assert.equal(dom.children[0].attributes[2].name, 'class')
        assert.equal(dom.children[0].attributes[2].value, 'classname')
    })

    it('singleQuoted', () => {
        let dom = parseHTML(`<div name='attr'/>`)
        assert.equal(dom.children.length, 1)
        assert.equal(dom.children[0].attributes[0].name, 'type')
        assert.equal(dom.children[0].attributes[0].value, 'startTag')
        assert.equal(dom.children[0].attributes[1].name, 'tagName')
        assert.equal(dom.children[0].attributes[1].value, 'div')
        assert.equal(dom.children[0].attributes[2].name, 'name')
        assert.equal(dom.children[0].attributes[2].value, 'attr')
    })

    it('Unquote', () => {
        let dom = parseHTML('<div asd=qwe><div asd=qwe ><div asd=qwe/></div></div>')
        assert.equal(dom.children.length, 1)
        assert.equal(dom.children[0].attributes[0].name, 'type')
        assert.equal(dom.children[0].attributes[0].value, 'startTag')
        assert.equal(dom.children[0].attributes[1].name, 'tagName')
        assert.equal(dom.children[0].attributes[1].value, 'div')
        assert.equal(dom.children[0].attributes[2].name, 'asd')
        assert.equal(dom.children[0].attributes[2].value, 'qwe')
    })

    it('after kv attr', () => {
        let dom = parseHTML('<div name="666"aaa></div>')
        assert.equal(dom.children.length, 1)
        assert.equal(dom.children[0].attributes[0].name, 'type')
        assert.equal(dom.children[0].attributes[0].value, 'startTag')
        assert.equal(dom.children[0].attributes[1].name, 'tagName')
        assert.equal(dom.children[0].attributes[1].value, 'div')
        assert.equal(dom.children[0].attributes[2].name, 'name')
        assert.equal(dom.children[0].attributes[2].value, '666')
    })

})

describe('5', () => {
    it('script', () => {
        let dom = parseHTML(`
            <script>
                console.log('hello world!')
                let str1 = '<'
                let str2 = '</'
                let str3 = '</s'
                let str4 = '</sc'
                let str5 = '</scr'
                let str6 = '</scri'
                let str7 = '</scrip'
                let str8 = '</script'
                let str8 = '</script  '
            </script>
        `)
    })
})
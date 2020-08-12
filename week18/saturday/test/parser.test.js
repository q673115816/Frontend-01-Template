// import { parseHTML } from '../src/parser.js'
// import assert from 'assert'
var assert = require('assert')
var { parseHTML } = require('../src/parser.js')
it('1', () => {
    describe('can run', () => {
        let dom = parseHTML('<div></div>')
        assert.equal(dom.children.length, 1)

        // console.log(dom);
    })

})
it('2', () => {
    describe('tag dismatch', () => {
        try {
            let dom = parseHTML('<div></vid>')
        } catch (error) {
            assert.equal(error.message, `Tag start end doesn't match!`)
        }
    })
    describe('tag error', () => {
        try {
            let dom = parseHTML('<div')
        } catch (error) {
            assert.equal(error.message, `Tag doesn't close!`)
        }
    })
    describe('end tag error', () => {
        try {
            let dom = parseHTML('<div></>')
        } catch (error) {
            assert.equal(error.message, `end Tag error`)
        }
    })

    describe('小于号', () => {
        let dom = parseHTML('<div><555</div>')
        assert.equal(dom.children[0].type, 'element')
        assert.equal(dom.children[0].attributes[0].name, 'type')
        assert.equal(dom.children[0].attributes[0].value, 'startTag')
        assert.equal(dom.children[0].attributes[1].name, 'tagName')
        assert.equal(dom.children[0].attributes[1].value, 'div')
        assert.equal(dom.children[0].children[0].type, 'text')
        assert.equal(dom.children[0].children[0].content, '555')
    })

    describe('self close', () => {
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

    describe('self close beofrejust attr', () => {
        let dom = parseHTML('<img/>')
        assert.equal(dom.children.length, 1)
        assert.equal(dom.children[0].attributes[0].name, 'type')
        assert.equal(dom.children[0].attributes[0].value, 'startTag')
        assert.equal(dom.children[0].attributes[1].name, 'tagName')
        assert.equal(dom.children[0].attributes[1].value, 'img')
        assert.equal(dom.children[0].attributes[2].name, 'isSelfClosing')
        assert.equal(dom.children[0].attributes[2].value, true)
    })

    describe('big tag name', () => {
        let dom = parseHTML('<DIV></DIV>')
        // console.log(dom.children[0].attributes);
        assert.equal(dom.children.length, 1)
        assert.equal(dom.children[0].attributes[0].name, 'type')
        assert.equal(dom.children[0].attributes[0].value, 'startTag')
        assert.equal(dom.children[0].attributes[1].name, 'tagName')
        assert.equal(dom.children[0].attributes[1].value, 'DIV')
    })
})

it('3', () => {
    describe('has text', () => {
        let dom = parseHTML('<div>hello world!</div>')
        assert.equal(dom.children.length, 1)
        assert.equal(dom.children[0].children[0].type, 'text')
        assert.equal(dom.children[0].children[0].content, 'hello world!')
        
    })
})

it('4', () => {
    describe('add attr', () => {
        let dom = parseHTML('<div class="classname"></div>')
        assert.equal(dom.children.length, 1)
        assert.equal(dom.children[0].attributes[0].name, 'type')
        assert.equal(dom.children[0].attributes[0].value, 'startTag')
        assert.equal(dom.children[0].attributes[1].name, 'tagName')
        assert.equal(dom.children[0].attributes[1].value, 'div')
        assert.equal(dom.children[0].attributes[2].name, 'class')
        assert.equal(dom.children[0].attributes[2].value, 'classname')
    })

    describe('add attr and has space', () => {
        let dom = parseHTML('<div    class   =   "classname"></div>')
        assert.equal(dom.children.length, 1)
        assert.equal(dom.children[0].attributes[0].name, 'type')
        assert.equal(dom.children[0].attributes[0].value, 'startTag')
        assert.equal(dom.children[0].attributes[1].name, 'tagName')
        assert.equal(dom.children[0].attributes[1].value, 'div')
        assert.equal(dom.children[0].attributes[2].name, 'class')
        assert.equal(dom.children[0].attributes[2].value, 'classname')
    })

    describe('singleQuoted', () => {
        let dom = parseHTML(`<div name='attr'/>`)
        assert.equal(dom.children.length, 1)
        assert.equal(dom.children[0].attributes[0].name, 'type')
        assert.equal(dom.children[0].attributes[0].value, 'startTag')
        assert.equal(dom.children[0].attributes[1].name, 'tagName')
        assert.equal(dom.children[0].attributes[1].value, 'div')
        assert.equal(dom.children[0].attributes[2].name, 'name')
        assert.equal(dom.children[0].attributes[2].value, 'attr')
    })

    describe('Unquote', () => {
        let dom = parseHTML('<div asd=qwe><div asd=qwe ><div asd=qwe/></div></div>')
        assert.equal(dom.children.length, 1)
        assert.equal(dom.children[0].attributes[0].name, 'type')
        assert.equal(dom.children[0].attributes[0].value, 'startTag')
        assert.equal(dom.children[0].attributes[1].name, 'tagName')
        assert.equal(dom.children[0].attributes[1].value, 'div')
        assert.equal(dom.children[0].attributes[2].name, 'asd')
        assert.equal(dom.children[0].attributes[2].value, 'qwe')
    })

    describe('after kv attr', () => {
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

it('5', () => {
    describe('script', () => {
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
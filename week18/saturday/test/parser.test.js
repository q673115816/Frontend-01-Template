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
        let dom = parseHTML('<div')
        console.log(dom);
        try {
        } catch (error) {
            // assert.equal(error.message, `Tag start end doesn't match!`)
        }
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
})
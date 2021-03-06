let currentToken = null
let currentAttribute = null
let stack = [{ type: 'document', children: [] }]
let currnetTextNode = null

const { addCSSRules, computeCSS } = require('./transCss')

function emit(token) {
    let top = stack[stack.length - 1]
    if (token.type === 'startTag') {
        let element = {
            type: 'element',
            children: [],
            attributes: []
        }
        element.tagName = token.tagName
        for (let p in token) {
            if (p != 'type' || p != 'tagName') {
                element.attributes.push({
                    name: p,
                    value: token[p]
                })
            }
        }

        computeCSS(element, stack)

        top.children.push(element)

        element.parent = top

        if (!token.isSelfCloseing) {
            stack.push(element)
        }

        currnetTextNode = null
    } else if (token.type === 'endTag') {
        if (top.tagName !== token.tagName) {
            throw new Error(`tag start end doesn't match!`)
        } else {
            if(top.tagName === 'style') {
                addCSSRules(top.children[0].content)
            }
            stack.pop()
        }
        currnetTextNode = null
    } else if (token.type === 'text') {
        if (currnetTextNode === null) {
            currnetTextNode = {
                type: 'text',
                content: ''
            }
            top.children.push(currnetTextNode)
        }
        currnetTextNode.content += token.content
    }

}

const EOF = Symbol('EOF')

function data(c) {
    if (c === '<') {
        return tagOpen
    } else if (c === EOF) {
        emit({
            type: 'EOF'
        })
        return
    } else {
        emit({
            type: 'text',
            content: c
        })
        return data
    }
}

function tagOpen(c) {
    if (c === '/') {
        return endTagOpen
    } else if (c.match(/^[a-zA-Z]$/)) {
        currentToken = {
            type: 'startTag',
            tagName: ''
        }
        return tagName(c)
    } else {
        emit({
            type: 'text',
            content: c
        })
        return
    }
}

function tagName(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        return beforeAttrbuteName
    } else if (c === '/') {
        return selfClaseingStarTag
    } else if (c.match(/^[a-zA-Z]$/)) {
        currentToken.tagName += c
        return tagName
    } else if (c === '>') {
        emit(currentToken)
        return data
    } else {
        currentToken.tagName += c
        return tagName
    }
}

function beforeAttrbuteName(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        return beforeAttrbuteName
    } else if (c === '/' || c === '>' || c === EOF) {
        return afterAttributeName(c)
    } else if (c === '=') {
        // return beforeAttrbuteName
    } else {
        currentAttribute = {
            name: '',
            value: ''
        }
        return attributeName(c)
    }
}

function attributeName(c) {
    if (c.match(/^[\t\n\f ]$/) || c === '/' || c === '>' || c === EOF) {
        return afterAttributeName(c)
    } else if (c === '=') {
        return beforeAttrbuteValue
    } else if (c === '\u0000') {

    } else if (c === '\"' || c === '\'' || c === '<') {

    } else {
        currentAttribute.name += c
        return attributeName
    }
}

function beforeAttrbuteValue(c) {
    if (c.match(/^[\t\\n\f ]$/) || c === '/' || c === '>' || c === EOF) {
        return beforeAttrbuteValue
    } else if (c === '\"') {
        return doubleQuotedAttributeValue
    } else if (c === '\'') {
        return singleQuotedAttributeValue
    } else if (c === '>') {
        // emit(currentToken)
        return data
    } else {
        return UnquotedAttributeValue(c)
    }
}

function doubleQuotedAttributeValue(c) {
    if (c === '\"') {
        currentToken[currentAttribute.name] = currentAttribute.value
        return afterQuotedAttributeValue
    } else if (c === '\u0000') {

    } else if (c === EOF) {

    } else {
        currentAttribute.value += c
        return doubleQuotedAttributeValue
    }
}

function singleQuotedAttributeValue(c) {
    if (c === '\'') {
        currentToken[currentAttribute.name] = currentAttribute.value
        return afterQuotedAttributeValue
    } else if (c === '\u0000') {

    } else if (c === EOF) {

    } else {
        currentAttribute.value += c
        return singleQuotedAttributeValue
    }
}

function afterQuotedAttributeValue(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        return beforeAttrbuteName
    } else if (c === '/') {
        return selfClaseingStarTag
    } else if (c === '>') {
        currentToken[currentAttribute.name] = currentAttribute.value
        emit(currentToken)
        return data
    } else if (c === EOF) {

    } else {
        currentAttribute.value += c
        // ??
        return afterQuotedAttributeValue
    }
}

function UnquotedAttributeValue(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        currentToken[currentAttribute.name] = currentAttribute.value
        return beforeAttrbuteName
    } else if (c === '/') {
        currentToken[currentAttribute.name] = currentAttribute.value
        return selfClaseingStarTag
    } else if (c === '>') {
        currentToken[currentAttribute.name] = currentAttribute.value
        emit(currentToken)
        return data
    } else if (c === '\u0000') {

    } else if (c === '\"' || c === '\'' || c == '<' || c == '=' || c == '`') {

    } else if (c === EOF) {

    } else {
        currentAttribute.value += c
        return UnquotedAttributeValue
    }
}

function selfClaseingStarTag(c) {
    if (c === '>') {
        currentToken.isSelfCloseing = true
        emit(currentToken)
        return data
    } else if (c === EOF) {
        // return selfClaseingStarTag
    } else {

    }
}


function endTagOpen(c) {
    if (c.match(/^[a-zA-Z]$/)) {
        currentToken = {
            type: 'endTag',
            tagName: ''
        }
        return tagName(c)
    } else if (c === '>') {
        
    } else if (c === EOF) {
        // return endTagOpen
    } else {

    }
}
function afterAttributeName(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        return afterAttributeName
    } else if (c === '/') {
        return selfClaseingStarTag
    } else if (c === '=') {
        return beforeAttrbuteValue
    } else if (c === '>') {
        currentToken[currentAttribute.name] = currentAttribute.value
        emit(currentToken)
        return data
    } else if (c === EOF) {
         
    } else {
        currentToken[currentAttribute.name] = currentAttribute.value
        currentAttribute = {
            name: '',
            value: ''
        }
        return attributeName(c)
    }
}


module.exports.parserHTML = function (html) {
    let state = data
    for (let c of html) {
        state = state(c)
    }
    state = state(EOF)
    return stack[0]
}
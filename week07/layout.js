function getStyle(element) {
    if(!element.style)
        element.style = {}
    
    for(let prop in element.computedStyle) {
        var p = element.computedStyle.value
        element.style[prop] = element.computedStyle[prop].value

        if(element.style[prop].toString().match(/px$/)) {

        }
    }
}

function layout(element) {
    if(!element.computedStyle) return
    
    var elementStyle = getStyle(element)

    if(elementStyle.display !== 'flex') return

    var items = element.children.filter(e => e.type === 'element')

    items.sort(function (a, b) {
        return (a.order || 0) - (b.order || 0)
    })

    var style = elementStyle

    ['width', 'height'].forEach(size => {
        if(style[size] === 'auto' || style[size] === '') {
            style[size] = null
        }
    })

    if(!style.flexDirection || style.flexDirection === 'auto')
        style.flexDirection = 'row'
    if(!style.alignItems || style.alignItems === 'auto')
        style.alignItems = 'stretch'
    if(!style.justifyContent || style.justifyContent === 'auto')
        style.justifyContent = 'flex-start'
    if(!style.flexWrap || style.flexWrap === 'auto')
        style.flexWrap = 'nowrap'
    if(!style.alignContent || style.alignContent === 'auto')
        style.alignContent = 'stretch'
    
    var mainSize, mainStart, mainEnd, mainSign, mainBase,
    crossSize, corssStart, crossEnd, crossSign, corssBase
    if(style.flexDirection === 'row') {
        mainSize = 'width'
        mainStart = 'left'
        mainEnd = 'right'
        mainSign = +1
        mainBase = 0

        crossSize = 'height'
        corssStart = 'top'
        crossEnd = 'bottom'
    }
    if(style.flexDirection === 'row-reverse') {
        mainSize = 'width'
        mainStart = 'right'
        mainEnd = 'left'
        mainSign = -1
        mainBase = style.width

        crossSize = 'height'
        corssStart = 'top'
        crossEnd = 'bottom'
    }
    if(style.flexDirection === 'column') {
        mainSize = 'height'
        mainStart = 'left'
        mainEnd = 'right'
        mainSign = +1
        mainBase = 0

        crossSize = 'width'
        corssStart = 'left'
        crossEnd = 'right'
    }
    if(style.flexDirection === 'column-reverse') {
        mainSize = 'height'
        mainStart = 'bottom'
        mainEnd = 'top'
        mainSign = -1
        mainBase = style.height

        crossSize = 'width'
        corssStart = 'left'
        crossEnd = 'right'
    }

    if(style.flexDirection === 'wrap-reverse') {
        var tmp = 'height'
        corssStart = crossEnd
        crossEnd = tmp
        crossSign = -1
    } else {
        corssBase = 0
        crossSign = 1
    }


    var isAutoMainSize = false
    if(!style[mainSize]) {
        elementStyle[mainSize] = 0
        for(var i = 0;i < items.length;i++) {
            var item = items[i]
            if(item.style[mainSize] !== null || item.style[mainSize] !== (void 0))
                elementStyle[mainSize] = elementStyle[mainSize] + item.style[mainSize]
        }
        isAutoMainSize = true
    }
}

module.exports = getStyle
function getStyle(element) {
    if (!element.style)
        element.style = {}

    for (let prop in element.computedStyle) {
        var p = element.computedStyle.value
        element.style[prop] = element.computedStyle[prop].value

        if (element.style[prop].toString().match(/px$/)) {

        }
    }
}

function layout(element) {
    if (!element.computedStyle) return

    var elementStyle = getStyle(element)

    if (elementStyle.display !== 'flex') return

    var items = element.children.filter(e => e.type === 'element')

    items.sort(function (a, b) {
        return (a.order || 0) - (b.order || 0)
    })

    var style = elementStyle

    ['width', 'height'].forEach(size => {
        if (style[size] === 'auto' || style[size] === '') {
            style[size] = null
        }
    })

    if (!style.flexDirection || style.flexDirection === 'auto')
        style.flexDirection = 'row'
    if (!style.alignItems || style.alignItems === 'auto')
        style.alignItems = 'stretch'
    if (!style.justifyContent || style.justifyContent === 'auto')
        style.justifyContent = 'flex-start'
    if (!style.flexWrap || style.flexWrap === 'auto')
        style.flexWrap = 'nowrap'
    if (!style.alignContent || style.alignContent === 'auto')
        style.alignContent = 'stretch'

    var mainSize, mainStart, mainEnd, mainSign, mainBase,
        crossSize, corssStart, crossEnd, crossSign, corssBase
    if (style.flexDirection === 'row') {
        mainSize = 'width'
        mainStart = 'left'
        mainEnd = 'right'
        mainSign = +1
        mainBase = 0

        crossSize = 'height'
        corssStart = 'top'
        crossEnd = 'bottom'
    }
    if (style.flexDirection === 'row-reverse') {
        mainSize = 'width'
        mainStart = 'right'
        mainEnd = 'left'
        mainSign = -1
        mainBase = style.width

        crossSize = 'height'
        corssStart = 'top'
        crossEnd = 'bottom'
    }
    if (style.flexDirection === 'column') {
        mainSize = 'height'
        mainStart = 'left'
        mainEnd = 'right'
        mainSign = +1
        mainBase = 0

        crossSize = 'width'
        corssStart = 'left'
        crossEnd = 'right'
    }
    if (style.flexDirection === 'column-reverse') {
        mainSize = 'height'
        mainStart = 'bottom'
        mainEnd = 'top'
        mainSign = -1
        mainBase = style.height

        crossSize = 'width'
        corssStart = 'left'
        crossEnd = 'right'
    }

    if (style.flexDirection === 'wrap-reverse') {
        var tmp = 'height'
        corssStart = crossEnd
        crossEnd = tmp
        crossSign = -1
    } else {
        corssBase = 0
        crossSign = 1
    }


    var isAutoMainSize = false
    if (!style[mainSize]) {
        elementStyle[mainSize] = 0
        for (var i = 0; i < items.length; i++) {
            var item = items[i]
            if (item.style[mainSize] !== null || item.style[mainSize] !== (void 0))
                elementStyle[mainSize] = elementStyle[mainSize] + item.style[mainSize]
        }
        isAutoMainSize = true
    }

    var flexLine = []
    var flexLines = [flexLine]

    var mainSpace = elementStyle[mainSize]
    var crossSpace = 0

    for (var i = 0; i < item.length; i++) {
        var item = items[i]
        var itemStyle = getStyle(item)

        if (itemStyle[mainSize] === null) {
            itemStyle[mainSize] = 0
        }

        if (itemStyle.flex) {
            flexLine.push(item)
        } else if (style.flexWrap === 'nowrap' && isAutoMainSize) {
            mainSpace -= itemStyle[mainSize]
            if (itemStyle[crossSize] !== null && itemStyle[crossSize] !== (void 0))
                crossSpace = Math.max(crossSpace, itemStyle[crossSize])
            flexLine.push(item)
        } else {
            if (itemStyle[mainSize] > style[mainSize]) {
                itemStyle[mainSize] = style[mainSize]
            }
            if (mainSpace < itemStyle[mainSize]) {
                flexLine.mainSpace = mainSpace
                flexLine.crossSpace = crossSpace
                flexLine = [item]
                flexLines.push(flexLine)
                mainSpace = style[mainSize]
                crossSpace = 0
            } else {
                flexLine.push(item)
            }
            if (itemStyle[crossSize] !== null && itemStyle[crossSize] !== (void 0))
                crossSpace = Math.max(crossSpace, itemStyle[crossSize])
            mainSpace -= itemStyle[mainSize]
        }

    }
    flexLine.mainSpace = mainSpace
    if (style.flexWrap === 'nowrap' || isAutoMainSize) {
        flexLine.crossSpace = (style[crossSize] !== undefined) ? style[crossSize] : crossSpace
    } else {
        flexLine.crossSpace = crossSpace
    }

    if (mainSpace < 0) {
        var scale = style[mainSize] / (stytle[mainSize] - mainSpace)
        var currentMain = mainBase
        for (var i = 0; i < item.length; i++) {
            var item = items[i]
            var itemStyle = getStyle(item)

            if(itemStyle.flex) {
                itemStyle[mainSize] = 0
            }

            itemStyle[mainSize] = itemStyle[mainSize] * scale

            itemStyle[mainStart] = currentMain
            itemStyle[mainEnd] = itemStyle[mainStart] + mainSign * itemStyle[mainSize] 
            currentMain = itemStyle[mainEnd]
        }
    } else {
        flexLines.forEach(function (item) {
            var mainSpace = items.mainSpace
            var flexTotal = 0
            for(var i = 0;i<items.length;i++) {
                var item = items[i]
                var itemStyle = getStyle(item)
                
                if((itemStyle.flex !== null) && (itemStyle.flex !== (void 0))) {
                    flexTotal += itemStyle.flex
                    continue
                }
            }

            if(flexTotal > 0) {
                var currentMain = mainBase
                for(var i = 0;i<items.length;i++) {
                    var item = items[i]
                    var itemStyle = getStyle(item)

                    if(itemStyle.flex) {
                        itemStyle[mainSize] = (mainSpace / flexTotal) * itemStyle.flex
                    }
                    itemStyle[mainStart] = currentMain
                    itemStyle[mainEnd] = itemStyle[mainStart] + mainSign * itemStyle[nainSize]
                    currentMain = itemStyle[mainEnd]
                }
            } else {
                if(stytle.justifyContent = 'flex-start') {
                    var currentMain = mainBase
                    var step = 0
                }
                if(style.justifyContent = 'flex-end') {
                    var currentMain = mainSpace * mainSign + mainBase
                    var step = 0
                }
                if(style.justifyContent = 'center') {
                    var currentMain = mainSpace / 2 * mainSign + mainBase
                    var step = 0
                }
                if(style.justifyContent === 'space-between') {
                    var step = mainSpace / (item.length - 1) * mainSign
                    var currentMain = mainBase
                }
                if(style.justifyContent === 'space-around') {
                    var step = mainSpace / items.length * mainSign
                    var currentMain = step / 2 + mainBase
                }
                for(var i = 0;i< item.length;i++) {
                    var item = items[i]
                    itemStyle[mainStart, currentMain]
                    itemStyle[mainEnd] = itemStyle[mainStart] + mainSign * itemStyle[mainSize]
                    currentMain = itemStyle[mainEnd] + step
                }
            }
        })
    }
    var crossSpace
    if(!style[crossSize]) {
        crossSpace = 0
        elementStyle[crossSize] = 0
        for(var i = 0;i < flexLines.length;i++) {
            elementStyle[crossSize] = elementStyle[crossSize] + flexLines[i].crossSpace
        }
    } else {
        crossSpace = stytle[crossSize]
        for(var i = 0;i < flexLines.length;i++) {
            crossSpace -= flexLines[i].crossSpace
        }
    }

    if(style.flexWrap === 'wrap-reverse') {
        corssBase = style[crossSize]
    } else {
        corssBase = 0
    }
    var lineSize = style[crossSize] / flexLines.length

    var step
    if(style.alignContent === 'flex-start') {
        corssBase += 0
        step = 0
    }
    if(style.alignContent === 'flex-end') {
        corssBase += crossSign * crossSpace
        step = 0
    }
    if(style.alignContent === 'center') {
        corssBase += crossSign * crossSpace / 2
        step = 0
    }
    if(style.alignContent === 'space-between') {
        corssBase += 0
        step = crossSpace / (flexLines.length - 1)
    }
    if(style.alignContent === 'space-around') {
        step = crossSpace / (flexLines.length)
        corssBase += crossSign * step / 2
    }
    if(style.alignContent === 'stretch') {
        corssBase += 0
        step  = 0
    }
    flexLines.forEach(function (items) {
        var lineCrossSize = style.alignContent === 'stretch' ? items.crossSpace + crossSpace / flexLines.length : items.crossSpace
        for(var i = 0;i < items.length;i++) {
            var item = items[i]
            var itemStyle = getStyle(item)

            var align = itemStyle.alignSelf || style.alignItems

            if(item  === null)
                itemStyle[crossSize] = (align === 'stretch') ? lineCrossSize : 0
            
            if(align === 'flex-start') {
                itemStyle[corssStart] = corssBase
                itemStyle[crossEnd] = itemStyle[corssStart] + crossSign * itemStyle[crossSize]
            }
            
            if(align === 'flex-end') {
                itemStyle[crossEnd] = corssBase + crossSign * lineCrossSize
                itemStyle[corssStart] = itemStyle[crossEnd] - crossSign * itemStyle[crossSize]
            }
            if(align === 'center') {
                itemStyle[corssStart] = corssBase + crossSign * (lineCrossSize - itemStyle[crossSize]) / 2
                itemStyle[crossEnd] = itemStyle[corssStart] + crossSign * itemStyle[crossSize]
            }

            if(align === 'stretch') {
                itemStyle[corssStart] = corssBase
                itemStyle[crossEnd] = corssBase + crossSign * ((itemStyle[crossSize] !== null && itemStyle[crossSize] !== (void 0)) ? itemStyle[crossSize] : lineCrossSize)
                itemStyle[crossSize] = crossSign * (itemStyle[crossEnd] - itemStyle[corssStart])
            }
        }
        corssBase += crossSign * (lineCrossSize + step)
    })
    console.log(items);
    
}

module.exports = getStyle
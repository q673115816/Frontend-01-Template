# 每周总结可以写在这里

### 2-1 
1. BNF

### 2-2
1. 字符集unicode
https://www.fileformat.info/info/unicode/
Blocks
Categories

InputElement

    WhiteSpace
        feff BOM 大端法 小端法
    LineTerminator
    Comment
    Token
        Identifier
        Keywords
        
        Punctuator
        Literal
            Nubmer
            String
            Boolean
            Null
            Undefined
            Object
            SymBol
            

### 作业1 写一个正则表达式 匹配所有 Number 直接量
```javascript
/**
* @param { string } str
* @return { string }
*/
module.exports = 
function customDecode(str) {
    const code2 = /(0[bB][01]*(?=0b|0x|0o|$))|(0[oO][0-7]*(?=0b|0x|0o|$))|(0[xX][0-9a-fA-F]*(?=0b|0x|0o|$))/g;
    return str.replace(code2, function(match, p1, p2, p3) {
        if(p1) return parseInt(match.slice(2), 2)
        if(p2) return parseInt(match.slice(2), 8)
        if(p3) return parseInt(match.slice(2), 16)
    })
}
```
### 作业2 写一个 UTF-8 Encoding 的函数
```javascript
/**
* @param { string } str
* @return { string }
*/
module.exports = 
function customDecode(str) {
    if(typeof str !== 'string') throw Error('not string')
    let result = ''
    // 大于0xffff会被认为是两个字符
    // https://es6.ruanyifeng.com/#docs/string-methods#实例方法：codePointAt
    for(let val of str) {
        result += '\\u' + val.codePointAt(0).toString(16)
    }
    return result
}
//customDecode("𠮷𠮷")// "\u20bb7\u20bb7"
//customDecode("☝")// "\u261d"
```


### 作业3 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
```javascript
/**
* @param {string} str
*/
module.exports = 
function customMatch(str) {
    const reg = /[\u4e00-\u9fa5\'\"‘’“”]/g
    return str.match(reg)
}
```

### 学习总结
2-1  
js 属于上下文无关文法
>例外： 内置的 get set 方法  
>
2-2  
基本多文种平面（Basic Multilingual Plane，BMP），或称第零平面（Plane 0），是Unicode中的一个编码区段。编码从U+0000至U+FFFF。
Unicode 编码单元（code points）的范围从 0 到 1,114,111（0x10FFFF）。开头的 128 个 Unicode 编码单元和 ASCII 字符编码一样。
对于超出0xffff的编码单元 js只能读取第一位上的16进制，必须用两个双字节的形式表示。  
"\uD842\uDFB7" // "𠮷"  
"\u20BB7"  
// " 7"  
es6 中使用了大括号就可以识别  
"\u{20BB7}"  
// "𠮷"  

64位浮点数

![General_double_precision_float](./General_double_precision_float.png "General_double_precision_float")

数值的精度只能到 53 个二进制位（相当于 16 个十进制位）所以通过这种格式编码，  
对于小数，只能精确表示0.5（Math.pow(2,-1)), 0.25(Math.pow(2,-2)). 0.125(Math.pow(2,-3))...
或者0.5+0.25，0.5+0.125这种类型  
对于你说的1.337，其小数部分是0.337，他不能够通过2的N次方或者2的N次方相加得到。  
大致0.337= 0.25+ 0.0625+0.015625+ ...

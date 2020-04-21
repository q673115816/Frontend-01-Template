# 每周总结可以写在这里

### 作业1 写一个正则表达式 匹配所有 Number 直接量
```javascript
/**
* @param { string } str
* @return { string }
*/
module.exports = 
function customDecode(str) {
    const code2 = /(0[bB][01]*(?=0b|0x|0o|$))|(0[oO][0-7]*(?=0b|0x|0o|$))|(0x[0-9a-fA-F]*(?=0b|0x|0o|$))/g;
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
        result += '\\u' + str.charCodeAt(i).toString(16)
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
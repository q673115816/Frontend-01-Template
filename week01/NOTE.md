# 每周总结可以写在这里

随堂作业
1. 解析URL
 window.location 内置了分析链接的方法
 可以自己实现一个方法解析链接
 ```javascript
module.export = function decodeUrl(str) {
    let url = str || window.location.href
    // 防御判断
    if(typeof url !== 'string') {
        throw Error('type need string')
    }    
    let result = {}
    result.fullPath = url
    result.query = {}
    result.hash = ''
    result.origin = ''
    result.pathname = ''
    result.search = ''
    result.port = ''
    
    return result
}
```
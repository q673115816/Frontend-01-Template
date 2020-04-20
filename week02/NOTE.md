# 每周总结可以写在这里

### 作业1 转成10进制
```javascript
module.export = 
function customDecode(str) {
    const code2 = /(0b[01]*(?=0b|0x|0o|$))|(0o[0-7]*(?=0b|0x|0o|$))|(0x[0-9a-fA-F]*(?=0b|0x|0o|$))/g;
    return str.replace(code2, function(match, p1, p2, p3) {
        if(p1) return parseInt(match.slice(2), 2)
        if(p2) return parseInt(match.slice(2), 8)
        if(p3) return parseInt(match.slice(2), 16)
    })
}
```
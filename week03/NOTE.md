# 每周总结可以写在这里

### 1-1 
类型转换
作业  
```javascript
/**
* @param {String} str
* @param {String, Number} target
* @return {Number}
*/
module.exports = 
function convertStringToNumber (str, target) {
    let chars = str.split('')
    let number = 0
    for(let i =0;i<chars.length;i++) {
        number = number * target
        number += chars[i].codePointAt(0) - '0'.charCodeAt()    
}
    return number
}
/**
* @param {Number} num
* @param {String, Number} target
* @return {Number}
*/
module.exports =
function convertNumberToString(num, target) {

}
```

### 2-1
找出 JavaScript 标准里有哪些对象是我们无法实现出来的，都有哪些特性？写一篇文章，放在学习总结里。


### 学习总结
1-1  
解释器读取到语法后，会进行LHS查询和RHS查询 
lhs进行赋值操作，在左，
rhs取值操作，在右  
运算优先级  
带参数的new运算符优先（函数调用同级，某种意义上就是函数调用优先于new，再反推new运算优于函数调用:是优上加优）

# 先欠着
const { parseHTML } = require('./src/parser')

let dom = parseHTML('<div>\
<img src="porn.png"/>\
<br style="margin-top: 10px;"/>\
<div id>hello world!</div>\
<div name=q></div>\
</div>')

console.log(dom);
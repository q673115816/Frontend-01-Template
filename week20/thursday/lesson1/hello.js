var page = require('webpage').create();
page.open('http://localhost:3000', function (status) {
    console.log("Status: " + status);
    if (status === "success") {
        var result = page.evaluate(function () {
            // return document.title
            var toString = function (pad, element) {
                var children = element.childNodes
                var childrenString = ''
                for (var i = 0; i < children.length; i++) {
                    childrenString += toString('    ' + pad, children[i]) + '\n'
                }
                var name
                if (element.nodeType === Node.TEXT_NODE) {
                    name = '#text' + JSON.stringify(element.textContent)
                }
                if (element.nodeType === Node.ELEMENT_NODE) {
                    name = element.tagName
                }
                return pad + name + (childrenString ? '\n' + childrenString : '')
            }
            return toString('', document.body)
        })
        console.log(result);
    }
    phantom.exit();
});
const parser = require('./parser(2).js')

module.exports = function (source, map) {
    var html = parser.parseHTML(source)
    console.log(html.children[1])
    // console.log('hello world!', this.resourcePath)
    return ''
}
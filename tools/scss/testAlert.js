let compile = require('./compileScss');
let path = require('path');
console.log('__dirname：', path.normalize(__dirname))
console.log('__filename：', __filename)
console.log('process.cwd()：', process.cwd())
console.log('./：', path.resolve('./'))
console.log('sep:',path.sep)
console.log('process.argv=',process.argv)

compile(path.resolve('./node_modules/element-ui/packages/theme-chalk/src/alert.scss'),'./tests/scss/result/');
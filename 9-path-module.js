const path = require('path')

console.log(path.sep)

const filepath = path.join('/node/','subfolder','test.txt')

console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname, 'node', 'subfolder', 'test.txt')
console.log(absolute)
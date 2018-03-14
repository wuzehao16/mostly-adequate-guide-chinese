const _ = require('ramda');

var add = _.curry(function(a , b) {
  console.log(a+b)
  return a + b
})
add(1)
add(1)
add(1)
add(1)
add(1)
var a = add(100)
console.log(a)

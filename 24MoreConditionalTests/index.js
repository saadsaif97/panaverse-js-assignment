console.log('=> Tests for equality and inequality with strings:')
let string = 'string'
console.log(string == 'String')
console.log(string == 'string')
console.log('=> Tests using the lower case function:')
console.log(string == 'String'.toLowerCase())
console.log(string == 'string'.toLowerCase())
console.log('=> Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:')
let number = 5
console.log(number == 5, number != 4, 1 < number && number < 6, number >= 5, number <= 5)
console.log(number == 4, number != 5, 1 < number && number < 4, number >= 4, number <= 3)
console.log('=> Tests using "and" and "or" operators:')
console.log(1 < number && number < 6, 1 < number || number < 3)
console.log(1 < number && number < 4, 5 < number || number < 3)
console.log('=> Test whether an item is in a array:')
let array = [1,2,3,4,5]
console.log(array.includes(5))
console.log('=> Test whether an item is not in a array:')
console.log(array.includes(7))

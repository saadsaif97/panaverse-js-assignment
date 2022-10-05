function make_shirt(size='L', message='I love JS') {
  return {size, message}
}

console.log(make_shirt())
console.log(make_shirt('XL', 'I love TS'))

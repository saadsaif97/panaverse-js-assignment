let magicians = ['zia', 'daniyal', 'saad']

function show_magicians() {
  magicians.forEach(magician => console.log(magician))
}

function make_great() {
  return magicians.map(magician => `The Great ${magician}`)
}

let greatMagicians = make_great()
console.log(greatMagicians)
show_magicians()

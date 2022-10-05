let magicians = ['zia', 'daniyal', 'saad']

function show_magicians(magicians) {
  magicians.forEach(magician => console.log(magician))
}

function make_great() {
  magicians = magicians.map(magician => `The Great ${magician}`)
}

make_great()
show_magicians(magicians)

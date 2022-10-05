// adding the method to the prototype of the String
String.prototype.toTitleCase = toTitleCase
function toTitleCase() {
  let words = this.split(' ')
  let capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
  });
  return capitalizedWords.join(' ')
}


let person = "saad saif"
console.log({
  lowerCase: person.toLowerCase(), 
  upperCase: person.toUpperCase(), 
  titleCase: person.toTitleCase()
})



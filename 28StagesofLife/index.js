let age = 25

if (age < 2) {
  console.log('the person is ' + 'kid')
} else if (2 <= age && age < 4) {
  console.log('the person is ' + 'toddler')
} else if (4 <= age && age < 13) {
  console.log('the person is ' + 'kid')
} else if (13 <= age && age < 20) {
  console.log('the person is ' + 'teenager')
} else if (20 <= age && age < 65) {
  console.log('the person is ' + 'adult')
} else if (65 <= age) {
  console.log('the person is ' + 'elder')
} 

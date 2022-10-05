let current_users = ['zia', 'daniyal', 'zeeshan', 'qamar', 'ahmad']
let new_users = ['ali', 'farhan', 'saad', 'Qamar', 'AHMAD']


new_users.forEach(newUser => {
  let userAlreeadyAvailable = current_users.some(currentUser => currentUser.toLowerCase() == newUser.toLowerCase())
  if (userAlreeadyAvailable) {
    console.log(`Enter a new username: ${newUser} is already taken`)
  } else {
    console.log(`Username: ${newUser} is available`)
  }
})
let names = ['Ali', 'Qamar', 'Ahmad']

let guestNotComing = 'Ali'
console.log('Guest not coming to dinner:' + guestNotComing)

let newGuest = 'Umar'

names.forEach(name => {
  if (name == guestNotComing) name = newGuest
  console.log(`Hi ${name}! I would like you to come and have dinner with me`)
})
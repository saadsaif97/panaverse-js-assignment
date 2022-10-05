let names = ['Ali', 'Qamar', 'Ahmad']

let guestNotComing = 'Ali'
console.log('Guest not coming to dinner:' + guestNotComing)

let newGuest = 'Umar'

let newGuests = ['start', 'middle', 'end']
let [start, mid, end] = newGuests
console.log('new guests are coming to the dinner: ' + newGuests)

names.unshift(start)
names.splice(2, 0, mid)
names.push(end)

names.forEach(name => {
  if (name == guestNotComing) name = newGuest
  console.log(`Hi ${name}! I would like you to come and have dinner with me`)
})
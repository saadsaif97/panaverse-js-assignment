let guestsInvited = ['Ali', 'Qamar', 'Ahmad']

let guestNotComing = 'Ali'
console.log('Guest not coming to dinner:' + guestNotComing)
let newGuest = 'Umar'

let newGuests = ['start', 'middle', 'end']
let [start, mid, end] = newGuests
console.log('new guests are coming to the dinner: ' + newGuests)

guestsInvited.unshift(start)
guestsInvited.splice(2, 0, mid)
guestsInvited.push(end)

console.log('======================', 'SENDING INVITES')


guestsInvited.forEach(name => {
  if (name == guestNotComing) name = newGuest
  console.log(`Hi ${name}! I would like you to come and have dinner with me`)
})

console.log('======================', 'REALIZATION')

console.log('I just realized that I am only able to invite only two peaople')

console.log('======================', 'CANCEL MESSAGES')
while (guestsInvited.length > 2) {
  let removedGuest = guestsInvited.pop()
  console.log(`Hey ${removedGuest}! The dinner is postponed with you for this time, we will have in near future.`)
}
console.log('======================', 'REINVITE 2 GUEST')
guestsInvited.forEach(name => {
  console.log(`Hi ${name}! You are still invited as I have only capaty for first two guests`)
})

module.exports = {
  guestsInvited
}

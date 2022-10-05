itemsOnSandwitch('mashrooms', 'cheese', 'olives', 'onions')
itemsOnSandwitch('mashrooms', 'olives', 'onions')
itemsOnSandwitch('mashrooms')


function itemsOnSandwitch(...items) {
  console.log('Person wants: ' + items.join(', ') + ' on sandwitch')
}
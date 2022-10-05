let car = {}

storeCarInfo('Toyota', 'Fortuner', {color: 'black'})
console.log(car)


function storeCarInfo(manufaturer, model, {...rest}) {
  car = { manufaturer, model, ...rest }
}

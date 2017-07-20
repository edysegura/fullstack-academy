const products = [
  {
    name: 'Bicycle',
    price: 1200.0
  },
  {
    name: 'Helmet',
    price: 450.0
  }
]

const onlyPrice = (product) => product.price
const adder = (previousValue, currentValue) => previousValue + currentValue

const total = products.map(onlyPrice).reduce(adder)

console.log('Total: ', total)
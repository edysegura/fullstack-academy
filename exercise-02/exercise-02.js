const products = [
  {
    id: 1,
    price: 10.0,
    qty: 2
  },
  {
    id: 2,
    price: 10.0,
    qty: 2
  },
  {
    id: 3,
    price: 10.0,
    qty: 2
  },
  {
    id: 4,
    price: 10.0,
    qty: 0
  }
]

const isGreaterThanZero = (product) => product.qty > 0
const subTotal = (product) => {
    return {
        id: product.id,
        subTotal: product.price * product.qty
    }
}
const summary = (added, currentProduct) => {
    return added + currentProduct.subTotal
}

const total = products
                .filter(isGreaterThanZero)
                .map(subTotal)
                .reduce(summary, 0)

console.log('Summary: ' + total)
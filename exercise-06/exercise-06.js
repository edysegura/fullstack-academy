const app = require('express')()
const PORT = 3000

app.get('/', (request, response) => {
    response.send('<a href="/sum?num1=10&num2=30">Sum 10 + 30</a>')
})

const getSum = (...numbers) => {
    const adder = (previousValue, currentValue) => { 
        return previousValue + parseFloat(currentValue)
    }
    const INITIAL_VALUE = 0
    return numbers.reduce(adder, INITIAL_VALUE)
}

app.get('/sum', (request, response) => {
    const { num1, num2 } = request.query
    const sum = getSum(num1, num2)
    response.send('The sum is: ' + sum)
})

app.listen(PORT, () => console.log('Server running at port: ' + PORT))
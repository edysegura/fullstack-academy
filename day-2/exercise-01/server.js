const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

//express setup
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

//template
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//data
const data = {
    title: 'Interest Rate Calculator',
    value: null,
    rate: null,
    months: null,
    amount: null,
    projection: []
}

//business logic
const calculateInterest = (p, r, t) => p * Math.pow( 1 + r, t)

const fillData = ({value, rate, months}) => {
    data.value = parseFloat(value) || null
    data.rate = parseFloat(rate) || null
    data.months = parseFloat(months) || null
    data.projections = []
}

const projections = (data) => {
    const t = data.months
    const monthArray = Array.from(new Array(t), (t, i) => i + 1)

    data.projections = monthArray.map(month => {
        const amount = calculateInterest (
            data.value,
            data.rate / 100,
            month
        )
        return { month, amount }
    })
}

//routes
app.get('/', (request, response) => {
    fillData({})
    response.render('index', data)
})

app.get('/calculate', (request, response) => {
    fillData(request.query)
    projections(data)
    response.render('index', data)
})

app.listen(PORT, error => console.log('Server running on PORT: ' + PORT))
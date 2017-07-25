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

app.get('/', (request, response) => {
    const title = 'Interest Rate Calculator'
    response.render('index', { title })
})

app.listen(PORT, error => console.log('Server running at ' + PORT))
const express = require('express')
const morgan = require('morgan');
const path = require('path');
const app = express()
const port = 3000
    //--------------------------------------------//
app.use(express.static(path.join(__dirname,'/public')))
const handlebars = require('express-handlebars')
const hbs = handlebars.create({ extname: '.hbs' })
    // TEMPLATE ENGINE
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources\\views')); // cách mình tìm đến file, hệ điều hành window


//console.log('PATH: ', path.join(__dirname, 'resources/views')) 
//
//HTTP logger
app.use(morgan('combined'));
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/News', (req, res) => {
    res.render('News')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    console.log('PATH: ', path.join(__dirname, 'resources/views'))
})
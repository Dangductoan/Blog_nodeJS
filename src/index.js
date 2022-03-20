const express = require('express')
const morgan = require('morgan');
const path = require('path');
const app = express()
const port = 3000
    //--------------------------------------------//
    const handlebars = require('express-handlebars')
    const hbs = handlebars.create({ extname: '.hbs' })
//--------------------------------------------//
const route = require('./routes');
const { vary } = require('express/lib/response');

    app.use(express.static(path.join(__dirname,'/public')))
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.json());
    app.use(morgan('combined'));

    // TEMPLATE ENGINE
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources\\views')); // cách mình tìm đến file, hệ điều hành window


//console.log('PATH: ', path.join(__dirname, 'resources/views')) 
//Routes init
route(app)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    console.log('PATH: ', path.join(__dirname, 'resources/views'))
})




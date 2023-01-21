const xpress = require('express');
const path = require('path');
const validator = require('validator');
const bodyParser = require('body-parser');

const app = xpress();
app.set('view engine', 'hbs');

console.log(path.join(__dirname, '../public'));

app.use(xpress.static(path.join(__dirname, '../public/build')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('', (req, res) => {
    // res.send('<h1>Hello WD19P learners</h1>');
    res.sendFile(path.join(__dirname, '../public/build/index.html'));
});

app.get('/test', (req, res) => {
    res.send('You have reached /test');
});

app.get('/customer', (req, res) => {
    res.send({
        "name": "Erwin",
        "age": 55
    });
});

app.get('/customers', (req, res) => { 
    let customers = [
        {
            "name": "ERwin",
            "age": 55
        },
        {
            "name": "Juan",
            "age": 45
        },
        {
            "name": "Pedro",
            "age": 30
        },
        {
            "name": "Maria Clara",
            "age": 25
        },
        {
            "name": "Sisa",
            "age": 23
        }
    ];
    res.send(customers);
});
 
app.get('/about', (req, res) => { 
    let sum = 5 + 4;
    res.send(`About Page and sum is ${sum}`);
});

app.get('/weather', (req, res) => { 
    res.send(`Weather Page  (Cloudy)`);
});
 
app.get('/template', (req, res) => { 
    console.log(req.query.t);
    let product = 10 * 5;
    if (validator.isNumeric(req.query.t)) { 
        product = parseInt(req.query.t) * 10;
    }
   
    res.render('template', {
        "product": product,
        "title": "Dynamic Content Rendering",
        "heading": "Templating With Handlebars"
    });
});

app.post('/register', (req, res) => { 
    console.log(req.body);    
    res.render('registration-result', {
        "fullname": req.body.fullname,
        "email": req.body.email
    });
});


app.get('/products', (req, res) => { 
    let products = [
        {
            "product_id": "001",
            "product_name": "Nokia 5510",
            "price": 8000
        },
        {
            "product_id": "002",
            "product_name": "iPad",
            "price": 80000
        },
        {
            "product_id": "003",
            "product_name": "Kukri",
            "price": 5000
        }
    ];

    res.send(products);

});

app.get('/new', (req, res) => { 
    res.send("New Route Here");
});


app.listen(3000, () => { 
    console.log('SERVER UP AND RUNNING ON PORT 8080');
});
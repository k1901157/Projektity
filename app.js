const express = require('express');
const PORT = process.env.PORT || 8080;
const body_parser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');

//Controllers
const auth_controller = require('./controllers/auth_controller');
const ticket_controller = require('./controllers/ticket_controller');

let app = express();

app.use(body_parser.urlencoded({
    extended: true
}));

app.use(session({
    secret: 'IT/1234qwerty',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000000
    }
}));

let users = [];

app.use((req, res, next) => {
    console.log(`path: ${req.path}`);
    next();
});

const is_logged_handler = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    next();
};


app.use('/style', express.static('style'));


//Auth
app.use(auth_controller.handle_user);
app.get('/login', auth_controller.get_login);
app.post('/login', auth_controller.post_login);
app.post('/register', auth_controller.post_register);
app.post('/logout', auth_controller.post_logout);

//tickets
app.get('/', is_logged_handler, ticket_controller.get_home);
app.get('/home', is_logged_handler, ticket_controller.get_home);

app.get('/incidents', is_logged_handler, ticket_controller.get_incidents);
app.post('/add-ticket', is_logged_handler, ticket_controller.post_incident);
app.post('/delete-incident', is_logged_handler, ticket_controller.post_delete_incident);

app.get('/orders', is_logged_handler, ticket_controller.get_orders);
app.post('/add-order', is_logged_handler, ticket_controller.post_order);
app.post('/delete-order', is_logged_handler, ticket_controller.post_delete_order);



app.get('/ticket/:id', is_logged_handler, ticket_controller.get_ticket);


//app.post('/add-product/:id', is_logged_handler, ticket_controller.post_product);




app.use((req, res, next) => {
    res.status(404);
    res.send(`
        page not found
    `);
});



//Shutdown server CTRL + C in terminal
//dsbk2gl4QNbbxQUX
//bTRE53AvKm4x0wT0
const mongoose_url = 'mongodb+srv://dbIT:dsbk2gl4QNbbxQUX@cluster0-2p2en.mongodb.net/IT_SD?retryWrites=true&w=majority';

mongoose.connect(mongoose_url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Mongoose connected');
    console.log('Start Express server');
    app.listen(PORT);
});
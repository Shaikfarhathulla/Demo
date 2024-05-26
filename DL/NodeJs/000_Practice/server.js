const express = require('express');
const usersCtrl = require('./controllers/users.ctrl');
const productsCtrl = require('./controllers/products.ctrl');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

app.use(bodyParser.json());

app.get('/', function (request, response) {
    console.log(request.url);
    response.send({ message: "Welcome to the nodemon" });
});

app.get('/users', usersCtrl.getUsers)
app.delete('/users/:userId', usersCtrl.deleteUser);
app.post('/addUser', usersCtrl.addUser);
app.patch('/updateUser/:userId', usersCtrl.updateUser);

app.get('/products', productsCtrl.getAllProducts)
app.get('/product/:productId', productsCtrl.getProduct)
app.post('/createProduct', productsCtrl.create)

app.listen(4000, function () {
    console.log("Server has started 4000");
})

const mongodbConnection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/ecommerce-app');
        console.log("db is on running");
    } catch (error) {
        console.log(error);
    }
};
mongodbConnection();

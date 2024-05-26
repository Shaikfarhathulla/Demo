const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const usersCtrl = require('./controllers/users.ctrl');

app.get('/', function(req, res) {
    res.status(200);
    res.send({
        status: 'Welcome to Ecommerce app services'
    });
});

// app.get('/users', function(req, res) {
//     const users = [
//         {
//             id: 1,
//             name: 'Bhargav',
//             organization: 'Birla Soft'
//         },
//         {
//             id: 2,
//             name: 'Dinesh',
//             organization: 'TCS'
//         },
//         {
//             id: 3,
//             name: 'Yashwanth',
//             organization: 'MindTree'
//         }
//     ];

//     res.status(200);
//     res.send({data: users, status: 'Fetched users successfully'});
// });

app.use(bodyParser.json());

app.get('/users/:userId', usersCtrl.getUser);
app.delete('/users/:userId', usersCtrl.deleteUser);
app.get('/users', usersCtrl.getUsers);
app.post('/users', usersCtrl.addUser);
app.put('/users/:userId', usersCtrl.updateUser);
app.patch('/users/:userId', usersCtrl.partialUpdateUser);

app.get('/employees', function(req, res) {
    const employees = [
        {
            id: 1,
            name: 'Bhargav',
            designation: 'Software Engineer'
        },
        {
            id: 2,
            name: 'Dinesh',
            designation: 'Trainee Engineer'
        },
        {
            id: 3,
            name: 'Yashwanth',
            designation: 'Manager'
        }
    ];

    res.status(200);
    res.send({data: employees});
});

// Starting express server
app.listen(4000, function() {
    console.log('EC Services is up on running on 4000.');
});

const mongooseConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.utykj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log('db is up on running');
    } catch(error) {
        console.log(error);
    }
};

mongooseConnection();

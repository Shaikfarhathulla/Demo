// Importing express package
const express = require('express');

// Creating express object 
const app = express();

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

app.get('/users/:userId', usersCtrl.getUser);
app.get('/users', usersCtrl.getUsers);

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
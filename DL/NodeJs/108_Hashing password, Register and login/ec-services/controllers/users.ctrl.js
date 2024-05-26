const users = [
    {
        id: 1,
        name: 'Bhargav',
        organization: 'Birla Soft',
        isDeleted: true
    },
    {
        id: 2,
        name: 'Dinesh',
        organization: 'TCS'
    },
    {
        id: 3,
        name: 'Yashwanth',
        organization: 'MindTree'
    }
];

const usersCtrl = {
    getUsers: (req, res) => {
        res.status(200);
        res.send({data: users, status: 'Fetched users successfully'});
    },
    getUser: (req, res) => {
        const filteredUser = users.find(user => user.id == req.params.userId);
        if (filteredUser) {
            res.status(200);
            res.send({
                data: filteredUser
            });
        } else {
            res.status(404);
            res.send({
                error: 'NotFound',
                errorDescription: 'Users doesnot exist with the user id.'
            });
        }
    },
    deleteUser: (req, res) => {
        const index = users.findIndex(user => user.id == req.params.userId);
        if (index !== -1) {
            users.splice(index, 1);
            res.status(200);
            res.send({
                data: users,
                status: 'User deleted successfully'
            });
        } else {
            res.status(404);
            res.send({
                error: 'NotFound',
                errorDescription: 'Users doesnot exist with the user id.'
            });
        }
    },
    addUser: (req, res) => {
        users.push({
            id: users.length + 1,
            ...req.body
        });
        res.status(201);
        res.send({
            status: 'User added successfully'
        });
    },
    updateUser: (req, res) => {
        const index = users.findIndex(user => user.id == req.params.userId);
        if (index !== -1) {
            users[index].name = req.body.name;
            users[index].organization = req.body.organization;
            res.status(200);
            res.send({
                status: 'Updated user successfully'
            });
        } else {
            res.status(404);
            res.send({
                error: 'NotFound',
                errorDescription: 'Users doesnot exist with the user id.'
            });
        }
    },
    partialUpdateUser: (req, res) => {
        const index = users.findIndex(user => user.id == req.params.userId);
        if (index !== -1) {
            for (let key in req.body) {
                users[index][key] = req.body[key];
            }
            res.status(200);
            res.send({
                status: 'Updated user successfully'
            });
        } else {
            res.status(404);
            res.send({
                error: 'NotFound',
                errorDescription: 'Users doesnot exist with the user id.'
            });
        }
    }
};

module.exports = usersCtrl;
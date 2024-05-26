const users = [
    {
        id: 1,
        name: 'Shaik',
        age: 23
    },
    {
        id: 2,
        name: 'Him',
        age: 25
    },
    {
        id: 3,
        name: 'Ravi',
        age: 45
    }
]

const usersCtrl = {
    getUsers: (req, res) => {
        res.status(200);
        res.send({ users, status: 'Data success' });
    },
    deleteUser: (req, res) => {
        const id = req.params.userId;
        const filterUser = users.filter(user => user.id == id);
        res.status(200);
        res.send({ filterUser });
    },
    addUser: (req, res) => {
        users.push({
            id: users.length + 1,
            ...req.body
        })
        res.status(201);
        res.send({ users });
    },
    updateUser: (req, res) => {
        const index = users.findIndex(user => user.id == req.params.userId)
        if (index != -1) {
            for (let key in req.body) {
                users[index][key] = req.body[key];
            }
            res.status(200);
            res.send({ status: 'User Updated successfully', users });
        } else {
            res.status(400);
            res.send({ status: 'user not found' });
        }
    }
}

module.exports = usersCtrl;
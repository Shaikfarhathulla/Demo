const users = [
    {
        id: 1,
        name: 'Bhargav',
        organization: 'Birla Soft'
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
        console.log('-----')
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

    }
};

module.exports = usersCtrl;
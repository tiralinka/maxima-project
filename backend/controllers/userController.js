let users = [
    {
        login: 'admin',
        password: 'admin'
    },
    {
        login: 'user',
        password: 'user'
    }
]

class UserController {
    async getAll(req, res) {
        return res.json(users)
    }
}

module.exports = new UserController()

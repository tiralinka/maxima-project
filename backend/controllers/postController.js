let posts = [
    {
        id: 1,
        title: 'Pizza',
        description: 'Hot',
        price: 300,
        image: 'https://cdn1.savepice.ru/uploads/2021/12/20/ac5feb3f0862332a0a5235eaa3f8a180-full.jpg'
    },
    {
        id: 2,
        title: 'Burgers',
        description: 'Meaty',
        price: 999,
        image: 'https://cdn1.savepice.ru/uploads/2021/12/20/ac5feb3f0862332a0a5235eaa3f8a180-full.jpg'

    },
    {
        id: 3,
        title: 'Sushi',
        description: 'Asian',
        price: 400,
        image: 'https://cdn1.savepice.ru/uploads/2021/12/20/ac5feb3f0862332a0a5235eaa3f8a180-full.jpg'
    },
    {
        id: 4,
        title: 'Desserts',
        description: 'Sweet',
        price: 600,
        image: 'https://cdn1.savepice.ru/uploads/2021/12/20/ac5feb3f0862332a0a5235eaa3f8a180-full.jpg'
    },
    {
        id: 5,
        title: 'Drinks',
        description: 'Refreshing',
        price: 99,
        image: 'https://cdn1.savepice.ru/uploads/2021/12/20/ac5feb3f0862332a0a5235eaa3f8a180-full.jpg'
    }
]

class PostController {

    async getPosts(req, res) {
        return res.json(posts)
    }

    async deletePost(req, res) {
        const index = posts.findIndex(post => post.id == req.params.id)
        posts.splice(index, 1)
        return res.json(posts)
    }

    async getOne(req, res) {
        const {id} = req.params
        const post = posts.find(post => post.id == id)
        return res.json(post)
    }

    async postPost(req, res) {
        try {
            posts.push({...req.body})
            return res.json(posts)
        } catch (e) {
            console.log(e)
            return res.json(null)
        }

    }

}

module.exports = new PostController()

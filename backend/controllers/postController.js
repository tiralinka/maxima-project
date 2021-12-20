let posts = [
    {
        id: 1,
        title: 'Pizza',
        description: 'Hot',
        price: 'This section is under development',
    },
    {
        id: 2,
        title: 'Burgers',
        description: 'Meaty',
        price: 'This section is under development',

    },
    {
        id: 3,
        title: 'Sushi',
        description: 'Asian',
        price: 'This section is under development',
    },
    {
        id: 4,
        title: 'Desserts',
        description: 'Sweet',
        price: 'This section is under development',
    },
    {
        id: 5,
        title: 'Drinks',
        description: 'Refreshing',
        price: 'This section is under development',
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

let posts = [
    {
        id: 1,
        title: 'Pizza',
        description: 'Hot',
        price: 300,
        image: 'https://cdn1.savepice.ru/uploads/2021/12/25/01e249ae0e33d3b18df07774774828fc-full.jpg'
    },
    {
        id: 2,
        title: 'Burgers',
        description: 'Meaty',
        price: 999,
        image: 'https://cdn1.savepice.ru/uploads/2021/12/25/6e24e89b5eaf81f0d55c06a77b6e79de-full.jpg'

    },
    {
        id: 3,
        title: 'Sushi',
        description: 'Asian',
        price: 400,
        image: 'https://cdn1.savepice.ru/uploads/2021/12/25/36f062aab999db24699b01f8e0a9e80f-full.jpg'
    },
    {
        id: 4,
        title: 'Desserts',
        description: 'Sweet',
        price: 600,
        image: 'https://cdn1.savepice.ru/uploads/2021/12/25/dc043634b7faa5131dfa4b5272499c68-full.jpg'
    },
    {
        id: 5,
        title: 'Drinks',
        description: 'Refreshing',
        price: 99,
        image: 'https://cdn1.savepice.ru/uploads/2021/12/25/d423e5f933306ebc932ad40f524d332b-full.jpg'
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

const express = require('express')
const router = require('./routes/index')
const cors = require('cors')
const PORT = process.env.PORT || 8080
const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)

app.get("/", function (req, res) {
    res.json({message: "Success!"});
});

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

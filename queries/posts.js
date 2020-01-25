const db = require('../routes/posts/users/users.js')

const getAllPosts = async (req, res, next) => {
    try {
        let posts = await db.any("SELECT * FROM posts")
        res.json("This works")
    } catch (error) {
        next(error)
    }
}

module.exports = {getAllPosts}
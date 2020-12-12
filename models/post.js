const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {type: String, required: true, unique: true},
    author: {type: String, required: true},
    content: {type: String, required: true},
    date_created: {type: String, default: Date.now},
    upvotes: {type: Number, default: 0},
    downvotes:{type: Number, default: 0}
})


postSchema.set('toJSON', {      //converts query to JSON
    transform: (doc, post) => {
        post.id = post._id.toString()
        delete post._id
        delete post.__v
        delete post.password
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
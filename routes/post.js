const {Router} =require('express')
const router = Router()

const {createPost, readPost, readPostByAuthor, readPostByParam, updatePost, deletePost} = require('../controllers/post')

// add a blogpost
router.post('/api/post/new', createPost)

// get all blogposts
router.get('/api/post/all', readPost)

// get all blogposts by author
router.get('/api/post/author', readPostByAuthor)

// get all blogposts by param
router.get('/api/post/param', readPostByParam)

// update blogposts
router.put('/api/post/update', updatePost)

// delete blogposts
router.delete('/api/post/delete', deletePost)


module.exports = router
const Post = require('../models/post')


//create a new blog post = POST
const createPost = async (req, res) => {
    const {title, author, content} = req.body
    const post = Post({title, author, content})

    try{
        const newPost = await post.save()

        res.send({
            message: 'Post Added Successfully', newPost
        })
    } catch (exception){
        console.log(exception)
        res.status(500).send({error: 'There is an exception'})
    }
}

// read all blog posts - GET
const readPost = async (req, res) => {
    await Post.find({}).exec((error, posts) => {
        if (error){
            res.status(500).send({
                error: 'Internal server error'
            })
        }
        res.send(posts)
    })
}

// read blog posts by specific author - GET
const readPostByAuthor = async (req, res) => {
   const {author} = req.body
   try{
        await Post.find({author}).exec((error, posts) => {
            if (error){
                console.log(error)
                res.status(500).send({
                    error: 'Internal server error'
                })
            }
            res.send(posts)
        })
   }catch (error){
    console.log(error)
   }
}


// read blog posts by a param - GET
const readPostByParam = async (req, res) => {
    try{
         await Post.find(req.query).exec((error, posts) => {
             if (error){
                 console.log(error)
                 res.status(500).send({
                     error: 'Internal server error'
                 })
             }
             res.send(posts)
         })
    }catch (error){
     console.log(error)
    }
 }


//  update blog posts - PUT
const updatePost = async (req, res) => {
    const {content, upvotes, downvotes} = req.body

    try{
        await Post.findOneAndUpdate(req.query, {content, upvotes, downvotes}, (error, update) => {
            if (error){
                console.log(error)
                res.status(500).send({
                    error: 'Internal server error'
                })
            }
            res.status(200).send({message: 'Post Updated', update})
        })

    } catch(error){
        console.log(error)
    }
}

// delete blog posts - DELETE
const deletePost = async (req, res) => {
    try{
        await Post.findOneAndDelete(req.query)
        res.status(200).send({message: 'Post Successfully Deleted'})
    }catch(error){
        console.log(error)
    }
}


 module.exports = {
    createPost,
    readPost,
    readPostByAuthor,
    readPostByParam,
    updatePost,
    deletePost
}
const {Router} =require('express')
const router = Router()

const {signup, login} = require('../controllers/auth')

// signup route
router.post('/api/user/new', signup)

// login route
router.get('/api/user/auth', login)

module.exports = router
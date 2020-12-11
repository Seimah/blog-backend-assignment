const mongoose = require('mongoose')


// keeps track of each id uniqueness
const userSchema = mongoose.schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique=true},
    password: {type: String, required: true}
})

userSchema.set('toJSON', {
    transform: (doc, user) => {
        user.id = user._id.toString()
        delete user ._id
        delete user ._v
        delete user .password
    }
})

// hash before user is saved
userSchema.pre('save')

const User = mongoose.model(User, userSchema)

module.exports = User
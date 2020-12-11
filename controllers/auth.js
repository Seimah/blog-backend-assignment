const User = require("../models/user");

// middleware function
// async: a function that will take a while to return
    const signup = async(request, response) => {
    const {firstName, lastName, email, password} = request.body;
    const user = User({firstName, lastName, email, password});

    try {
    const newUser = await user.save()

    response.send({
        message: 'User created successfully',
        newUser
    })
} catch (exception) {
    response.status(500).send({error: "Email Already used"})
}
}

authCtrl = {
    signup = 'value',
    login = 'value'
}
module.exports = authCtrl
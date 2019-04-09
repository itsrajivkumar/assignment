const UserModel = require('../models/user')
const auth = require('../middleware/auth')



    var createUser= async (req, res) => {
        const user = new UserModel(req.body)

        try {
            await user.save()
            const token = await user.generateAuthToken()
            res.status(201).send({ user, token })
        } catch (e) {
            res.status(400).send(e)
        }
    },

    var login = async (req, res) => {
        try {
            const user = await UserModel.findByCredentials(req.body.email, req.body.password)
            const token = await user.generateAuthToken()
            res.send({ user, token })
        } catch (e) {
            res.status(400).send()
        }
    }


module.exports = createUser,login
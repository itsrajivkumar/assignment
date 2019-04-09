const express = require('express')
const UserModel = require('../models/user')
const auth = require('../middleware/auth')
const User = require('../controllers/userController')
const router = new express.Router()

router.post('/users',User.createUser)

router.post('/users/login',User.login)

router.post('/users/logout', auth,User.logout)

router.post('/users/logoutAll', auth, User.logoutAll)

router.get('/users/me', auth, User.myProfile)

router.patch('/users/me', auth,User.updateProfile)

router.delete('/users/me', auth,User.deleteProfile)

module.exports = router
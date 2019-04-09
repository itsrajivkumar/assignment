const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const validator = require('validator');
const UserModel = require('../models/userModel');
const propertySchema = new mongoose.Schema({
    propertyName: {
        type: String,
        required: true,
        trim: true
    },
    propertyAddress: {
        type: String,
        required: true,
        trim: true
    },
    propertyType: {
        type: String,
        enum : ['R','C'],
        default: 'R',
        required: true,
        trim: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    }
   
  
})



const Property = mongoose.model('Property', propertySchema)

module.exports = Property
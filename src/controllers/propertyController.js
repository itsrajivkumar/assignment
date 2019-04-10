const PropertyModel = require('../models/propertyModel');
const auth = require('../middleware/auth');



var createProperty = async (req, res) => {
    req.body.user = req.user._id;
    const user = req.user;
    const property = new PropertyModel(req.body);

    try {
        await property.save()
        res.status(200).send({ property, user })
    } catch (e) {
        res.status(400).send(e)
    }
}
var getById = async (req, res) => {
    const id = req.params.id;

    const user = req.user;

    try {
        const properties = await PropertyModel.findOne({ _id: id, user: user._id });
        res.status(200).send({ properties, user })
    } catch (e) {
        res.status(400).send(e)
    }
}
var getByUser = async (req, res) => {
    const user = req.user;

    try {
        const properties = await PropertyModel.find({ user: user._id });
        res.status(200).send({ properties, user });
    } catch (e) {
        res.status(400).send(e);
    }
}

var deleteById = async (req, res) => {
    const id = req.params.id;
    const user = req.user;

    try {
        const properties = await PropertyModel.deleteOne({ _id: id, user: user._id });
        res.status(200).send({ properties, user })
    } catch (e) {
        res.status(400).send(e)
    }
}
var deleteByUser = async (req, res) => {
    const user = req.user;

    try {
        const properties = await PropertyModel.deleteMany({ user: user._id });
        res.status(200).send({ properties, user })
    } catch (e) {
        res.status(400).send(e)
    }
}


var updateById = async (req, res) => {
    const id = req.params.id;
    const updates = Object.keys(req.body)
    const allowedUpdates = ['propertyName', 'propertyAddress', 'propertyType']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        var property = await PropertyModel.findOne({ _id: id, user: req.user._id });
        updates.forEach((update) => property[update] = req.body[update])
        // var result = await PropertyModel.updateById(id,req.body);
        var result = await property.save();

        res.send(result);
    } catch (e) {
        res.status(400).send(e)
    }
}

module.exports = { createProperty, getByUser, getById, deleteById, deleteByUser, updateById }
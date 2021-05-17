const Account = require("../../models/Account");
const bcrypt = require('bcryptjs')
const { registerValidation } = require('../../validations/validate')

module.exports.getAll = async (req, res) => {
    try {
        const allItems = await Account.find();
        res.json(allItems);
    } catch (error) {
        res.json({ message: error });
    }
};
module.exports.create = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const item = new Account({
        username: req.body.username,
        password: hashPassword,
        position: req.body.position
    })
    try {
        const savedItem = await item.save();
        res.json(savedItem);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.specific = async (req, res) => {
    try {
        const specificItem = await Account.findOne({ "_id": req.params.id })
        res.json(specificItem);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.delete = async (req, res) => {
    try {
        const removedItem = await Account.deleteOne({ "_id": req.params.id });
        res.json(removedItem)
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.edit = async (req, res) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const updatedItem = await Account.updateOne({ "_id": req.params.id },
            {
                $set: {
                    username: req.body.username,
                    password: hashPassword,
                    position: req.body.position
                }
            })
        res.json(updatedItem);
    } catch (error) {
        res.json({ message: error });
    }
}
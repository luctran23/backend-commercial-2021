const Account = require("../../models/Account");

module.exports.getAll = async (req, res) => {
    try {
        const allItems = await Account.find();
        res.json(allItems);
    } catch (error) {
        res.json({ message: error });
    }
};
module.exports.create = async (req, res) => {
    const item = new Account({
        username: req.body.username,
        password: req.body.password
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
        const updatedItem = await Account.updateOne({ "_id": req.params.id },
            {
                $set: {
                    username: req.body.username,
                    password: req.body.password
                }
            })
        res.json(updatedItem);
    } catch (error) {
        res.json({ message: error });
    }
}
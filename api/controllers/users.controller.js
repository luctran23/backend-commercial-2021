const User = require("../../models/User");

module.exports.getAll = async (req, res) => {
    try {
        const allItems = await User.find();
        res.json(allItems);
    } catch (error) {
        res.json({ message: error });
    }
};
module.exports.create = async (req, res) => {
    const item = new User({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
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
        const specificItem = await User.findOne({ "_id": req.params.id })
        res.json(specificItem);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.delete = async (req, res) => {
    try {
        const removedItem = await User.deleteOne({ "_id": req.params.id });
        res.json(removedItem)
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.edit = async (req, res) => {
    try {
        const updatedItem = await User.updateOne({ "_id": req.params.id },
            {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    address: req.body.address,
                    phone: req.body.phone
                }
            })
        res.json(updatedItem);
    } catch (error) {
        res.json({ message: error });
    }
}
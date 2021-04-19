const Promotion = require("../../models/Promotion");

module.exports.getAll = async (req, res) => {
    try {
        const allItems = await Promotion.find();
        res.json(allItems);
    } catch (error) {
        res.json({ message: error });
    }
};
module.exports.create = async (req, res) => {
    const item = new Promotion({
        name: req.body.name
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
        const specificItem = await Promotion.findOne({ "_id": req.params.id })
        res.json(specificItem);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.delete = async (req, res) => {
    try {
        const removedItem = await Promotion.deleteOne({ "_id": req.params.id });
        res.json(removedItem)
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.edit = async (req, res) => {
    try {
        const updatedItem = await Promotion.updateOne({ "_id": req.params.id },
            {
                $set: {
                    name: req.body.name
                }
            })
        res.json(updatedItem);
    } catch (error) {
        res.json({ message: error });
    }
}
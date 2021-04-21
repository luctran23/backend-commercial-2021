const Rate = require("../../models/Rate");

module.exports.getAll = async (req, res) => {
    try {
        const allItems = await Rate.find();
        res.json(allItems);
    } catch (error) {
        res.json({ message: error });
    }
};

module.exports.create = async (req, res) => {
    const item = new Rate({
        prod_id: req.body.prod_id,
        ratedValue: req.body.ratedValue,
        content: req.body.content
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
        const specificItem = await Rate.findOne({ "_id": req.params.id })
        res.json(specificItem);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.delete = async (req, res) => {
    try {
        const removedItem = await Rate.deleteOne({ "_id": req.params.id });
        res.json(removedItem)
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.edit = async (req, res) => {
    try {
        const updatedItem = await Rate.updateOne({ "_id": req.params.id },
            {
                $set: {
                    prod_id: req.body.prod_id,
                    ratedValue: req.body.ratedValue,
                    content: req.body.content
                }
            })
        res.json(updatedItem);
    } catch (error) {
        res.json({ message: error });
    }
}
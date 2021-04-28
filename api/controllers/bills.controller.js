const Bill = require("../../models/Bill");
const User = require("../../models/User");

module.exports.getAll = async (req, res) => {
    try {
        const allItems = await Bill.find();
        const items = await Promise.all(allItems.map(async(ele) => {
            let user = await User.findOne({"_id": ele.user_id});
            ele.user_name = user.name;
            return ele;
        }));
        res.json(items);
    } catch (error) {
        res.json({ message: error });
    }
};
module.exports.create = async (req, res) => {
    const item = new Bill({
        date: req.body.date,
        user_id: req.body.user_id,
        prod_Ids: req.body.prod_Ids
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
        const specificItem = await Bill.findOne({ "_id": req.params.id })
        res.json(specificItem);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.delete = async (req, res) => {
    try {
        const removedItem = await Bill.deleteOne({ "_id": req.params.id });
        res.json(removedItem)
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.edit = async (req, res) => {
    try {
        const updatedItem = await Bill.updateOne({ "_id": req.params.id },
            {
                $set: {
                    date: req.body.date,
                    user_id: req.body.user_id,
                    prod_Ids: req.body.prod_Ids
                }
            })
        res.json(updatedItem);
    } catch (error) {
        res.json({ message: error });
    }
}
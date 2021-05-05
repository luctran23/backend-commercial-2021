const Comment = require("../../models/Comment");

module.exports.getAll = async (req, res) => {
    try {
        const allItems = await Comment.find();
        //const newItems = groupCommentsByParent_id(allItems);
        //res.json(newItems);
        res.json(allItems);
    } catch (error) {
        res.json({ message: error });
    }
};

module.exports.create = async (req, res) => {
    const item = new Comment({
        prod_id: req.body.prod_id,
        content: req.body.content,
        parent_id: req.body.parent_id,
        time: req.body.time,
        user_name: req.body.user_name,
        isAdmin: req.body.isAdmin
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
        const specificItem = await Comment.find({ "prod_id": req.params.id })
        res.json(specificItem);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.delete = async (req, res) => {
    try {
        const removedItem = await Comment.deleteOne({ "_id": req.params.id });
        res.json(removedItem)
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.edit = async (req, res) => {
    try {
        const updatedItem = await Comment.updateOne({ "_id": req.params.id },
            {
                $set: {
                    prod_id: req.body.prod_id,
                    content: req.body.content,
                    parent_id: req.body.parent_id,
                    time: req.body.time,
                    user_name: req.body.user_name,
                    isAdmin: req.body.isAdmin
                }
            })
        res.json(updatedItem);
    } catch (error) {
        res.json({ message: error });
    }
}
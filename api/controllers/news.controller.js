const News = require('../../models/News')

module.exports.getAll = async (req, res) => {
    try {
        const allItems = await News.find();
        res.json(allItems);
    } catch (error) {
        res.json({ message: error });
    }
};

module.exports.create = async (req, res) => {
    const item = new News({
        title: req.body.title,
        content: req.body.content,
        time: req.body.time,
        image: req.body.image
    });
    try{
        const savedItem = await item.save();
        res.json(savedItem);
    }catch(error){
        res.json({ message: error });
    }
};

module.exports.specific = async (req, res) => {
    try {
        const specificItem = await News.findOne({ "_id": req.params.id })
        res.json(specificItem);
    } catch (error) {
        res.json({ message: error });
    }
};

module.exports.delete = async (req, res) => {
    try {
        const removedItem = await News.deleteOne({ "_id": req.params.id });
        res.json(removedItem)
    } catch (error) {
        res.json({ message: error });
    }
};

module.exports.edit = async (req, res) => {
    try {
        const updatedItem = await News.updateOne({ "_id": req.params.id },
            {
                $set: {
                    title: req.body.title,
                    content: req.body.content,
                    time: req.body.time,
                    image: req.body.image
                }
            })
        res.json(updatedItem);
    } catch(error) {
        res.json({ message: error })
    }
};
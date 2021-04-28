const Camera = require("../../models/Camera");
const Category = require("../../models/Category");

module.exports.getAll = async (req, res) => {
    try {
        const allItems = await Camera.find();
        const items = await Promise.all(allItems.map(async (ele) => {
            let cate = await Category.findOne({ "_id": ele.cate_id });
            ele.cate_name = cate.name;
            return ele;
        }));
        res.json(items);
    } catch (error) {
        res.json({ message: error });
    }
};
module.exports.create = async (req, res) => {
    const item = new Camera({
        name: req.body.name,
        cate_id: req.body.cate_id,
        brand_id: req.body.brand_id,
        quantity: req.body.quantity,
        price: req.body.price,
        salePrice: req.body.salePrice,
        origin: req.body.origin,
        description: req.body.description,
        descriptionImages: req.body.descriptionImages
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
        const specificItem = await Camera.findOne({ "_id": req.params.id })
        let cate = await Category.findOne({"_id": specificItem.cate_id });
        specificItem.cate_name = cate.name;
        res.json(specificItem);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.delete = async (req, res) => {
    try {
        const removedItem = await Camera.deleteOne({ "_id": req.params.id });
        res.json(removedItem)
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.edit = async (req, res) => {
    try {
        const updatedItem = await Camera.updateOne({ "_id": req.params.id },
            {
                $set: {
                    name: req.body.name,
                    cate_id: req.body.cate_id,
                    brand_id: req.body.brand_id,
                    quantity: req.body.quantity,
                    price: req.body.price,
                    salePrice: req.body.salePrice,
                    origin: req.body.origin,
                    description: req.body.description,
                    descriptionImages: req.body.descriptionImages
                }
            })
        res.json(updatedItem);
    } catch (error) {
        res.json({ message: error });
    }
}
const Accessory = require("../../models/Accessory");
const Category = require("../../models/Category");

module.exports.getAll = async (req, res) => {
    try {
        const allItems = await Accessory.find();
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
    const item = new Accessory({
        name: req.body.name,
        cate_id: req.body.cate_id,
        brand_id: req.body.brand_id,
        quantity: req.body.quantity,
        inputPrice: req.body.inputPrice,
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
        const specificItem = await Accessory.findOne({ "_id": req.params.id })
        let cate = await Category.findOne({"_id": specificItem.cate_id });
        specificItem.cate_name = cate.name;
        res.json(specificItem);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.delete = async (req, res) => {
    try {
        const removedItem = await Accessory.deleteOne({ "_id": req.params.id });
        res.json(removedItem)
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.edit = async (req, res) => {
    try {
        const updatedItem = await Accessory.updateOne({ "_id": req.params.id },
            {
                $set: {
                    name: req.body.name,
                    cate_id: req.body.cate_id,
                    brand_id: req.body.brand_id,
                    quantity: req.body.quantity,
                    inputPrice: req.body.inputPrice,
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
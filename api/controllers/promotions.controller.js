const Promotion = require("../../models/Promotion");
const Phone = require("../../models/Phone");
const Accessory = require("../../models/Accessory");
const Camera = require("../../models/Camera");
const Laptop = require("../../models/Laptop");

module.exports.getAll = async (req, res) => {
    try {
        const allItems = await Promotion.find();
        const phones = await Phone.find();
        const accessories = await Accessory.find();
        const cameras = await Camera.find();
        const laptops = await Laptop.find();
        const allProds = [...phones, ...accessories, ...cameras, ...laptops];
        const products = allItems.map((ele) => {
            if (ele.prod_id) {
                ele.prod_name = allProds.find(item => item._id == ele.prod_id).name;
                return ele;
            }
            return ele;
        });
        res.json(products);
    } catch (error) {
        res.json({ message: error });
    }
};
module.exports.create = async (req, res) => {
    const item = new Promotion({
        name: req.body.name,
        prod_id: req.body.prod_id
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
                    name: req.body.name,
                    prod_id: req.body.prod_id
                }
            })
        res.json(updatedItem);
    } catch (error) {
        res.json({ message: error });
    }
}
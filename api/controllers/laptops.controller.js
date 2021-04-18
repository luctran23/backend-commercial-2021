const Laptop = require("../../models/Laptop");

module.exports.getAll = async (req, res) => {
    try {
        const allItems = await Laptop.find();
        res.json(allItems);
    } catch (error) {
        res.json({ message: error });
    }
};
module.exports.create = async (req, res) => {
    const item = new Laptop({
        name: req.body.name,
        cate_id: req.body.cate_id,
        brand_id: req.body.brand_id,
        promotions: [],
        cpu: req.body.cpu,
        price: req.body.price,
        salePrice: req.body.salePrice,
        quantity: req.body.quantity,
        ram: req.body.ram,
        screen: req.body.screen,
        graphic: req.body.graphic,
        hardDrive: req.body.hardDrive,
        weight: req.body.weight,
        dimensions: req.body.dimensions,
        origin: req.body.origin,
        launched: req.body.launched,
        description: req.body.description,
        descriptionImages: []
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
        const specificItem = await Laptop.findOne({ "_id": req.params.id })
        res.json(specificItem);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.delete = async (req, res) => {
    try {
        const removedItem = await Laptop.deleteOne({ "_id": req.params.id });
        res.json(removedItem)
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.edit = async (req, res) => {
    try {
        const updatedItem = await Laptop.updateOne({ "_id": req.params.id },
            {
                $set: {
                    name: req.body.name,
                    cate_id: req.body.cate_id,
                    brand_id: req.body.brand_id,
                    promotions: req.body.promotions,
                    cpu: req.body.cpu,
                    price: req.body.price,
                    salePrice: req.body.salePrice,
                    quantity: req.body.quantity,
                    ram: req.body.ram,
                    screen: req.body.screen,
                    graphic: req.body.graphic,
                    hardDrive: req.body.hardDrive,
                    weight: req.body.weight,
                    dimensions: req.body.dimensions,
                    origin: req.body.origin,
                    launched: req.body.launched,
                    description: req.body.description,
                    descriptionImages: req.body.descriptionImages
                }
            })
        res.json(updatedItem);
    } catch (error) {
        res.json({ message: error });
    }
}
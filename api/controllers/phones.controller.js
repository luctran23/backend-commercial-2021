const Phone = require("../../models/Phone");

module.exports.getAll = async (req, res) => {
    try {
        const allItems = await Phone.find();
        res.json(allItems);
    } catch (error) {
        res.json({ message: error });
    }
};
module.exports.create = async (req, res) => {
    const item = new Phone({
        name: req.body.name,
        cate_id: req.body.cate_id,
        brand_id: req.body.brand_id,
        promotions: [],
        price: req.body.price,
        salePrice: req.body.salePrice,
        quantity: req.body.quantity,
        screen: req.body.screen,
        camera: req.body.camera,
        selfieCamera: req.body.selfieCamera,
        ram: req.body.ram,
        capacity: req.body.capacity,
        cpu: req.body.cpu,
        gpu: req.body.gpu,
        power: req.body.power,
        sim: req.body.sim,
        system: req.body.system,
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
        const specificItem = await Phone.findOne({ "_id": req.params.id })
        res.json(specificItem);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.delete = async (req, res) => {
    try {
        const removedItem = await Phone.deleteOne({ "_id": req.params.id });
        res.json(removedItem)
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.edit = async (req, res) => {
    try {
        const updatedItem = await Phone.updateOne({ "_id": req.params.id },
            {
                $set: {
                    name: req.body.name,
                    cate_id: req.body.cate_id,
                    brand_id: req.body.brand_id,
                    price: req.body.price,
                    salePrice: req.body.salePrice,
                    quantity: req.body.quantity,
                    screen: req.body.screen,
                    camera: req.body.camera,
                    selfieCamera: req.body.selfieCamera,
                    ram: req.body.ram,
                    capacity: req.body.capacity,
                    cpu: req.body.cpu,
                    gpu: req.body.gpu,
                    power: req.body.power,
                    sim: req.body.sim,
                    system: req.body.system,
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
const Phone = require("../../models/Phone");
const Accessory = require("../../models/Accessory");
const Camera = require("../../models/Camera");
const Laptop = require("../../models/Laptop");

module.exports.getAll = async (req, res) => {
    try {
        const phones = await Phone.find();
        const accessories = await Accessory.find();
        const cameras = await Camera.find();
        const laptops = await Laptop.find();
        const allProds = [...phones, ...accessories, ...cameras, ...laptops];
        res.json(allProds);
    } catch (error) {
        res.json({ message: error });
    }
};
module.exports.specific = async (req, res) => {
    try {
        const phones = await Phone.find();
        const accessories = await Accessory.find();
        const cameras = await Camera.find();
        const laptops = await Laptop.find();
        const allProds = [...phones, ...accessories, ...cameras, ...laptops];

        res.json(allProds.filter(item => item.cate_id == req.params.id));
    } catch (error) {
        res.json({ message: error }); 
    }
}
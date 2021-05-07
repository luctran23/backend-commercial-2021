const Bill = require("../../models/Bill");
const User = require("../../models/User");
const Phone = require("../../models/Phone");
const Accessory = require("../../models/Accessory");
const Camera = require("../../models/Camera");
const Laptop = require("../../models/Laptop");

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
        status: req.body.status,
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
        const phones = await Phone.find();
        const accessories = await Accessory.find();
        const cameras = await Camera.find();
        const laptops = await Laptop.find();
        const allProds = [...phones, ...accessories, ...cameras, ...laptops];
        const products = specificItem.prod_Ids.map( (item) => {
            var prod =  allProds.find(value => value._id == item.prod_id);
            item.name = prod.name;
            item.descriptionImages = prod.descriptionImages;
            item.price = prod.price;
            item.salePrice = prod.salePrice;
            return item;
        });
       
        const user = await User.findOne({"_id": specificItem.user_id})
        const result = {"_id": specificItem._id, "date": specificItem.date, "user": user, "products": products};
        res.json(result);
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
                    status: req.body.status,
                    prod_Ids: req.body.prod_Ids
                }
            })
        res.json(updatedItem);
    } catch (error) {
        res.json({ message: error });
    }
}
const Bill = require("../../models/Bill");
const User = require("../../models/User");
const Phone = require("../../models/Phone");
const Accessory = require("../../models/Accessory");
const Camera = require("../../models/Camera");
const Laptop = require("../../models/Laptop");

module.exports.getAll = async (req, res) => {
    try {
        const allItems = await Bill.find();
        const items = allItems.reduce((res, item) => {
            res.push(...item.prod_Ids);
            return res;
        }, []);
        const phones = await Phone.find();
        const accessories = await Accessory.find();
        const cameras = await Camera.find();
        const laptops = await Laptop.find();
        const allProds = [...phones, ...accessories, ...cameras, ...laptops];
        
        var obj = {};
        const groupItems = items.reduce((res, item) => {
            var e = item.prod_id;
            if(!obj[e]) {
                obj[e] = {
                    prod_id: item.prod_id,
                    quantity: []
                }
                res.push(obj[e]);
            }
            obj[e].quantity.push(item.quantity);
            return res;
        }, []);
        const calSales = groupItems.map(item => {
            item.quantity = item.quantity.reduce((sum, item) => {
                return sum + item;
            }, 0);
            return item;
        })
        const sales =  calSales.map((item) => {
            var prod =  allProds.find(value => value._id == item.prod_id);
            item.name = prod.name;
            item.descriptionImages = prod.descriptionImages[0];
            item.price = prod.price;
            item.salePrice = prod.salePrice;
            return item;
         });
        res.json(sales);
    } catch (error) {
        res.json({ message: error });
    }
};

module.exports.specific = async (req, res) => {
    try {
        
        res.json([{some: 1}])
    } catch (error) {
        res.json({ message: error });
    }
}
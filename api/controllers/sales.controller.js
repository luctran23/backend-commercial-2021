const Bill = require("../../models/Bill");
const moment = require('moment');
const controllers = require('../controllers/allProducts.controller');

module.exports.getAll = async (req, res) => {
    try {
        const allItems = await Bill.find({"status": 2});
        const items = allItems.reduce((res, item) => {
            res.push(...item.prod_Ids);
            return res;
        }, []);
        const allProds = await controllers.getAllProds();

        var obj = {};
        const groupItems = items.reduce((res, item) => {
            var e = item.prod_id;
            if (!obj[e]) {
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
        const sales = calSales.map((item) => {
            var prod = allProds.find(value => value._id == item.prod_id);
            item.name = prod.name;
            item.descriptionImages = prod.descriptionImages[0];
            item.price = prod.price;
            item.salePrice = prod.salePrice;
            item.inputPrice = prod.inputPrice;
            return item;
        });
        res.json(sales);
    } catch (error) {
        res.json({ message: error });
    }
};

module.exports.specific = async (req, res) => {
    try {
        const allItems = await Bill.find({"status": 2});
        const items = allItems.reduce((res, item) => {
            var obj = { prod_Ids: item.prod_Ids, date: item.date }
            res.push(obj);
            return res;
        }, []);
        const allProds = await controllers.getAllProds();
        const salesByTime = items.filter(item => moment(item.date).isAfter(moment(req.params.startDate)) && moment(item.date).isBefore(moment(req.params.endDate)));
        const prodsTimeRange = salesByTime.reduce((res, item) => [...res, ...item.prod_Ids], []);
        let obj = {};
        const groupItems = prodsTimeRange.reduce((res, item) => {
            var e = item.prod_id;
            if (!obj[e]) {
                obj[e] = { prod_id: item.prod_id, quantity: [] }
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
        const sales = calSales.map((item) => {
            var prod = allProds.find(value => value._id == item.prod_id);
            item.name = prod.name;
            item.descriptionImages = prod.descriptionImages[0];
            item.price = prod.price;
            item.salePrice = prod.salePrice;
            item.inputPrice = prod.inputPrice;
            return item;
        });
       
        res.json(sales);
    } catch (error) {
        res.json({ message: error });
    }
}
const Rate = require("../../models/Rate");

module.exports.getAll = async (req, res) => {
    try {
        const allItems = await Rate.find();
        res.json(allItems);
    } catch (error) {
        res.json({ message: error });
    }
};

module.exports.create = async (req, res) => {
    const item = new Rate({
        prod_id: req.body.prod_id,
        ratedValue: req.body.ratedValue,
        content: req.body.content
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
        const specificItem = await Rate.find({ "prod_id": req.params.id });
        const oneStars = specificItem.filter(item => item.ratedValue == "1");
        const twoStars = specificItem.filter(item => item.ratedValue == "2");
        const threeStars = specificItem.filter(item => item.ratedValue == "3");
        const fourStars = specificItem.filter(item => item.ratedValue == "4");
        const fiveStars = specificItem.filter(item => item.ratedValue == "5");
        const obj = {
            oneStars: oneStars.length,
            twoStars: twoStars.length,
            threeStars: threeStars.length,
            fourStars: fourStars.length,
            fiveStars: fiveStars.length,
            total: oneStars.length + twoStars.length + threeStars.length + fourStars.length + fiveStars.length,
            average: Math.round((1*oneStars.length + 2*twoStars.length + 3*threeStars.length + 4*fourStars.length + 5*fiveStars.length)/(oneStars.length + twoStars.length + threeStars.length + fourStars.length + fiveStars.length))
        }
        specificItem.unshift(obj);
        res.json(specificItem);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.delete = async (req, res) => {
    try {
        const removedItem = await Rate.deleteOne({ "_id": req.params.id });
        res.json(removedItem)
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports.edit = async (req, res) => {
    try {
        const updatedItem = await Rate.updateOne({ "_id": req.params.id },
            {
                $set: {
                    prod_id: req.body.prod_id,
                    ratedValue: req.body.ratedValue,
                    content: req.body.content
                }
            })
        res.json(updatedItem);
    } catch (error) {
        res.json({ message: error });
    }
}
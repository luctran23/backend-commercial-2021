const { update } = require("../../models/Category");
const Category = require("../../models/Category");

module.exports.getAllCatetories = async (req, res) => {
    try {
        const allCategories = await Category.find();
        res.json(allCategories);
    } catch (error) {
        res.json({message: error});
    }
};
module.exports.createCategory = async (req, res) => {
    const category = new Category({
        name: req.body.name
    })
    try {
        const savedCategory = await category.save();
        res.json(savedCategory);
    } catch (error) {
        res.json({message: error});
    }  
}

module.exports.specificCategory = async (req, res) => {
    try {
        const specificCate = await Category.findOne({"_id": req.params.id})
        res.json(specificCate);
    } catch (error) {
        res.json({message: error});
    }
}

module.exports.deleteCategory = async (req, res) => {
    try {
        const removedCate = await Category.deleteOne({"_id": req.params.id});
        res.json(removedCate)
    } catch (error) {
        res.json({message: error});
    }
}

module.exports.editCategory = async (req, res) => {
    try {
        const updatedCate = await Category.updateOne({"_id": req.params.id},
        {$set: {
            name: req.body.name
        }})
        res.json(updatedCate);
    } catch (error) {
        res.json({message: error});
    }
}
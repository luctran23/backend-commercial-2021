const Brand = require("../../models/Brand");

module.exports.getAllBrands = async (req, res) => {
    try {
        const allBrands = await Brand.find();
        res.json(allBrands);
    } catch (error) {
        res.json({message: error});
    }
};
module.exports.createBrand = async (req, res) => {
    const brand = new Brand({
        name: req.body.name,
        cate_id: req.body.cate_id
    })
    try {
        const savedBrand = await brand.save();
        res.json(savedBrand);
    } catch (error) {
        res.json({message: error});
    }  
}

module.exports.specificBrand = async (req, res) => {
    try {
        const specificBrand = await Brand.findOne({"_id": req.params.id})
        res.json(specificBrand);
    } catch (error) {
        res.json({message: error});
    }
}

module.exports.deleteBrand = async (req, res) => {
    try {
        const removedBrand = await Brand.deleteOne({"_id": req.params.id});
        res.json(removedBrand)
    } catch (error) {
        res.json({message: error});
    }
}

module.exports.editBrand = async (req, res) => {
    try {
        const updatedBrand = await Brand.updateOne({"_id": req.params.id},
        {$set: {
            name: req.body.name,
            cate_id: req.body.cate_id
        }})
        res.json(updatedBrand);
    } catch (error) {
        res.json({message: error});
    }
}
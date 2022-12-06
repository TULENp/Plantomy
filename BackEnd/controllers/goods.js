const eH = require('../middleware/errorHandler');
const models = require('../models');
const Product = models.Product;
const ProdInfo = models.ProductInfo;

// request is not used
module.exports.getAll = async function(req,res) {
    try {
        const _goods = await Product.findAll({raw: true});
        res.status(200).json(_goods);
    } catch(err) {
        eH(res, err);
    }
}

// need to send query with params: //api/goods?id=*id of prod*
module.exports.get = async function(req, res) {
    try {
        let id = req.query.id;
        const _goods = await Product.findOne({
            raw: true, 
            include: {
                model: ProdInfo,
                attributes: ['Description','Text'],
            },
            where: {id: id},
        });
        res.status(200).json(_goods);
    } catch(err) {
        eH(res, err);
    }
}
const eH = require('../utils/errorHandler');
const models = require('../models');
const Product = models.Product;

// request is not used
module.exports.getAll = async function(req,res) {
    try {
        const _goods = await Product.findAll({raw: true});
        res.status(200).json(_goods);
    } catch(err) {
        eH(res, err);
    }
}

//  need to set query params: /getById?id=
module.exports.getById = async function(req, res) {
    try {
        let id = req.query.id;
        const _goods = await Product.findOne({raw: true, where: {id: id}});
        res.status(200).json(_goods);
    } catch(err) {
        eH(res, err);
    }
}
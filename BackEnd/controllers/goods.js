const eH = require('../ustils/errorHandler');
const models = require('../models');
const Product = models.Product;

module.exports.getAll = async function(req,res) {
    try {
        const _goods = await Product.findAll({raw: true});
        res.status(200).json(_goods);
    } catch(err) {
        eH(res, err);
    }
}
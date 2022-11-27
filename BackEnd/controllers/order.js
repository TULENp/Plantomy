const eH = require('../ustils/errorHandler');
const models = require('../models');
const Order = models.Order;
const OP = models.OrderProduct;
const Product = models.Product;

module.exports.getOrders = async function(req,res) {
    try {
        const _orders =  await Order.findAll({
            raw: true,
            where: {UserId: req.user.id},
        });
        res.status(200).json(_orders);
    } catch(err) {
        eH(res, err);
    }
}

module.exports.addOrder = async function(req,res) {
    try {
    } catch(err) {
        eH(res, err);
    }
}

module.exports.cancelOrder = async function(req,res) {
    try {
    } catch(err) {
        eH(res, err);
    }
}

module.exports.getProductsInOrder = async function(req,res) {
    try {
    } catch(err) {
        eH(res, err);
    }
}
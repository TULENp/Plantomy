const eH = require('../middleware/errorHandler');
const models = require('../models');
const Order = models.Order;
const OP = models.OrderProduct;
const Product = models.Product;
const Cart = models.Cart;
const OrderStatus = models.OrderStatus;

// should contain in req: in header - Authorization
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

// should contain in req: in header - Authorization, in body - address
module.exports.addOrder = async function(req,res) {
    try {

        const _cart = await Cart.findAll({
            raw: true, 
            where: {UserId: req.user.id},
            include: {
                model: Product, 
                as: 'Product',
                attributes: [
                    'Price'
                ],
            },
        });

        if (_cart) {

            const _os = await OrderStatus.findOne({raw:true});
            const _order = await Order.create({
                Date: Date.now(),
                Paid: false,
                Address: req.body.address,
                Cost: 0, 
                UserId: req.user.id,
                OrderStatusId: _os.id,
            });

            var cost = 0;
            for (var k in _cart) {
                cost += _cart[k].Count * _cart[k]['Product.Price'];
                await OP.create({
                    Count: _cart[k].Count,
                    OrderId: _order.id,
                    ProductId: _cart[k].ProductId,
                });
            }

            _order.Cost = cost;
            await _order.save();
            res.status(200).json();
        } else {
            res.status(400).json({"message":"Not found"}); 
        }
    } catch(err) {
        eH(res, err);
    }
}

// should contain in req: in header - Authorization, in body - orderId
module.exports.cancelOrder = async function(req,res) {
    try {
        const _order = await Order.findOne({raw: true, where: {id : req.body.orderId}});
        if (_order.UserId === req.user.id) {
            await OP.destroy({raw:true, where:{ OrderId: req.body.orderId}});
            await Order.destroy({raw:true, where:{ id: req.body.orderId}});
            res.status(200).json({success:true});
        } else {
            res.status(404).json({success:false});
        }
    } catch(err) {
        eH(res, err);
    }
}

// should contain in req: in header - Authorization, in body - orderId
module.exports.getProductsInOrder = async function(req,res) {
    try {
        const _order = await Order.findOne({raw: true, where: {id : req.body.orderId}});
        if (_order.UserId === req.user.id) {
            const _prods = await OP.findAll({
                raw: true,
                attributes: [],
                include: {
                    model: Product,
                },
                where: {OrderId: req.body.orderId},
            });
            res.status(200).json(_prods);
        } else {
            res.status(404).json({success:false});
        }
    } catch(err) {
        eH(res, err);
    }
}
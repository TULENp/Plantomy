const eH = require('../middleware/errorHandler');
const { Sequelize } = require('../models');
const models = require('../models');

const Order = models.Order;
const OP = models.OrderProduct;
const Product = models.Product;
const Cart = models.Cart;
const OrderStatus = models.OrderStatus;

const dateFormat = require('../config/config.json').dateFormat;
const dateTimeFormat = require('../config/config.json').dateTimeFormat;

// should contain in req: in header - Authorization
module.exports.getOrders = async function(req,res) {
    try {
        const _orders =  await Order.findAll({
            raw: true,
            where: {UserId: req.user.id},
            include: {
                model: OrderStatus,
                attributes: [],
            },
            attributes: [
                'id',
                [Sequelize.col('OrderStatus.Name'), 'status'],
                [Sequelize.fn('TO_CHAR', Sequelize.col('Date'), dateTimeFormat), 'date'],
                ['Cost','sum'],
            ],
            order: [[Sequelize.col('date'),'DESC']],
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
                attributes: [],
            },
            attributes: [
                [Sequelize.col('Product.Price'), 'Price'],
                [Sequelize.col('Product.Count'), 'StoreCount'],
                'id', 'Count', 'createdAt', 'updatedAt','UserId','ProductId',
            ],
        });

        for (var k in _cart) {
            if (_cart[k]?.Count > _cart[k]?.StoreCount) {
                res.status(400).end();
                return;
            }
        }

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
                cost += _cart[k].Count * _cart[k].Price;
                await OP.create({
                    Count: _cart[k].Count,
                    OrderId: _order.id,
                    ProductId: _cart[k].ProductId,
                });
                await Product.update(
                    {Count: _cart[k].StoreCount-_cart[k].Count},
                    {where: {id: _cart[k].ProductId}},
                );
                await Cart.destroy({raw: true, where: {id:_cart[k].id}});
            }

            _order.Cost = cost;
            await _order.save();
            res.status(200).json({message: 'Заказ оформлен!'});
        } else {
            res.status(400).json({message:'Корзина пуста!'}); 
        }
    } catch(err) {
        eH(res, err);
    }
}

// should contain in req: in header - Authorization, in body - orderId
module.exports.cancelOrder = async function(req,res) {
    try {
        const validStatuses = [1,2];
        const _order = await Order.findOne({raw: true, where: {id : req.body.orderId}});
        
        if (_order.UserId === req.user.id) {
            if (validStatuses.includes(_order.OrderStatusId)) {

                const _goods = await OP.findAll({
                    raw: true,
                    include: {
                        model: Product,
                        attributes: [],
                    },
                    where: {OrderId: req.body.orderId},
                    attributes: [
                        [Sequelize.col('Product.id'), 'id'],
                        [Sequelize.col('Product.Count'), 'StoreCount'],
                        'Count',
                    ],
                });

                for (var k in _goods) {
                    await Product.update(
                        {Count: _goods[k].StoreCount+_goods[k].Count},
                        {where: {id: _goods[k].id}},
                    );
                }

                await OP.destroy({raw:true, where:{ OrderId: req.body.orderId}});
                await Order.destroy({raw:true, where:{ id: req.body.orderId}});
                res.status(200).json({message: 'Заказ отменен!'});

            } else {
                res.status(202).json({message: 'Невозможно отменить заказ'});
            }
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
        const _order = await Order.findOne({
            raw: true, 
            include: {
                model: OrderStatus,
                attributes: [],
            },
            where: {id : req.body.orderId},
            attributes: [
                'id',
                [Sequelize.col('OrderStatus.Name'), 'status'],
                [Sequelize.fn('TO_CHAR', Sequelize.col('Date'), dateFormat), 'date'],
                ['Cost','sum'],
                ['Address', 'address'],
                'UserId',
            ]
        });

        if (_order.UserId === req.user.id) {

            const _prods = await OP.findAll({
                raw: true,
                include: {
                    model: Product,
                    attributes: [],
                },
                where: {OrderId: req.body.orderId},
                attributes: [
                    [Sequelize.col('Product.id'), 'id'],
                    [Sequelize.col('Product.Image'), 'image'],
                    [Sequelize.col('Product.Name'), 'title'],
                    [Sequelize.col('Product.Price'), 'price'],
                    ['Count', 'count'],
                ],
            });
            delete _order.UserId;
            _order.goods = _prods;

            res.status(200).json(_order);
        } else {
            res.status(404).json({success:false});
        }

    } catch(err) {
        eH(res, err);
    }
}
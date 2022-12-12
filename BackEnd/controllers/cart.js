const eH = require('../middleware/errorHandler');
const models = require('../models');
const Product = models.Product;
const Cart = models.Cart;

// should contain in req: in header - Authorization, in body - ProductId
module.exports.addtoCart = async function(req, res) {
    try {
        const prId = req.body.productId;
        const _cart = await Cart.findOne({ raw:true, where: {
            UserId: req.user.id,
            ProductId: prId,
        }});
        if (_cart) {
            res.status(400).end();
        } else {
            await Cart.create({UserId: req.user.id, ProductId: prId, Count: 1});
            res.status(200).end();
        }
    } catch(err) {
        eH(res, err);
    }
}

// should contain in req: in header - Authorization, in body - ProductId
module.exports.dropfromCart = async function(req, res) {
    try {
        const prId = req.body.productId;
        const _cart = await Cart.findOne({ raw:true, where: {
            UserId: req.user.id,
            ProductId: prId,
        }});
        if (_cart) {
            await Cart.destroy({raw:true, where: {id: _cart.id}});
            res.status(200).end();
        } else {
            res.status(400).end();
        }
    } catch(err) {
        eH(res,err);
    }
}

// should contain in req: in header - Authorization, in body - ProductId
module.exports.incGoods = async function(req, res) {
    try {
        const prId = req.body.productId;
        const _cart = await Cart.findOne({ raw:true, where: {
            UserId: req.user.id,
            ProductId: prId,
        }});
        await Cart.update( 
            {Count: ++_cart.Count}, 
            {where:{id: _cart.id}});
        res.status(200).end();
    } catch(err) {
        eH(res,err);
    }
}

// should contain in req: in header - Authorization, in body - ProductId
module.exports.decGoods = async function(req, res) {
    try {
        const prId = req.body.productId;
        const _cart = await Cart.findOne({ raw:true, where: {
            UserId: req.user.id,
            ProductId: prId,
        }});
        if (_cart.Count === 1) {
            await Cart.destroy({raw:true, where: {id: _cart.id}});
        } else {
            await Cart.update( 
                {Count: --_cart.Count}, 
                {where:{id: _cart.id}});
            }
        res.status(200).end();
    } catch(err) {
        eH(res,err);
    }
}
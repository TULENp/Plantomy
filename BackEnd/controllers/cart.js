const eH = require('../middleware/errorHandler');
const models = require('../models');
const { Sequelize } = require('../models');

const Product = models.Product;
const Cart = models.Cart;
const Fav = models.Favorite;
const ProdType = models.ProductType;

// should contain in req: in header - Authorization, in body - ProductId
module.exports.addToCart = async function (req, res) {
    try {
        const prId = req.body.productId;
        const _cart = await Cart.findOne({
            raw: true, where: {
                UserId: req.user.id,
                ProductId: prId,
            }
        });
        if (_cart) {
            res.status(400).end();
        } else {
            let _prod = await Product.findOne({ raw: true, where: { id: prId }, attributes: ['Count'] });
            if (_prod.Count < 1) {
                res.status(202).json({ message: 'Товара нет на складе' });
            } else {
                await Cart.create({ UserId: req.user.id, ProductId: prId, Count: 1 });
                res.status(200).json({ message: 'Товар добавлен в корзину!' });
            }
        }
    } catch (err) {
        eH(res, err);
    }
}

// should contain in req: in header - Authorization, in body - ProductId
module.exports.dropFromCart = async function (req, res) {
    try {
        const prId = req.body.productId;
        const _cart = await Cart.findOne({
            raw: true, where: {
                UserId: req.user.id,
                ProductId: prId,
            }
        });
        if (_cart) {
            await Cart.destroy({ raw: true, where: { id: _cart.id } });
            res.status(200).json({ message: 'Товар удалён из корзины!' });
        } else {
            res.status(400).end();
        }
    } catch (err) {
        eH(res, err);
    }
}

// should contain in req: in header - Authorization, in body - ProductId
module.exports.incGoods = async function (req, res) {
    try {
        const prId = req.body.productId;
        const _cart = await Cart.findOne({
            raw: true, where: {
                UserId: req.user.id,
                ProductId: prId,
            }
        });

        if (_cart) {
            let _prod = await Product.findOne({ raw: true, where: { id: prId }, attributes: ['Count'] });
            if (_cart.Count + 1 <= _prod.Count) {
                await Cart.update(
                    { Count: ++_cart.Count },
                    { where: { id: _cart.id } });
                res.status(200).json({ message: 'Товар добавлен!' });
            } else {
                res.status(202).json({ message: 'Недостаточно товара на складе' });
            }
        } else {
            res.status(400).end();
        }

    } catch (err) {
        eH(res, err);
    }
}

// should contain in req: in header - Authorization, in body - ProductId
module.exports.decGoods = async function (req, res) {
    try {
        const prId = req.body.productId;
        const _cart = await Cart.findOne({
            raw: true, where: {
                UserId: req.user.id,
                ProductId: prId,
            }
        });
        if (_cart.Count <= 1) {
            res.status(202).json({ message: 'Нельзя уменьшить!' });
        } else {
            await Cart.update(
                { Count: --_cart.Count },
                { where: { id: _cart.id } });
            res.status(200).json({ message: 'Товар убран!' });
        }
    } catch (err) {
        eH(res, err);
    }
}

// should contain in req: in header - Authorization
module.exports.getCart = async function (req, res) {
    try {

        var _cart = await Cart.findAll({
            raw: true,
            include: { model: Product, include: {
                model: ProdType,
                attributes: [],
            }, attributes: [] },
            where: { UserId: req.user.id },
            attributes: [
                [Sequelize.col('Product.id'), 'id'],
                [Sequelize.col('Product.Image'), 'image'],
                [Sequelize.col('Product.Name'), 'title'],
                [Sequelize.col('Product.Price'), 'price'],
                [Sequelize.col('Product.ProductType.Type'), 'type'],
                ['Count', 'cartCount'],
            ],
        });

        if (_cart) {
            let totalCost = 0;
            for (var k in _cart) {
                var _fav = await Fav.findOne({ raw: true, where: { ProductId: _cart[k].id } });
                _cart[k].isFav = _fav !== null;
                _cart[k].sum = _cart[k].cartCount*_cart[k].price;
                totalCost += _cart[k].sum;
            }
            _cart = {
                totalCost: totalCost,
                goods: _cart,
            }
        }

        res.status(200).json(_cart);
    } catch (err) {
        eH(res, err);
    }
}
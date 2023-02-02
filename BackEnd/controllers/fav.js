const eH = require('../middleware/errorHandler');
const { Sequelize } = require('../models');
const models = require('../models');
const Favorite = models.Favorite;
const Product = models.Product;
const Cart = models.Cart;

// should contain in req: in header - Authorization, in body - productId
module.exports.switchFav = async function(req,res) {
    try {
        const prId = req.body.productId;
        const _fav = await Favorite.findOne({ raw:true, where: {
            UserId: req.user.id,
            ProductId: prId,
        }});
        const answer = {message: ''};
        if (_fav) {
            await Favorite.destroy({raw: true, where: {id:_fav.id}});
            answer.message = 'Товар удалён из избранного!';
        } else {
            await Favorite.create({UserId: req.user.id, ProductId: prId});
            answer.message = 'Товар добавлен в избранное!';
        }
        res.status(200).json(answer);
    } catch(err) {
        eH(res, err);
    }
}

// should contain in req: in header - Authorization
module.exports.showFav = async function(req, res) {
    try {
        const userId = req.user.id;
        const _favs =  await Favorite.findAll({
            raw: true,
            include: {
                model: Product,
                attributes: [
                ],
            }, 
            where: {UserId: userId},
            attributes: [
                [Sequelize.col('Product.id'), 'id'],
                [Sequelize.col('Product.Name'), 'title'],
                [Sequelize.col('Product.Price'), 'price'],
                [Sequelize.col('Product.Image'), 'image'],
                [Sequelize.col('Product.Count'), 'count'],
            ],
        });

        const _cart = await Cart.findAll({raw: true, where: {UserId: userId}});
        for(var k in _favs) {
            _favs[k].isFav = true;
            _favs[k].cartCount = 0;
            for (var l in _cart) {
                if (_favs[k].id === _cart[l].ProductId) {
                    _favs[k].cartCount = _cart[l].Count;
                }
            }
        }
        res.status(200).json(_favs);
    } catch(err) {
        eH(res, err);
    }
}
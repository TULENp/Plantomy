const eH = require('../middleware/errorHandler');
const { Sequelize } = require('../models');
const models = require('../models');
const Favorite = models.Favorite;
const Product = models.Product;

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
        const _favs =  await Favorite.findAll({
            raw: true,
            include: {
                model: Product,
                attributes: [
                ],
            }, 
            where: {UserId: req.user.id},
            attributes: [
                [Sequelize.col('Product.id'), 'id'],
                [Sequelize.col('Product.Name'), 'title'],
                [Sequelize.col('Product.Price'), 'price'],
                [Sequelize.col('Product.Image'), 'image']
            ],
        });
        res.status(200).json(_favs);
    } catch(err) {
        eH(res, err);
    }
}
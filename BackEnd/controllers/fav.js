const eH = require('../utils/errorHandler');
const models = require('../models');
const Favorite = models.Favorite;
const Product = models.Product;

module.exports.switchfav = async function(req,res) {
    try {
        const prId = req.body.productId;
        const _fav = await Favorite.findOne({ raw:true, where: {
            UserId: req.user.id,
            ProductId: prId,
        }});
        if (_fav) {
            await Favorite.destroy({raw: true, where: {id:_fav.id}});
        } else {
            await Favorite.create({UserId: req.user.id, ProductId: prId});
        }
        res.status(200).json({success: true});
    } catch(err) {
        eH(res, err);
    }
}

module.exports.showfav = async function(req, res) {
    try {
        const _favs =  await Favorite.findAll({
            raw: true,
            attributes: [
                'id',
            ],
            include: {
                model: Product, 
                as: 'Product',
                // attributes: [
                // ],
            }, 
            where: {UserId: req.user.id},
        });
        res.status(200).json(_favs);
    } catch(err) {
        eH(res, err);
    }
}
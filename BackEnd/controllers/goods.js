const eH = require('../middleware/errorHandler');
const { Sequelize } = require('../models');
const models = require('../models');
const { Op } = require("sequelize");

const Product = models.Product;
const ProdInfo = models.ProductInfo;
const ProdChars = models.ProductChar;
const ProdType = models.ProductType;
const ProdCat = models.Category;
const Favorite = models.Favorite;
const Cart = models.Cart;

const dateFormat = require('../config/config.json').dateFormat;

// request is not used
module.exports.getAll = async function (req, res) {
    try {
        const _goods = await Product.findAll({
            raw: true,
            include: [{
                model: ProdType,
                attributes: [],
            }, {
                model: ProdCat,
                attributes: [],
            }],
            attributes: [
                'id',
                [Sequelize.col('ProductType.Type'), 'type'],
                [Sequelize.col('Category.Category'), 'category'],
                [Sequelize.col('Size'), 'size'],
                [Sequelize.col('Count'), 'count'],
                [Sequelize.col('Image'), 'image'],
                [Sequelize.col('Name'), 'title'],
                [Sequelize.col('Price'), 'price'],
                [Sequelize.col('createdAt'), 'date'],
            ],
        });
        res.status(200).json(_goods);
    } catch (err) {
        eH(res, err);
    }
}

// in header - Authorization
module.exports.getAllAuth = async function (req, res) {
    try {
        const _goods = await Product.findAll({
            raw: true,
            include: [{
                model: ProdType,
                attributes: [],
            }, {
                model: ProdCat,
                attributes: [],
            }],
            attributes: [
                'id',
                [Sequelize.col('ProductType.Type'), 'type'],
                [Sequelize.col('Category.Category'), 'category'],
                [Sequelize.col('Size'), 'size'],
                [Sequelize.col('Count'), 'count'],
                [Sequelize.col('Image'), 'image'],
                [Sequelize.col('Name'), 'title'],
                [Sequelize.col('Price'), 'price'],
                [Sequelize.col('createdAt'), 'date'],
            ],
        });

        let userId = req.user.id;
        const _favs = await Favorite.findAll({ raw: true, where: { UserId: userId } });
        const _cart = await Cart.findAll({ raw: true, where: { UserId: userId } });

        for (var k in _goods) {
            _goods[k].isFav = false;
            for (var l in _favs) {
                if (_goods[k].id === _favs[l].ProductId) {
                    _goods[k].isFav = true;
                }
            }
            _goods[k].cartCount = 0;
            for (var l in _cart) {
                if (_goods[k].id === _cart[l].ProductId) {
                    _goods[k].cartCount = _cart[l].Count;
                }
            }
        }

        res.status(200).json(_goods);
    } catch (err) {
        eH(res, err);
    }
}

// need to send query with params: //api/goods?id=*id of prod*
module.exports.get = async function (req, res) {
    try {
        let id = req.query.id;
        const _goods = await Product.findOne({
            raw: true,
            include: [{
                model: ProdType,
                attributes: [],
            }, {
                model: ProdCat,
                attributes: [],
            }, {
                model: ProdInfo,
                attributes: [],
            }],
            attributes: [
                'id',
                [Sequelize.col('ProductType.Type'), 'type'],
                [Sequelize.col('Category.Category'), 'category'],
                [Sequelize.col('Size'), 'size'],
                [Sequelize.col('Count'), 'count'],
                [Sequelize.col('Image'), 'image'],
                [Sequelize.col('Name'), 'title'],
                [Sequelize.col('Price'), 'price'],
                [Sequelize.col('createdAt'), 'date'],
                [Sequelize.col('ProductInfo.Description'), 'description'],
                [Sequelize.col('ProductInfo.Text'), 'info'],
            ],
            where: { id: id },
        });

        if (_goods) {
            res.status(200).json(_goods);
        } else { res.status(404).json({ message: 'Not found' }); }
    } catch (err) {
        eH(res, err);
    }
}

module.exports.getAuth = async function (req, res) {
    try {
        let id = req.query.id;
        const _goods = await Product.findOne({
            raw: true,
            include: [{
                model: ProdType,
                attributes: [],
            }, {
                model: ProdCat,
                attributes: [],
            }, {
                model: ProdInfo,
                attributes: [],
            }],
            attributes: [
                'id',
                [Sequelize.col('ProductType.Type'), 'type'],
                [Sequelize.col('Category.Category'), 'category'],
                [Sequelize.col('Size'), 'size'],
                [Sequelize.col('Count'), 'count'],
                [Sequelize.col('Image'), 'image'],
                [Sequelize.col('Name'), 'title'],
                [Sequelize.col('Price'), 'price'],
                [Sequelize.col('createdAt'), 'date'],
                [Sequelize.col('ProductInfo.Description'), 'description'],
                [Sequelize.col('ProductInfo.Text'), 'info'],
            ],
            where: { id: id },
        });

        if (_goods) {

            let userId = req.user.id;
            const _favs = await Favorite.findOne({ raw: true, where: { UserId: userId, ProductId: id } });
            const _cart = await Cart.findOne({ raw: true, where: { UserId: userId, ProductId: id } });

            _goods.isFav = _favs != null;
            _goods.cartCount = _cart != null ? _cart.Count : 0;
        }

        res.status(200).json(_goods);
    } catch (err) {
        eH(res, err);
    }
}

/*
    need to send req.body like that: 
    {
    "brief": {
        "watering": 0,
        "lighting": 2,
        "temperature": 2,
        "humidity": 2,
        "fertilization": 2,
        "size": 1,
        "preferences": 2,
        "cost": 1
    }
}
*/
module.exports.getByFilters = async function (req, res) {
    try {
        const brief = req.body.brief;

        for (var k in brief) {
            if (brief[k] === 0) {
                delete brief[k];
            }
        }

        const _goods = await ProdChars.findAll({
            raw: true,
            include: {
                model: Product,
                include: [{
                    model: ProdType,
                    attributes: [],
                }, {
                    model: ProdCat,
                    attributes: [],
                },],
                attributes: [],
            },
            attributes: [
                [Sequelize.col('Product.id'), 'id'],
                [Sequelize.col('Product.ProductType.Type'), 'type'],
                [Sequelize.col('Product.Category.Category'), 'category'],
                [Sequelize.col('Product.Size'), 'size'],
                [Sequelize.col('Count'), 'count'],
                [Sequelize.col('Product.Image'), 'image'],
                [Sequelize.col('Product.Name'), 'title'],
                [Sequelize.col('Product.Price'), 'price'],
                [Sequelize.fn('TO_CHAR', Sequelize.col('Product.createdAt'), dateFormat), 'date'],
            ],
            where: brief,
        });
        res.status(200).json(_goods);
    } catch (err) {
        eH(res, err);
    }
}

module.exports.getByFiltersAuth = async function (req, res) {
    try {
        const brief = req.body.brief;

        for (var k in brief) {
            if (brief[k] === 0) {
                delete brief[k];
            }
        }

        const _goods = await ProdChars.findAll({
            raw: true,
            include: {
                model: Product,
                include: [{
                    model: ProdType,
                    attributes: [],
                }, {
                    model: ProdCat,
                    attributes: [],
                },],
                attributes: [],
            },
            attributes: [
                [Sequelize.col('Product.id'), 'id'],
                [Sequelize.col('Product.ProductType.Type'), 'type'],
                [Sequelize.col('Product.Category.Category'), 'category'],
                [Sequelize.col('Product.Size'), 'size'],
                [Sequelize.col('Count'), 'count'],
                [Sequelize.col('Product.Image'), 'image'],
                [Sequelize.col('Product.Name'), 'title'],
                [Sequelize.col('Product.Price'), 'price'],
                [Sequelize.fn('TO_CHAR', Sequelize.col('Product.createdAt'), dateFormat), 'date'],
            ],
            where: brief,
        });

        let userId = req.user.id;
        const _favs = await Favorite.findAll({ raw: true, where: { UserId: userId } });
        const _cart = await Cart.findAll({ raw: true, where: { UserId: userId } });

        for (var k in _goods) {
            _goods[k].isFav = false;
            for (var l in _favs) {
                if (_goods[k].id === _favs[l].ProductId) {
                    _goods[k].isFav = true;
                }
            }
            _goods[k].cartCount = 0;
            for (var l in _cart) {
                if (_goods[k].id === _cart[l].ProductId) {
                    _goods[k].cartCount = _cart[l].Count;
                }
            }
        }

        res.status(200).json(_goods);
    } catch (err) {
        eH(res, err);
    }
}

/*
    need to send body like: 

    {
        "search": 'sasi'
        "cost": {
            "min": 228,
            "max": 1337
        },
        "type": 1,
        "sort": 0,
        "category": 2
    }

    if something is not needed - send "null" or do not send ever. 
    for type and category - use ids from database.
    for "sort": популярные - 0, новинки - 1, сн дешевые - 2, сн дорогие - 3. in case of null - 0.
*/
module.exports.getFilteredProducts = async function (req, res) {
    try {
        const filters = req.body;
        const _where = {};
        const _order = [['id'], ['createdAt'], ['Price'], [['Price', 'DESC']]];

        if (filters.search) {
            _where.Name = { [Op.iLike]: '%' + filters.search + '%' };
        }

        if (filters.cost) {
            _where.Price = { [Op.and]: {} };
            if (filters.cost.min) {
                _where.Price[Op.and][Op.gte] = filters.cost.min;
            }
            if (filters.cost.max) {
                _where.Price[Op.and][Op.lte] = filters.cost.max;
            }
        }

        if (filters.type) {
            _where.ProductTypeId = filters.type;
        }

        if (filters.category) {
            _where.CategoryId = filters.category;
        }

        let _sort = _order[filters.sort];

        const _goods = await Product.findAll({
            raw: true, where: _where,
            include: [{
                model: ProdType,
                attributes: [],
            }, {
                model: ProdCat,
                attributes: [],
            }],
            attributes: [
                'id',
                [Sequelize.col('ProductType.Type'), 'type'],
                [Sequelize.col('Category.Category'), 'category'],
                [Sequelize.col('Size'), 'size'],
                [Sequelize.col('Count'), 'count'],
                [Sequelize.col('Image'), 'image'],
                [Sequelize.col('Name'), 'title'],
                [Sequelize.col('Price'), 'price'],
                [Sequelize.fn('TO_CHAR', Sequelize.col('createdAt'), dateFormat), 'date']
            ],
            order: _sort,
        });
        res.status(200).json(_goods);
    } catch (err) {
        eH(res, err);
    }
}

module.exports.getFilteredProductsAuth = async function (req, res) {
    try {
        const filters = req.body;
        const _where = {};
        const _order = [['id'], ['createdAt'], ['Price'], [['Price', 'DESC']]];

        if (filters.search) {
            _where.Name = { [Op.iLike]: '%' + filters.search + '%' };
        }

        if (filters.cost) {
            _where.Price = { [Op.and]: {} };
            if (filters.cost.min) {
                _where.Price[Op.and][Op.gte] = filters.cost.min;
            }
            if (filters.cost.max) {
                _where.Price[Op.and][Op.lte] = filters.cost.max;
            }
        }

        if (filters.type) {
            _where.ProductTypeId = filters.type;
        }

        if (filters.category) {
            _where.CategoryId = filters.category;
        }

        let _sort = _order[filters.sort];

        const _goods = await Product.findAll({
            raw: true, where: _where,
            include: [{
                model: ProdType,
                attributes: [],
            }, {
                model: ProdCat,
                attributes: [],
            }],
            attributes: [
                'id',
                [Sequelize.col('ProductType.Type'), 'type'],
                [Sequelize.col('Category.Category'), 'category'],
                [Sequelize.col('Size'), 'size'],
                [Sequelize.col('Count'), 'count'],
                [Sequelize.col('Image'), 'image'],
                [Sequelize.col('Name'), 'title'],
                [Sequelize.col('Price'), 'price'],
                [Sequelize.fn('TO_CHAR', Sequelize.col('createdAt'), dateFormat), 'date'],
            ],
            order: _sort,
        });

        let userId = req.user.id;
        const _favs = await Favorite.findAll({ raw: true, where: { UserId: userId } });
        const _cart = await Cart.findAll({ raw: true, where: { UserId: userId } });

        for (var k in _goods) {
            _goods[k].isFav = false;
            for (var l in _favs) {
                if (_goods[k].id === _favs[l].ProductId) {
                    _goods[k].isFav = true;
                }
            }
            _goods[k].cartCount = 0;
            for (var l in _cart) {
                if (_goods[k].id === _cart[l].ProductId) {
                    _goods[k].cartCount = _cart[l].Count;
                }
            }
        }

        res.status(200).json(_goods);
    } catch (err) {
        eH(res, err);
    }
}

// need to send /related?id=1
module.exports.getRelated = async function (req, res) {
    try {
        let id = req.query.id;
        const _goods = await Product.findOne({
            raw: true,
            include: [{
                model: ProdType,
                attributes: [],
            }],
            attributes: [
                'id',
                [Sequelize.col('ProductType.Type'), 'type'],
                [Sequelize.col('Size'), 'size']
            ],
            where: { id: id },
        });

        if (_goods) {
            let prodTypeId = 0;
            prodTypeId = _goods?.type == 'plant' ? 2 : 1;
            const _related = await Product.findAll({
                limit: 10,
                raw: true,
                where: { ProductTypeId: prodTypeId, Size: _goods.size },
                attributes: [
                    'id', ['Name', 'title'], ['Image', 'image'], ['Price', 'price'],
                ],
            });
            res.status(200).json(_related);
        } else { res.status(202).json({ message: 'Нет сопутствующих товаров' }); }
    } catch (err) {
        eH(res, err);
    }
}

// need to send ?id=1 and auth
module.exports.getRelatedAuth = async function (req, res) {
    try {
        let id = req.query.id;
        const _goods = await Product.findOne({
            raw: true,
            include: [{
                model: ProdType,
                attributes: [],
            }],
            attributes: [
                'id',
                [Sequelize.col('ProductType.Type'), 'type'],
                [Sequelize.col('Size'), 'size']
            ],
            where: { id: id },
        });

        if (_goods) {
            let prodTypeId = 0;
            prodTypeId = _goods?.type == 'plant' ? 2 : 1;
            const _related = await Product.findAll({
                limit: 10,
                raw: true,
                where: { ProductTypeId: prodTypeId, Size: _goods.size },
                attributes: [
                    'id', ['Name', 'title'], ['Image', 'image'], ['Price', 'price'],
                ],
            });

            let userId = req.user.id;
            for (var k in _related) {
                const _favs = await Favorite.findOne({ raw: true, where: { UserId: userId, ProductId: _related[k].id } });
                const _cart = await Cart.findOne({ raw: true, where: { UserId: userId, ProductId: _related[k].id } });

                _related[k].isFav = _favs != null;
                _related[k].cartCount = _cart != null ? _cart.Count : 0;
            }
            res.status(200).json(_related);
        } else { res.status(202).json({ message: 'Нет сопутствующих товаров' }); }
    } catch (err) {
        eH(res, err);
    }
}
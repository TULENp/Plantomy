const eH = require('../middleware/errorHandler');
const { Sequelize } = require('../models');
const models = require('../models');
const Product = models.Product;
const ProdInfo = models.ProductInfo;
const ProdChars = models.ProductChar;
const ProdType = models.ProductType;
const ProdCat = models.Category;

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
                if (_goods.type == 'plant') {
                    const _cachepots = await Product.findAll({
                        limit: 10,
                        raw: true,
                        where: {ProductTypeId: 2, Size: _goods.size},
                        attributes: [
                            'id', ['Name','title'], ['Image','image'], ['Price','price'],
                        ],
                    });
                    _goods.related = _cachepots;
                }
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
                [Sequelize.col('Product.Image'), 'image'],
                [Sequelize.col('Product.Name'), 'title'],
                [Sequelize.col('Product.Price'), 'price'],
                [Sequelize.col('Product.createdAt'), 'date']
            ],
            where: brief,
        });
        res.status(200).json(_goods);
    } catch (err) {
        eH(res, err);
    }
}
const eH = require('../middleware/errorHandler');
const models = require('../models');
const Product = models.Product;
const ProdInfo = models.ProductInfo;
const ProdChars = models.ProductChar;

// request is not used
module.exports.getAll = async function(req,res) {
    try {
        const _goods = await Product.findAll({raw: true});
        res.status(200).json(_goods);
    } catch(err) {
        eH(res, err);
    }
}

// need to send query with params: //api/goods?id=*id of prod*
module.exports.get = async function(req, res) {
    try {
        let id = req.query.id;
        const _goods = await Product.findOne({
            raw: true, 
            include: {
                model: ProdInfo,
                attributes: ['Description','Text'],
            },
            where: {id: id},
        });
        res.status(200).json(_goods);
    } catch(err) {
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
module.exports.getByFilters = async function(req, res) {
    try {
        const brief = req.body.brief;

        for (var k in brief) {
            if (brief[k]===0) {
                delete brief[k];
            }
        }

        const _goods = await ProdChars.findAll({
            raw: true, 
            include: {
                model: Product,
            },
            where: brief,
        });
        res.status(200).json(_goods);
    } catch(err) {
        eH(res, err);
    }
}
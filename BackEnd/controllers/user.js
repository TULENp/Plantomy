var models = require('../models'); 
const eH = require('../middleware/errorHandler');
var User = models.User;
const passport = require('passport');
const { Sequelize } = require('../models');

module.exports.getUserInfo = async function(req, res) {
    try {
        const userData = await User.findOne({
            raw: true,
            where: {id: req.user.id },
            attributes: {exclude: ['id','createdAt','updatedAt','AccountId']}
        });
        if (userData?.address) {
            userData.address = JSON.parse(userData.address);
        }
        for (var k in userData) {
            if (!userData[k]) {
                userData[k] = '';
            }
        }
        res.status(200).json(userData);
    } catch(err) {
        eH(res, err);
    }
}

/*
    Authorization in Header and body like this:
 *  {
        "info": {
            "firstName": "data", 
            "lastName": "data", 
            "patronymic": "data", 
            "email": "data", 
            "phone": "data", 
            "address": {"index":"123", "city":"Kazan", "street":"Pushkina", "house":"12", "flat":"12"}
        }
    }
    
 *  If something is not needed - DO NOT SEND EVER
 */
module.exports.changeUserInfo = async function(req, res) {
    try {
        const _user = req.user.id;
        if (req.body.info) {
            const _info = req.body.info;
            _info.address = JSON.stringify(_info.address)
            await User.update(_info, {where: {id: _user}});
        }
        res.status(200).json({message: 'Данные успешно изменены!'});
    } catch(err) {
        eH(res, err);
    }
}
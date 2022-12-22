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
            attributes: [
                'id',
                [Sequelize.fn('concat', 
                    Sequelize.col('firstName'), ' ', 
                    Sequelize.col('lastName'),' ', 
                    Sequelize.col('patronymic')
                    ), 'fio'
                ],
                'address',
                'email',
                'phone',
            ],
        }); 
        res.status(200).json(userData);
    } catch(err) {
        eH(res, err);
    }
}
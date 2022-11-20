var models = require('../models'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config.json');
const account = require('../models/account');
var Account = models.Account;
var User = models.User;

module.exports.login = async function(req, res) {
    const candidate = await Account.findOne({raw: true, where: {Login: req.body.login}});
    if (candidate) {
        const pw = bcrypt.compareSync(req.body?.hash, candidate.Hash);
        if (pw) {
            const token = jwt.sign({
                login: candidate.Login,
                userId: candidate.id,
            }, config.jwt, {expiresIn: 60*60});

            res.status(200).json({
                token: token,
            });
        } else {
            return res.status(401);
        }
    } else {
        return res.status(401);
    }
}

module.exports.resgister = async function(req, res) {
    const candidate = await Account.findOne({raw: true, where: {Login: req.body.login}});
    if (candidate) {
        return res.status(409);
    }

    const salt = bcrypt.genSaltSync(10);
    const pw = req.body?.hash;

    const _account = Account.build({ Login: req.body?.login, Hash: bcrypt.hashSync(pw, salt) });
    await _account.save().then(() => {

        console.log("Account created");
        const _user = User.create({AccountId: _account.id, id: _account.id});

    }).catch((err) => console.log(err));
}
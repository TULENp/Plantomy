var models = require('../models'); 
var Account = models.Account;   

module.exports.login = function(req, res) {

}

module.exports.resgister = async function(req, res) {
    var candidate = Account.FindAll();
    
    const _account = Account.build({ Login: req.body?.login, Hash: req.body?.hash });
    await _account.save().then(() => console.log("Account created")).catch((err) => console.log(err));
}
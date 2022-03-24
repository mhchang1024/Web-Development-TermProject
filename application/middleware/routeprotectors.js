const { successPrint, errorPrint } = require('../helpers/debug/debugprinters');


const routeProtectors = {};

routeProtectors.userIsLoggedIn = function(req, res, next){
    if(req.session.username){
        successPrint('User is loged in.');
        next();
    }else{
        errorPrint('User is not logged in!');
        req.flash('error', 'you must be logged in order to create a Post!');
        res.redirect('/login');
    }
}

module.exports = routeProtectors;
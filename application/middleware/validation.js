const checkUsername = (username) => {
    /**
     * Reg explantion
     * 
     * ^ --> start of the string
     *  \D --> anything not a digit [^0-9]
     *  \W --> anything that is a alphanumeric character [a-zA-Z0-9]
     *  {2, }--> 2 or more characters w/ no upper limit
     */

    let usernameChecker = /^\D\w{2,}$/

    return usernameChecker.test(username);
}

const checkPassword = (password, repassword) => {
    let passChecker = /^(?=.*[0-9])(?=.*[!@#$.%^&*])[a-zA-Z0-9!@#$.%^&*]$/;
    return passChecker.test(passChecker) && password == repassword;

}

const checkEmail = (email) => {
    let emailChecker = /^\S+@\S+\. \S+$/
    return emailChecker.test(email);
}

const registerValidator = ( req, res, next ) =>{
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let repassword = req.body.password;

    if(!checkUsername(username)){
        req.flash('error', 'invalid username');
        req.session.save(err => {
            res.redirect('/registration');
        });
    }else if(checkPassword(password)){
        req.flash('error', 'invalid password');
        req.session.save(err => {
            res.redirect('/registration');
        });
    }else if(checkEmail(email)){
        req.flash('error', 'invalid email');
        req.session.save(err => {
            res.redirect('/registration');
        });
    }else{
        next();
    }

}


const loginValidator = ( req, res, next ) =>{
    let username = req.body.username;
    let password = req.body.password;

    if(username.value < 1){
        req.flash('error', 'invalid username');
        req.session.save(err => {
            res.redirect('/login');
        });
    }else if(checkPassword(password)){
        req.flash('error', 'invalid password');
        req.session.save(err => {
            res.redirect('/login');
        });
    }else{
        next();
    }
}

const postValidator = (req, res, next) => {
    let title = req.body.title;
    let description = req.body.description;

    if(!title){
        req.flash('error', 'invalid title');
        req.session.save(err => {
            res.redirect('/postimage');
        });
    }else if(!description){
        req.flash('error', 'invalid description');
        req.session.save(err => {
            res.redirect('/postimage');
        });
    }else{
        next();
    }

}


module.exports = {registerValidator, loginValidator, postValidator}
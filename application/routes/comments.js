const cookieParser = require('cookie-parser');
var express = require('express');
var router = express.Router();
const { successPrint, errorPrint } = require('../helpers/debug/debugprinters');
const {create} = require('../models/Comments');

router.post('/create', (req,res,next) => {
   if (!req.session.username){
        errorPrint(" must be loggeed in to comment");
        res.json({
            code: -1,
            status:"danger",
            message: "Must be logged in to create a comment"
        });
    }else{
        console.log(req.body);
        let{comment, postId} = req.body;
        let username = req.session.username;
        let userId = req.session.userId;
        create( userId,postId,comment)
        .then((wasSuccessful) => {
            if( wasSuccessful !== -1){
                successPrint(`comment was created for ${username}`);
                res.json({
                    code: 1,
                    status: "success",
                    message: 'comment created',
                    username: username, 
                    comment: comment,
                })
            }else{
                errorPrint('comment was not saved');
                res.json({
                    code: -1,
                    status: "danger",
                    message:"comment was not saved"
                })
            }
        })
        .catch((err) => next(err));
    }
})


module.exports = router;
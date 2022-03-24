var express = require('express');
var router = express.Router();
var isLoggedIn = require('../middleware/routeprotectors').userIsLoggedIn;
const {getRecentPosts, getPostById, getCommentsByPostId} = require('../middleware/postsmiddleware.js');
var PostModel = require('../models/Posts');
var db = require('../config/database.js');
/* GET home page. */



router.get('/', getRecentPosts, function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:" Michael Harrison Chang" });
});
router.get("/index", (req,res,next) => {
  res.render("index");
})

router.get("/login", (req,res,next) => {
  res.render("login");
})

router.get("/registration", (req,res,next) => {
  res.render("registration");
})

router.get("/home", (req,res,next) => {
  res.render('home');
})

router.use('/postimage', isLoggedIn);
router.get("/postimage", (req,res,next) => {
  res.render("postimage");
})

router.get("/viewpost", (req,res,next) => {
  res.render("viewpost");
})

router.get('/post/:id(\\d+)', getPostById, getCommentsByPostId, (req, res, next) =>{
  
  res.render('viewpost', {title:`Post ${req.params.id}`});
  
});

module.exports = router;

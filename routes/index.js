var express = require('express');
var router = express.Router();
const userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/create",async function(req,res){
  let userData = await userModel.create({
    username : "himanshuiii",
    nickname : "iiiii",
    description : "I'm a girl of class 123 ",
    categories : ['study','life','khana','pina','potikarna']
  })
  res.send(userData);
})

//!ques 1
// router.get("/find",async function(req,res){
//   // new RegExp(search,flag)
//   var regex = new RegExp("^himanshu$","i")
//   let user = await userModel.find({username:regex})
//   res.send(user);
// })

//!ques 2
// router.get("/find",async function(req,res){
//   let user = await userModel.find({
//     categories: {$all : ['life','pina']}
//   });
//   res.send(user);
// })

//! ques 3
// router.get("/find",async function(req,res){
//   var date1 = new Date('2024-01-9');
//   var date2 = new Date('2024-01-15');
//   let user = await userModel.find({
//     datecreated : { $gte : date1 , $lte : date2}
//   })
//   res.send(user);
// })

//!ques 4
// router.get("/find", async function(req,res){
//   let user = await userModel.find({
//     categories : {$exists : true}
//   })
//   res.send(user);
// })

//! ques 5
router.get("/find", async function(req,res){
  let user = await userModel.find({
    $expr:{
      $and: [
        {$gte : [{$strLenCP : '$nickname'}, 0] },
        {$lte : [{$strLenCP : '$nickname'}, 5]}
      ]
    }
  })
  res.send(user);
})



module.exports = router;

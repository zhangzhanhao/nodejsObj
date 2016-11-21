var express = require('express');
var router = express.Router();
var mongo = require("../model/db")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录' });
});
router.get('/reg', function(req, res, next) {
  res.render('reg', { title: '注册' });
});
router.get('/setclass', function(req, res, next) {
    res.render('setclass', { title: '上传课程' });
});
//登录
router.post('/login_k',function (req,res,next) {
    var username=req.body.username
    var password=req.body.password
    mongo.user.findOne({"username":username},function (err,user) {
        console.log(user)
        if(user){
            if(user.password==password){
                req.session.user = 1,
                res.send({
                    req:req.session,
                    success:1,
                    info:"登录成功"
                })
            }else{
                res.send({
                    success:0,
                    info:"用户名或密码错误"
                })
            }
        }else{
            res.send({
                success:0,
                info:"用户不存在"
            })
        }

    })
})

//注册
router.post('/login_reg',function (req,res,next) {
    var username=req.body.username
    var password=req.body.password
    mongo.user.findOne({"username":username},function(err,user){
        if(err){
            res.send({
                success:0,
                info:"注册失败"
            })
        }
        if(user){
            res.send({
                success:0,
                info:"用户已存在"
            })
        }else{
            mongo.user.create({
                username:username,
                password:password
            },function (err,data) {
                if(err){
                    res.send({
                        success:0,
                        info:"注册失败"
                    })
                }
                res.send({
                    success:1,
                    info:"注册成功"
                })

            })
        }
    })
})


//课程上传
router.post('/setclass',function (req,res,next) {
        var title=req.body.title
        var type=req.body.type
        var des=req.body.des
        var price=req.body.price
        var num=req.body.num
        mongo.kecheng.create({
            title: title,
            des: des,
            type: type,
            price: price,
            num: num
        },function (err,data) {
            if(err){return}
            res.send({
                success:1,
                info:"上传成功"
            })
        })
})


router.post('/zan',function (req,res,next) {
    var num=req.body.zan
    var id=req.body.id
    mongo.kecheng.findOneAndUpdate({"_id":id},{"num":num},function (err,user) {

    })
})


module.exports = router;

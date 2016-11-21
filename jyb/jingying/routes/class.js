/**
 * Created by lanou on 16/11/17.
 */
var express = require('express');
var router = express.Router();
var mongo = require("../model/db");
router.get('/type=1', function(req, res, next) {

    if(req.query.ty=="all"&&req.query.kind=="zb"){
        mongo.kecheng.find({"type":"直播"},function (err,data) {
            res.render('class', { title: "直播页" , data:data,ty:"/type=1",kd:"zb",name:"all"});
        })
    }else if(req.query.ty=="ios"&&req.query.kind=="zb"){
        mongo.kecheng.find({"type":"直播","title":"ios"},function (err,data) {
            res.render('class', { title: "直播页" , data:data,ty:"/type=1",kd:"zb",name:"ios"});
        })
    }else if(req.query.ty=="html5"&&req.query.kind=="zb"){
        mongo.kecheng.find({"type":"直播","title":"html5"},function (err,data) {
            res.render('class', { title: "直播页" , data:data,ty:"/type=1",kd:"zb",name:"html5"});
        })
    }else if(req.query.ty=="u3d"&&req.query.kind=="zb"){
        mongo.kecheng.find({"type":"直播","title":"u3d"},function (err,data) {
            res.render('class', { title: "直播页" , data:data,ty:"/type=1",kd:"zb",name:"u3d"});
        })
    }else if(req.query.ty=="rn"&&req.query.kind=="zb"){
        mongo.kecheng.find({"type":"直播","title":"react"},function (err,data) {
            res.render('class', { title: "直播页" , data:data,ty:"/type=1",kd:"zb",name:"rn"});
        })
    }

    if(req.query.ty=="all"&&req.query.kind=="db"){
        mongo.kecheng.find({"type":"点播"},function (err,data) {
            res.render('class', { title: "直播页" , data:data,ty:"/type=1",kd:"db",name:"all"});
        })
    }else if(req.query.ty=="ios"&&req.query.kind=="db"){
        mongo.kecheng.find({"type":"点播","title":"ios"},function (err,data) {
            res.render('class', { title: "直播页" , data:data,ty:"/type=1",kd:"db",name:"ios"});
        })
    }else if(req.query.ty=="html5"&&req.query.kind=="db"){
        mongo.kecheng.find({"type":"点播","title":"html5"},function (err,data) {
            res.render('class', { title: "直播页" , data:data,ty:"/type=1",kd:"db",name:"html5"});
        })
    }else if(req.query.ty=="u3d"&&req.query.kind=="db"){
        mongo.kecheng.find({"type":"点播","title":"u3d"},function (err,data) {
            res.render('class', { title: "直播页" , data:data,ty:"/type=1",kd:"db",name:"u3d"});
        })
    }else if(req.query.ty=="rn"&&req.query.kind=="db"){
        mongo.kecheng.find({"type":"点播","title":"react"},function (err,data) {
            res.render('class', { title: "直播页" , data:data,ty:"/type=1",kd:"db",name:"rn"});
        })
    }

    if(req.query.ty=="all"&&req.query.kind=="all"){
        mongo.kecheng.find(function (err,data) {
            res.render('class', { title: "直播页" , data:data,ty:"/type=1",kd:"all",name:"all"});
        })
    }else if(req.query.ty=="ios"&&req.query.kind=="all"){
        mongo.kecheng.find({"title":"ios"},function (err,data) {
            res.render('class', { title: "直播页" , data:data,ty:"/type=1",kd:"db",name:"ios"});
        })
    }else if(req.query.ty=="html5"&&req.query.kind=="all"){
        mongo.kecheng.find({"title":"html5"},function (err,data) {
            res.render('class', { title: "直播页" , data:data,ty:"/type=1",kd:"db",name:"html5"});
        })
    }else if(req.query.ty=="u3d"&&req.query.kind=="all"){
        mongo.kecheng.find({"title":"u3d"},function (err,data) {
            res.render('class', { title: "直播页" , data:data,ty:"/type=1",kd:"db",name:"u3d"});
        })
    }else if(req.query.ty=="rn"&&req.query.kind=="all"){
        mongo.kecheng.find({"title":"react"},function (err,data) {
            res.render('class', { title: "直播页" , data:data,ty:"/type=1",kd:"db",name:"rn"});
        })
    }



});


router.get('/type=2', function(req, res, next) {
    if(req.query.ty=="all"&&req.query.kind=="db"){
        mongo.kecheng.find({"type":"点播"},function (err,data) {
            res.render('class', { title: "点播页" , data:data,ty:"/type=2",kd:"db",name:"all"});
        })
    }else if(req.query.ty=="ios"&&req.query.kind=="db"){
        mongo.kecheng.find({"type":"点播","title":"ios"},function (err,data) {
            res.render('class', { title: "点播页" , data:data,ty:"/type=2",kd:"db",name:"ios"});
        })
    }else if(req.query.ty=="html5"&&req.query.kind=="db"){
        mongo.kecheng.find({"type":"点播","title":"html5"},function (err,data) {
            res.render('class', { title: "点播页" , data:data,ty:"/type=2",kd:"db",name:"html5"});
        })
    }else if(req.query.ty=="u3d"&&req.query.kind=="db"){
        mongo.kecheng.find({"type":"点播","title":"u3d"},function (err,data) {
            res.render('class', { title: "点播页" , data:data,ty:"/type=2",kd:"db",name:"u3d"});
        })
    }else if(req.query.ty=="rn"&&req.query.kind=="db"){
        mongo.kecheng.find({"type":"点播","title":"react"},function (err,data) {
            res.render('class', { title: "点播页" , data:data,ty:"/type=2",kd:"db",name:"rn"});
        })
    }

    if(req.query.ty=="all"&&req.query.kind=="zb"){
        mongo.kecheng.find({"type":"直播"},function (err,data) {
            res.render('class', { title: "点播页" , data:data,ty:"/type=2",kd:"zb",name:"all"});
        })
    }else if(req.query.ty=="ios"&&req.query.kind=="zb"){
        mongo.kecheng.find({"type":"直播","title":"ios"},function (err,data) {
            res.render('class', { title: "点播页" , data:data,ty:"/type=2",kd:"zb",name:"ios"});
        })
    }else if(req.query.ty=="html5"&&req.query.kind=="zb"){
        mongo.kecheng.find({"type":"直播","title":"html5"},function (err,data) {
            res.render('class', { title: "点播页" , data:data,ty:"/type=2",kd:"zb",name:"html5"});
        })
    }else if(req.query.ty=="u3d"&&req.query.kind=="zb"){
        mongo.kecheng.find({"type":"直播","title":"u3d"},function (err,data) {
            res.render('class', { title: "点播页" , data:data,ty:"/type=2",kd:"zb",name:"u3d"});
        })
    }else if(req.query.ty=="rn"&&req.query.kind=="zb"){
        mongo.kecheng.find({"type":"直播","title":"react"},function (err,data) {
            res.render('class', { title: "点播页" , data:data,ty:"/type=2",kd:"zb",name:"rn"});
        })
    }

    if(req.query.ty=="all"&&req.query.kind=="all"){
        mongo.kecheng.find(function (err,data) {
            res.render('class', { title: "点播页" , data:data,ty:"/type=2",kd:"all",name:"all"});
        })
    }else if(req.query.ty=="ios"&&req.query.kind=="all"){
        mongo.kecheng.find({"title":"ios"},function (err,data) {
            res.render('class', { title: "点播页" , data:data,ty:"/type=2",kd:"db",name:"ios"});
        })
    }else if(req.query.ty=="html5"&&req.query.kind=="all"){
        mongo.kecheng.find({"title":"html5"},function (err,data) {
            res.render('class', { title: "点播页" , data:data,ty:"/type=2",kd:"db",name:"html5"});
        })
    }else if(req.query.ty=="u3d"&&req.query.kind=="all"){
        mongo.kecheng.find({"title":"u3d"},function (err,data) {
            res.render('class', { title: "点播页" , data:data,ty:"/type=2",kd:"db",name:"u3d"});
        })
    }else if(req.query.ty=="rn"&&req.query.kind=="all"){
        mongo.kecheng.find({"title":"react"},function (err,data) {
            res.render('class', { title: "点播页" , data:data,ty:"/type=2",kd:"db",name:"rn"});
        })
    }
});

module.exports = router
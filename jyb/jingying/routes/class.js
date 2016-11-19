/**
 * Created by lanou on 16/11/17.
 */
var express = require('express');
var router = express.Router();
var mongo = require("../model/db");

router.get('/type=1', function(req, res, next) {
    mongo.kecheng.find({"type":"直播"},function (err,data) {
        console.log(data)
        res.render('class', { title: "直播" , data:data});
    })

});
router.get('/type=2', function(req, res, next) {
    mongo.kecheng.find({"type":"点播"},function (err,data) {
        console.log(data)
        res.render('class', { title: '点播' ,data:data});
    })
});

module.exports = router
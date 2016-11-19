/**
 * Created by lanou on 16/11/18.
 */
var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/user");

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

var classSchema = new mongoose.Schema({
    title: String,
    des: String,
    type: String,
    price: String
});

module.exports={kecheng:mongoose.model("class",classSchema,"class"),
                user:mongoose.model("userMo",userSchema,"userMo")
                }
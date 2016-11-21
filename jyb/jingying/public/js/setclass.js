/**
 * Created by lanou on 16/11/18.
 */
var btn=document.querySelector(".btn")
var title=document.querySelector(".classtitle")
var typei1=document.querySelector(".typei1")
var typei2=document.querySelector(".typei2")
var des=document.querySelector("textarea")
var money=document.querySelector(".qian input")
var type=""
btn.onclick=function () {
    if(typei1.checked){
        type="直播"
    }else{
        type="点播"
    }
    AJax("POST","/setclass","title="+title.value+"&type="+type+"&des="+des.value+"&price="+money.value+"&num="+"1",function (data) {
        var data=JSON.parse(data)
        alert(data.info)
    })
}
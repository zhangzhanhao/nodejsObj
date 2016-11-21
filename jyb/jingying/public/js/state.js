/**
 * Created by lanou on 16/11/18.
 */
window.onload=function () {
    var login=document.querySelector(".login")
    var out=document.querySelector(".out")
    var outbtn=document.querySelector(".out_btn")
    if(document.cookie){
        if(document.cookie.split("=")[1]==1){
            login.style.display="none"
            out.style.display="block"
        }
    }


    outbtn.onclick=function () {
        clearCookie("user")
        login.style.display="block"
        out.style.display="none"
    }

    function clearCookie(name) {
        setCookie(name, "", -1);
    }
    function setCookie(name, value, seconds) {
        seconds = seconds || 0;   //seconds有值就直接赋值，没有为0，这个根php不一样。
        var expires = "";
        if (seconds != 0 ) {      //设置cookie生存时间
            var date = new Date();
            date.setTime(date.getTime()+(seconds*1000));
            expires = "; expires="+date.toGMTString();
        }
        document.cookie = name+"="+escape(value)+expires+"; path=/";   //转码并赋值
    }

    var ke=document.querySelectorAll(".class li a")
    if(location.href.indexOf("type=1")!=-1){
        ke[0].style.color="orangered"
    }
    if(location.href.indexOf("type=2")!=-1){
        ke[1].style.color="orangered"
    }

}
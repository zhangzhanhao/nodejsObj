/**
 * Created by lanou on 16/11/17.
 */

    //查询网站
    if(location.href.indexOf("login")!=-1){
        document.querySelector('.login li:nth-child(1)').id="down_line"
        document.querySelector('.login li:nth-child(1) a').style.color="orangered"
    }
    if(location.href.indexOf("reg")!=-1){
        document.querySelector('.login li:nth-child(3)').id="down_line"
        document.querySelector('.login li:nth-child(3) a').style.color="orangered"
    }
    //tab选项卡
    var tab=document.querySelectorAll(".longinhead div")
    var info=document.querySelectorAll(".info")
    for(var i=0;i<tab.length;i++){
        tab[i].index=i;
        tab[i].onclick=function () {
            for(var i=0;i<tab.length;i++){
                tab[i].id=""
                info[i].id=""
            }
            tab[this.index].id="ac"
            info[this.index].id="show"
        }
    }
    //登录
    var btn1=document.querySelector('.btn1')
    btn1.onclick=function () {
        var username=document.querySelector('.info1 .username').value
        var password=document.querySelector('.info1 .password').value
        var msg=document.querySelector('.msg1')
        AJax("POST","/login_k","username="+username+"&password="+password,function (data) {
            var data=JSON.parse(data)
            console.log(data)
            msg.innerHTML=data.info
            if(data.success==1){
                setTimeout(function () {
                    location.href="/"
                },1000)
                setCookie("user", data.req.user, 1800)
            }
        })
    }

    //注册
    var btn2=document.querySelector('.btn2')
    btn2.onclick=function () {
        var username=document.querySelector('.info2 .username').value
        var password1=document.querySelector('.info2 .password1').value
        var password2=document.querySelector('.info2 .password2').value
        var msg=document.querySelector('.msg2 ')
        if(password1==password2){
            AJax("POST","/login_reg","username="+username+"&password="+password1,function (data) {
                var data=JSON.parse(data)
                console.log(data)
                msg.innerHTML=data.info
                if(data.success==1){
                    setTimeout(function () {
                        location.href="/login"
                    },1000)
                }
            })
            msg.innerHTML=""
        }else{
            msg.innerHTML="请输入相同的密码"
        }
    }


//设置cookie
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
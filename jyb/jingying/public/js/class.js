/**
 * Created by lanou on 16/11/18.
 */



    var pics = document.querySelectorAll(".banner ul li")
    var btns = document.querySelectorAll(".banner ol li")
    var index2 = 0;
    var timer = null;
    for (var i = 0; i < pics.length; i++) {
        btns[i].index = i
        btns[i].onmouseover = function () {
            for (var i = 0; i < pics.length; i++) {
                btns[i].id = ""
                pics[i].id = ""
            }
            btns[this.index].id = "ac2"
            pics[this.index].id = "ac1"
            index2 = this.index
        }
    }
    function next() {
        index2++
        if (index2 >= pics.length) {
            index2 = 0;
        }
        for (var i = 0; i < pics.length; i++) {
            btns[i].id = ""
            pics[i].id = ""
        }
        btns[index2].id = "ac2"
        pics[index2].id = "ac1"
    }

    timer = setInterval(next, 5000)


    var zan = document.querySelectorAll(".zan")

    var num = document.querySelectorAll(".num")
    for (var j = 0; j < zan.length; j++) {
        zan[j].index = j;
        zan[j].onclick = function () {
            num[this.index].innerHTML = Number(num[this.index].innerHTML)+1
            var zan_num=Number(num[this.index].innerHTML)
            var id=num[this.index].getAttribute("biao")
            AJax("POST",'/zan',"zan="+zan_num+"&id="+id,function () {
                
            })
        }
    }



    var tabs=document.querySelectorAll(".list_left li a")
    if(location.href.indexOf("ty=all")!=-1){
        for(var k=0;k<tabs.length;k++){
            tabs[k].style.color="black"
        }
        tabs[0].style.color="orange"
    }else if(location.href.indexOf("ty=ios")!=-1){
        for(var k=0;k<tabs.length;k++){
            tabs[k].style.color="black"
        }
        tabs[1].style.color="orange"
    }else if(location.href.indexOf("ty=html5")!=-1){
        for(var k=0;k<tabs.length;k++){
            tabs[k].style.color="black"
        }
        tabs[2].style.color="orange"
    }else if(location.href.indexOf("ty=u3d")!=-1){
        for(var k=0;k<tabs.length;k++){
            tabs[k].style.color="black"
        }
        tabs[3].style.color="orange"
    }else if(location.href.indexOf("ty=rn")!=-1){
        for(var k=0;k<tabs.length;k++){
            tabs[k].style.color="black"
        }
        tabs[4].style.color="orange"
    }

    var tab_head=document.querySelectorAll(".head_tab li a")
    if(location.href.indexOf("kind=all")!=-1){
        for(var n=0;n<tab_head.length;n++){
            tab_head[n].style.color="black"
        }
        tab_head[0].style.color="orange"
    }else if(location.href.indexOf("kind=zb")!=-1){
        for(var n=0;n<tab_head.length;n++){
            tab_head[n].style.color="black"
        }
        tab_head[1].style.color="orange"
    }else if(location.href.indexOf("kind=db")!=-1){
        for(var n=0;n<tab_head.length;n++){
            tab_head[n].style.color="black"
        }
        tab_head[2].style.color="orange"
    }



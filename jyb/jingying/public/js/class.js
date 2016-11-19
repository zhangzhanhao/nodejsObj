/**
 * Created by lanou on 16/11/18.
 */
var pics=document.querySelectorAll(".banner ul li")
var btns=document.querySelectorAll(".banner ol li")
var index2=0;
var timer=null;
for(var i=0;i<pics.length;i++){
    btns[i].index=i
    btns[i].onmouseover=function () {
        for(var i=0;i<pics.length;i++){
            btns[i].id=""
            pics[i].id=""
        }
        btns[this.index].id="ac2"
        pics[this.index].id="ac1"
        index2=this.index
    }
}
function next() {
    index2++
    if(index2>=pics.length){
        index2=0;
    }
    for(var i=0;i<pics.length;i++){
        btns[i].id=""
        pics[i].id=""
    }
    btns[index2].id="ac2"
    pics[index2].id="ac1"
}
timer=setInterval(next,5000)
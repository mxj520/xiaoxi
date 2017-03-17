/**
 * Created by dell-pc on 2017/3/14.
 */
var box=document.querySelector('.box');
var boxs=document.querySelectorAll('.w');
var lis=document.querySelectorAll('#ul>li');
var timer = null;
window.location.href+='#zy1';
for (var i=0;i<lis.length;i++){
    lis[i].index = i;
    lis[i].onclick = function () {
        var target = boxs[this.index].offsetTop;
        clearInterval(timer);
        timer = setInterval(function () {
            var leader = window.pageYOffset;
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            window.scrollTo(0, leader);
            if (leader === target) {
                clearInterval(timer);
            }
        }, 20);
    }
}
var item = document.querySelectorAll(".item>img");
    for(var i = 0;i<item.length;i++){
        // console.log(1);
        item[i].onmouseover=function () {
            for (var k = 0;k<item.length;k++){
                item[k].style="none";
            }
            this.style.transition= "all 1s"
            this.style.transform="rotateY(360deg)";
        }
    }
var wrap=document.getElementById("wrap");
var arrow=document.getElementById("arrow")
var slide=document.getElementById("slide");
var ul=slide.children[0];
var  liss=ul.children;
var arrLeft=document.getElementById("arrLeft");
var arrRight=document.getElementById("arrRight");
var config = [
    {
        width: 200,
        top: 20,
        left: 50,
        opacity: 0.2,
        zIndex: 2
    },//0
    {
        width: 400,
        top: 70,
        left: 0,
        opacity: 0.8,
        zIndex: 3
    },//1
    {
        width: 600,
        top: 100,
        left: 200,
        opacity: 1,
        zIndex: 4
    },//2
    {
        width: 400,
        top: 70,
        left: 600,
        opacity: 0.8,
        zIndex: 3
    },//3
    {
        width: 200,
        top: 20,
        left: 750,
        opacity: 0.2,
        zIndex: 2
    }//4
];//其实就是一个配置单 规定了每张图片的大小位置层级透明度
wrap.onmouseover= function () {
    animate(arrow,{"opacity":1});
}
wrap.onmouseout=function(){
    animate(arrow,{"opacity":0});
}
var flage=true;
arrRight.onclick= function () {
    if(flage){
        flage=false;
        config.push(config.shift());
        assign();
    }
}
arrLeft.onclick= function () {
    if(flage){
        flage=false;
        config.unshift(config.pop());
        assign();
    }

}
assign();
function assign() {
    for (var i = 0; i < liss.length; i++) {
        animate(liss[i], config[i],function(){
            flage=true;
        });
    }
}
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;//true表示可以清理
        for (var k in json) {
            //k:v
            //k:json[k]
            //属性名:属性目标值
            if (k == "opacity") {
                var leader = getStyle(obj, k) * 100;
                //虽然getStyle获取到的是字符串类型 但是参与运算后会自动转换
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[k] = (leader + step) / 100;
            } else if (k == "zIndex") {
                obj.style[k] = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[k] = leader + step + "px";
            }
            if (leader != target) {
                flag = false;//告诉标记 我这个值还没达到不要清理
            }

        }
        //遍历完成之后再检查
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15)
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}
$(function () {
    var i = 0
    $(".box5").append($(".box5>div").eq(i).clone())
    //淡出动画
    $(".box5>div").eq(i).fadeOut(1000, repeat);
    function repeat() {
        i++
        $(".box5").append($(".box5>div").eq(i).clone())
        $(".box5>div").eq(i).fadeIn(1000)
        $(".box5>div").eq(i).fadeOut(1000, repeat);
    }
})
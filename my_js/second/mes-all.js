/*** Created by Administrator on 2017/7/24.*/

/*三策动态—行业新闻*/
// logo大小控制
function logo() {
    var width = $(window).width();

    if(width < 767) {
        $('.logo').css("width","120px");
        $('.company_name').css("lineHeight","40px");
    }else  {
        $('.logo').css("width","180px");
        $('.company_name').css("lineHeight","90px");
    }
}
logo()

// // 导航栏控制
function nav() {
    var width = $(window).width();
    if(width <= 983) {
        $('nav').css("marginTop","15px"); //导航栏收起后居中
        $('.nav').css("position","absolute");  //导航栏收起后下来列表脱离文档流
        $('.nav li a').css({"lineHeight":"50px","paddingTop":"0","paddingBottom":"0"})  //导航栏收起后下拉列表高度

        $('.subservice-nav').remove();   //导航栏移除子导航列表
    }else  {
        $('nav').css("marginTop","0");
        $('.nav').css("position","relative");
        $('.nav li a').css({"lineHeight":"90px","paddingTop":"0","paddingBottom":"0"})

        $('.service-nav').append("<ul class='subservice-nav'>"+        //导航栏不收起时增加子导航栏
            "<li><a href='second/wisdom.html'>智</a></li>"+
            "<li class='zhan'><a href='second/zhan.html'>展</a>"+
            "<ul class='zhan-nav'>"+
            "<li><a href='second/third/chukong.html'>触控交互</a></li>"+
            "<li><a href='3'>创意投影</a></li>"+
            "<li><a href='second/third/vr.html'>虚拟现实</a></li>"+
            "</ul>"+
            "</li>"+
            "<li><a href='second/ce.html'>策</a></li>"+
            "<li><a href='second/educate.html'>教+</a></li>"+
            "</ul>")
    }
}
nav()

/*轮播*/
window.onload = function(){
    var index = 1,time;
    function showImg(){
        document.getElementById("img" + index).style.display = "none";

        if(index < 2){
            index ++;
        }else{
            index = 1;
        }
        document.getElementById("img" + index).style.display = "block";
        time = setTimeout(showImg,3000);
    }
    showImg();
}

var id = getUrlParam('id');

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
console.log(id);

$(function(){
    $.ajax({
        url:"../data/news.json",
        type:"GET",
        dataType:"json",
        success:function(data){
            var arr = data.datas;
            console.log(arr[0].newsShowImgUrl);
            for(var i=0;i<arr.length;i++){
                if(id==arr[i].id){
                    $(".col11").html("<article>"+
                        "<div class='heading'>"+
                        "<h2 align='center'>"+
                        "<a class='news-title'>"+arr[i].newsTitle+
                        "</a>"+
                        "</h2>"+
                        "<p align='center' class='info'>"+arr[i].newsAuthor+"</p>"+
                        "<p class='info'>"+arr[i].createTime+"</p>"+

                        "</div>"+
                        "<div class='content'>"+
                        "<img class='img-border' src=../"+arr[i].newsShowImgUrl+" width='100%'/>"+
                        "<p class='news-content'>"+arr[i].newsContent+
                        "</p>"+
                        "</div>"+
                        "</article>"
                    )
                }
            }
        },
        error: function (err) {
            console.log(err)
        }
    })
})

$(window).resize(function () {
    logo()
    nav()
})
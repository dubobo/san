/*** Created by Administrator on 2017/7/18.*/

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

$(function(){
    $(".service-style3 .item").hide();
    $(".section-title0,.section-title1,.section-title2").hide();
    $(".our-team article").hide();
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        console.log(top);
        if(top>540){
            $(".service-style3 .section-title0").show();
            $(".service-style3 .section-title0").addClass("animated fadeInRightBig");
        }
        if(top>660){
            $(".service-style3 .item").show();
            $(".service-style3 .item").addClass("animated bounceInDown");
        }
        if(top>960){
            $(".our-team .section-title1").show();
            $(".our-team .section-title1").addClass("animated rollIn");
        }
        if(top>1074){
            $(".our-team article").show();
            $(".our-team .article0").addClass("animated bounceInLeft");
            $(".our-team .article1").addClass("animated bounceInDown");
            $(".our-team .article2").addClass("animated bounceInRight");
        }
        if(top>1550){
            $(".achive .section-title2").show();
            $(".achive .section-title2").addClass("animated bounceIn");
        }
    });
});

$(window).resize(function () {
    logo()
    nav()
})
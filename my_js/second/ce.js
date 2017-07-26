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

// cover-title字体大小控制
function title() {
    var width = $(window).width();

    if(width < 380) {
        $('.cover-title').css("font-size","30px")
    }else {
        $('.cover-title').css("font-size","40px")
    }
}
title()

// 指导思想颜色变化
function change() {
    $('.rectangular').bind('mouseenter',function () {
        $(this).stop(false,true).animate({backgroundColor:"#26373d"})
    }).bind('mouseleave',function () {
        $(this).stop(false,true).animate({backgroundColor:"#fff"})
    })
}
change()

// 公共文化图片覆盖层高度控制
function cover() {
    var height1 = $('.mul-img1').height(),
        height2 = $('.mul-img2').height(),
        height3 = $('.mul-img3').height();

    $('.cover-mul1').css("height",height1);
    $('.cover-mul2').css("height",height2);
    $('.cover-mul3').css("height",height3);
}
cover()

// 公共文化图片覆盖层透明度控制
function coverhshow() {
    $('.mul-img').bind('mouseenter',function () {
        $('.cover-mul',$(this)).stop(false,true).animate({opacity:"1"},500)
    }).bind('mouseleave',function () {
        $('.cover-mul',$(this)).stop(false,true).animate({opacity:"0"},500)
    })
}
coverhshow()

// 屏幕过小时具体介绍消失
function culture() {
    var width = $(window).width();

    if(width <= 767) {
        $('.mul-imgs').css("display","none");
    }else  {
        $('.mul-imgs').css("display","block");
    }
}
culture()

// 浏览器窗口变化监听
$(window).resize(function () {
    logo()    //logo大小变化
    nav()
    title()  // cover-title字体大小控制
    cover()  // 公共文化图片覆盖层高度控制
    culture()  // 屏幕过小时具体介绍消失
})
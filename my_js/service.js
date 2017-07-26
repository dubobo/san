/* 2017/07/14/0:08*/

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

// 四大模块图片覆盖层
function cover() {
    var height = $('.service-img').height(),
         width = $('.service-img').width();

    $('.cover-img').css({"height":height,"width":width})
}
cover()

// 屏幕过小时图片中内容变化
function imgcontent() {
    var  width = $(window).width();

    if(width < 768) {
        $('.service-text span').css("font-size","18px")
    }else {
        $('.service-text span').css("font-size","24px")
    }
}
imgcontent()

// 屏幕过小时页面字体大小变化
function font() {
    var width = $(window).width();

    if(width < 474) {
        $('.service-num').css("font-size","60px");
        $('.service-title span').css("font-size","20px");
    }else {
        $('.service-num').css("font-size","100px");
        $('.service-title span').css("font-size","30px")
    }
}
font()

$(window).resize(function () {
    logo()  // logo大小控制
    nav()   //导航栏控制
    cover() // 四大模块图片覆盖层
    imgcontent() // 屏幕过小时图片中内容变化
     font() // 屏幕过小时页面字体大小变化
})

// 鼠标控制图片上内容透明度
function show() {
    $('.service-box').bind('mouseenter',function () {
        $(".cover-img",$(this)).stop(false,true).animate({opacity:"1"},700)
    }).bind('mouseleave',function () {
        $('.cover-img',$(this)).stop(false,true).animate({opacity:"0"},700)
    })
}
show()
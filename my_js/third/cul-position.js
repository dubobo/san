
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

// 虚拟展厅详细信息出覆盖层高度
function coverclass() {
    var height = $('.cul-class1 img').height();

    $('.cover-cul-class1,.cover-cul-class2,.subcul-class').css("height",height);
}
coverclass()

// 新媒体文字叙述高度/文字距离,大小控制
function mediatext() {
    var height = $('.media-img').height();
    var width = $(window).width();

    $('.media-text').css("height",height);

    if(width >= 992) {
        $('.media-text p').css("paddingBottom","20px");
    }
    if(width < 992) {
        $('.media-text p').css("paddingBottom","0");
    }
    if(width < 388) {
        $('.media-text-title').css({"marginTop":"20px","marginBottom":"0"});
        $('.media-text p').css("fontSize","14px");
    }else  {
        $('.media-text-title').css({"marginTop":"40px","marginBottom":"40px"});
        $('.media-text p').css("fontSize","16px");
    }
}
mediatext()

// 监听浏览器窗口变化
$(window).resize(function () {
    logo()
    nav()
    coverclass()  // 虚拟展厅详细信息出覆盖层高度
    mediatext()  // 新媒体文字叙述高度
})
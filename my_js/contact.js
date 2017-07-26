
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


$(window).resize(function () {
    logo()  // logo大小控制
    nav()
})

// 地图
function init(){
    var center=new qq.maps.LatLng(30.5688900000,104.0633000000);
    var map=new qq.maps.Map(document.getElementById("map"),{
        center:center,
        zoom:16
    });
    var label = new qq.maps.Label({
        position: center,
        map: map,
        content:'三策科技',
        style:{color:"red",borderRadius:"2px",borderColor:"red"}
    });
    //添加定时器
    setTimeout(function(){
        var marker=new qq.maps.Marker({
            position:center,
            animation:qq.maps.MarkerAnimation.DROP,
            map:map
        });
        // marker.setAnimation(qq.maps.Animation.DROP);
    },2000);
}
window.onload=init;
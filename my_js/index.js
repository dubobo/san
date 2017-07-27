
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

// 导航栏内容显示控制
function nav() {
    var width = $(window).width();
    if(width <= 983) {
        // $('nav').css("marginTop","15px"); //导航栏收起后居中
        $('.nav').css("position","absolute");  //导航栏收起后下来列表脱离文档流
        $('.nav li a').css({"lineHeight":"50px","paddingTop":"0","paddingBottom":"0"})  //导航栏收起后下拉列表高度

        $('.subservice-nav').remove();   //导航栏移除子导航列表
    }else  {
        $('nav').css("marginTop","0");
        $('.nav').css("position","relative");
        $('.nav li a').css({"lineHeight":"90px","paddingTop":"0","paddingBottom":"0"})

        $('.service-nav').append("<ul class='subservice-nav'>"+        //导航栏不收起时增加子导航栏
            "<li class='wisdom'><a href='second/wisdom.html'>智</a>"+
            "<ul class='wisdom-nav'>"+
            "<li><a href='second/third/chukong.html'>互联网应用系统开发</a></li>"+
            "<li><a href='#'>商业形态转型</a></li>"+
            "<li><a href='second/third/vr.html'>新媒体运营</a></li>"+
            "</ul>"+
            "</li>"+
            "<li class='zhan'><a href='second/zhan.html'>展</a>"+
            "<ul class='zhan-nav'>"+
            "<li><a href='second/third/chukong.html'>多媒体数字展陈总包</a></li>"+
            "<li><a href='#'>品牌营销展陈</a></li>"+
            "<li><a href='second/third/vr.html'>智慧展馆管理平台搭建</a></li>"+
            "</ul>"+
            "</li>"+
            "<li class='ce'><a href='second/ce.html'>策</a>"+
            "<ul class='ce-nav'>"+
            "<li><a href='second/third/chukong.html'>公共文化</a></li>"+
            "<li><a href='#'>电商产业+精准扶贫</a></li>"+
            "<li><a href='second/third/vr.html'>校园文化</a></li>"+
            "</ul>"+
            "</li>"+
            "<li class='educate'><a href='second/educate.html'>教+</a>"+
            "<ul class='educate-nav'>"+
            "<li><a href='second/third/chukong.html'>教+学校</a></li>"+
            "<li><a href='#'>教+课程深化</a></li>"+
            "<li><a href='second/third/vr.html'>教+对外交流</a></li>"+
            "<li><a href='second/third/vr.html'>教+文化扶贫</a></li>"+
            "<li><a href='second/third/vr.html'>教+创新文化服务</a></li>"+
            "</ul>"+
            "</li>"+
            "</ul>")
    }
}
nav()

// 导航栏颜色控制
function navcolor() {
    var width = $(window).width();
    if(width < 983) {
        $('.nav').css("backgroundColor","background-color: rgb(40,40,48)")
    }else  {
        $('.nav').css("backgroundColor","transparent")
    }
}
navcolor()

// 视频高度，解决视频脱离文档流的影响
function video() {
    var height = $(window).height();;

    $('.videos').css("height",height);
    $('.core').css("marginTop",height);

}
video()

// 首页点击下滑滚动
function down() {
    $('.cover-video-more').on('click',function() {

        $('body,html').animate({'scrollTop': 700},700)
    })
};
down();

// more背景色改变
function changebg() {
    $('.cover-video-more').bind('mouseenter',function () {
        $(this).stop(false,true).animate({"backgroundColor":"#0B90C4","color":"#fff"})
    }).bind('mouseleave',function () {
        $(this).stop(false,true).animate({"backgroundColor":"transparent","color":"#1c2b36"})
    })
}
changebg()

// 核心业务动画
function core() {
    var tops = $(window).scrollTop();

    if(tops >= 400){
        coreevent()
    }
    // 鼠标滚动事件
    $('body').bind('mousewheel',coreevent)
    // 了解更多点击
    $('.cover-video-more').on('click',coreevents)

    function coreevent() {
        var top = $(window).scrollTop();

        if(top >= 300){
            $('.article_core1').addClass('fadeInLeftBig').css("opacity","1");
            $('.article_core4').addClass('fadeInRightBig').css("opacity","1");
            setTimeout(function () {
                $('.article_core2').addClass('fadeInUp').css("opacity","1");
            },700);
            setTimeout(function () {
                $('.article_core3').addClass('fadeInUp').css("opacity","1");
            },700);
        }
    }

    function coreevents() {
        $('.article_core1').addClass('fadeInLeftBig').css("opacity","1");
        $('.article_core4').addClass('fadeInRightBig').css("opacity","1");
        setTimeout(function () {
            $('.article_core2').addClass('fadeInUp').css("opacity","1");
        },700);
        setTimeout(function () {
            $('.article_core3').addClass('fadeInUp').css("opacity","1");
        },700);
    }
};
core();

// 浏览器窗口变化监听
$(window).resize(function () {
    logo() // logo大小控制
    nav()  //导航栏内容显示控制
    navcolor()  //导航栏颜色控制
    video() // 视频高度，解决视频脱离文档流的影响
})

function getnews() {
    var i;
    var a = "index";
    var appkey = md5(a);
    var location = "http://192.168.1.166:6600";

    $.get(location+"/api/v1/categorys?parentId=-1&a=index&appkey="+appkey,function (res) {
        console.log(res)
    });

    $.get(location+"/api/v1/categorys?parentId=4&a=index&appkey="+appkey,function (res) {
        console.log("二级标题")
      console.log(res)
    });

    $.get(location+"/api/v1/news/all?categoryId=5&page=1&count=10&a=index&appkey="+ appkey,function (res) {
        console.log(res)

                for(i = 0; i < 2; i++) {
                    $('.some-projects').append("<div class='col-md-4 col-sm-6 col-xs-12'>"
                        +"<div class='default-blog-news wow fadeInUp animated'>"
                        +"<figure class='img-holder'>"
                        +"<a href='#'><img src='"+ location + res.datas[i].newsShowImgUrl +"' alt='News'>"
                        +"</a>"
                        +"<figcaption class='overlay'>"
                        +"<div class='box'>"
                        +"<div class='content'>"
                        +"<a href='second/third/mes-all.html?news="+ res.datas[i].newsTitle +"'>"
                        // +"<h3 style='color: #fff;'>"+ res.datas[i].content +"</h3>"
                        +"</a>"
                        +"</div>"
                        +"</div>"
                        +"</figcaption>"
                        +"</figure>"
                        +"<div class='lower-content'>"
                        +"<div>"
                        // +"<p>"+ res.datas[i].content +"</p>"
                        +"</div>"
                        +"<div class='link'>" + res.datas[i].newsTitle +"<a href='second/third/mes-all.html?news="+ res.datas[i].id +"' class='default_link'>了解更多<i class='fa fa-angle-right'></i></a>"
                        +"</div>"

                        +"</div>"
                        +"</div>"

                        +"</div>")
                }
    });
}
getnews()
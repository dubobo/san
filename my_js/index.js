
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

// 首屏字体大小变化，视频全屏
function word() {
    var height = $(window).height();
    var width = $(window).width();

    $('.videos').css("height",height);
    $('.core').css("marginTop",height);

    if(width >= 870) {
        $('.video-text b').css("font-size","40px")
    }
    if(width < 870) {
        $('.video-text b').css("font-size","30px")
    }
    if(width < 670) {
        $(".video-text b").css("font-size","25px")
    }
    if(width < 560) {
        $(".video-text b").css("font-size","20px")
    }
}
word()

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

// 虚拟现实图片上覆盖层高度控制
function cover() {
    var height1 = $('.mul-img1').height(),
        height2 = $('.mul-img2').height(),
        height3 = $('.mul-img3').height();

    $('.cover-mul1').css("height",height1);
    $('.cover-mul2').css("height",height2);
    $('.cover-mul3').css("height",height3);
}
cover()

// 虚拟现实图片上覆盖层透明度控制
function coverhshow() {
    $('.vr-mul').bind('mouseenter',function () {
        $('.cover-mul',$(this)).stop(false,true).animate({opacity:"1"},500)
    }).bind('mouseleave',function () {
        $('.cover-mul',$(this)).stop(false,true).animate({opacity:"0"},500)
    })
}
coverhshow()

// 虚拟现实模块文字模块显示，隐藏
function vrshow() {
    var width = $(window).width();

    if(width <= 767) {
        $('.vr-text-mul').css("display","none");
    }else  {
        $('.vr-text-mul').css("display","block");
    }

    $()
}
vrshow()

// 浏览器窗口变化监听
$(window).resize(function () {
    logo() // logo大小控制
    nav()  //导航栏内容显示控制
    navcolor()  //导航栏颜色控制
    word() // 首屏字体大小变化，视频全屏
    cover() // 虚拟现实图片上覆盖层高度控制
    vrshow() // 虚拟现实模块文字模块显示，隐藏
})

// function getprojects() {
//     var i;
//     $.ajax({
//         type:"get",
//         url:"data/data.json",
//         dataType:"json",
//         success: function (res) {
//             for(i = 0;i <= res.data.length; i++) {
//             $('.some-projects').append(
//                 "<div class='col-md-3 col-sm-6 col-xs-12 single-project'>"+
//                 "<figure class='imghvr-shutter-in-out-horiz'>"+
//                 "<img src='"+res.data[i].img+"' alt='Awesome Image'>"+
//                 "<figcaption>"+
//                 "<div class='content'>"+
//                 "<a href='second/subproject.html?id="+res.data[i].id+"'>"+
//                 "<h4>"+ res.data[i].content +"</h4>"+
//                 "</a>"+
//                 "</div>"+
//                 "</figcaption>"+
//                 "</figure>"+
//                 "</div>")
//             }
//         },
//         error: function (err) {
//             console.log(err)
//         }
//     })
// }
// getprojects()

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
                    $('.some-news').append("<div class='col-md-4 col-sm-6 col-xs-12'>"
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

    // $.ajax({
    //     type:"get",
    //     url:location+"/api/v1/news/all?categoryId=5&page=1&count=10&appkey='"+ appkey +"'&a=index",
    //     dataType:"json",
    //     success: function (res) {
    //         for(i = 0; i < 3; i++) {
    //             $('.some-news').append("<div class='col-md-4 col-sm-6 col-xs-12'>"
    //                 +"<div class='default-blog-news wow fadeInUp animated'>"
    //                 +"<figure class='img-holder'>"
    //                 +"<a href='#'><img src='"+ res.datas[i].img +"' alt='News'>"
    //                 +"</a>"
    //                 +"<figcaption class='overlay'>"
    //                 +"<div class='box'>"
    //                 +"<div class='content'>"
    //                 +"<a href='second/third/mes-all.html?news="+ res.datas[i].newsT +"'>"
    //                 +"<h3 style='color: #fff;'>"+ res.datas[i].content +"</h3>"
    //                 +"</a>"
    //                 +"</div>"
    //                 +"</div>"
    //                 +"</figcaption>"
    //                 +"</figure>"
    //                 +"<div class='lower-content'>"
    //                 +"<div>"
    //                 +"<p>"+ res.datas[i].content +"</p>"
    //                 +"</div>"
    //                 +"<div class='link'>"
    //                 +"<a href='second/third/mes-all.html?news="+ res.datas[i].news +"' class='default_link'>了解更多<i class='fa fa-angle-right'></i></a>"
    //                 +"</div>"
    //
    //                 +"</div>"
    //                 +"</div>"
    //
    //                 +"</div>")
    //         }
    //     },
    //     error: function (err) {
    //         console.log(err)
    //     }
    // })
}
getnews()
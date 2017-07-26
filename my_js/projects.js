
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
    logo() // logo大小控制
    nav() //导航栏控制
})

function getprojects() {
    var i;
    var page = 1;
    var location = "http://192.168.1.166:6600";
    var a = "index";
    var appkey = md5(a);

    $.get(location+"/api/v1/categorys?parentId=-1&a=index&appkey="+appkey,function (res) {
        console.log(res.datas)
    });

    $.get(location+"/api/v1/categorys?parentId=4&a=index&appkey="+appkey,function (res) {
        console.log(res)
    });

    $.get(location+"/api/v1/news/count?categoryId=5&a=index&appkey="+appkey,function (res) {
        console.log("总数");
        console.log(res);
    });

    function pages() {

        $.get(location + "/api/v1/news/all?categoryId=5&page=" + page + "&count=10&a=index&appkey=" + appkey, function (res) {
            console.log(res);

            for (i = 0; i <= res.datas.length; i++) {
                // 公共文化
                if (i < 3) {
                    $('.subproject-nav1').append("<li>" + "<a href='second/subproject.html?id=" + res.datas[i].id + "'>" + res.datas[i].newsTitle + "</a>" + "</li>")
                }

                // // 农村电商
                if (2 < i && i < 5) {
                    $('.subproject-nav2').append("<li>" + "<a href='second/subproject.html?id=" + res.datas[i].id + "'>" + res.datas[i].newsTitle + "</a>" + "</li>")
                }

                // 所有案例
                $('.all-projects').append("<article class='col-md-4 col-sm-6 col-xs-12'>" +
                    "<div class='item'>" +
                    "<div class='single-project'>" +
                    "<figure class='imghvr-shutter-in-out-horiz'>" +
                    "<img src='" + location + res.datas[i].newsShowImgUrl + "' />" +
                    "<figcaption>"
                    + "<div class='content'>"
                    + "<a href='second/subproject.html?id=" + res.datas[i].id + "'>"
                    + "<h4>查看详情</h4>"
                    + "</a>"
                    + "</div>"
                    + "</figcaption>"
                    + "</figure>"
                    + "<div>"
                    + res.datas[i].newsTitle +
                    "</div>"
                    + "</div>"
                    + "</div>"
                    + "</article>")
            }
        })
    }

    function changepage() {
        $('.page-two').click(function () {
            page += 1;
           pages()

        })
    }
}
getprojects()





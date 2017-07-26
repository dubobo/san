/**
 * Created by Administrator on 2017/7/14.
 */

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

/*阅读更多*/
$(function(){
    $(".more1 a").click(function(){
        $(".xian-more1").slideToggle();
        var text = $(".more1 a").text();

        if(text=="阅读更多 >>"){
            $(".more1 a").text("<< 收起");
        }else if(text=="<< 收起"){
            $(".more1 a").text("阅读更多 >>");
        }
    });

    $(".more2 a").click(function(){
        $(".xian-more2").slideToggle();
        var text = $(".more2 a").text();

        if(text=="阅读更多 >>"){
            $(".more2 a").text("<< 收起");
        }else if(text=="<< 收起"){
            $(".more2 a").text("阅读更多 >>");
        }
    });

    $(".more3 a").click(function(){
        $(".xian-more3").slideToggle();
        var text = $(".more3 a").text();

        if(text=="阅读更多 >>"){
            $(".more3 a").text("<< 收起");
        }else if(text=="<< 收起"){
            $(".more3 a").text("阅读更多 >>");
        }
    });
});

/*ajax*/
/*$(function(){
    $.ajax({
        url:"news.json",
        type:"GET",
        dataType:"json",
        success:function(data){
            // console.log(data);
            var arr = data.datas;
            // console.log(arr);

            $(".company-dongt").text(arr[0].categoryName);
            $(".hangye-dongt").text(arr[1].categoryName);
            $(".news-title1").html(arr[0].newsTitle);
            $(".info").html(arr[0].createTime);
            // console.log( arr[0].newsContent);
            // $(".news-content").html(arr[0].newsContent);

            var content = arr[0].newsContent;
            var con = content.split("。");
            console.log(con);
            for(var i=0;i<2;i++){
                var cont = "";
                cont = cont+con[i];
                $(".news-content").append(cont+"。");
            }
        }
    })

})*/

$(function(){
    $.ajax({
        url:"data/news.json",
        type:"GET",
        dataType:"json",
        success:function(data){
            var i;
            var arr = data.datas;
            for(i=0;i<3;i++){
                $(".col11").append(
                    "<article>"+
                    "<div class='heading'>"+
                    "<h2>"+
                    "<a class='news-title'>"+arr[i].newsTitle+
                    "</a>"+
                    "</h2>"+
                    "<p class='info'>"+arr[i].createTime+
                    "</div>"+
                    "<div class='content'>"+
                    "<img src='"+arr[i].newsShowImgUrl+"' />"+
                    "<p>"+arr[i].newsContent.substring(0,222)+"..."+
                    "</p>"+
                    "<p class='mes-all'><a class='a-all' href='second/dongt-all.html?id="+ arr[i].id +"'>阅读全文 >></a></p>"+
                    "</div>"+
                    "</article>"
                )
            }
            for(i=3;i<arr.length;i++){
                $(".col12 .xian-more1").append(
                    "<article>"+
                    "<div class='heading'>"+
                    "<h2>"+
                    "<a class='news-title'>"+arr[i].newsTitle+
                    "</a>"+
                    "</h2>"+
                    "<p class='info'>"+arr[i].createTime+
                    "</div>"+
                    "<div class='content'>"+
                    "<img src='"+arr[i].newsShowImgUrl+"' />"+
                    "<p>"+arr[i].newsContent.substring(0,222)+"..."+
                    "</p>"+
                    "<p class='mes-all'><a class='a-all' href='second/dongt-all.html?id="+arr[i].id+"'>阅读全文 >></a></p>"+
                    "</div>"+
                    "</article>"
                )
            }

        },
        error: function (err) {
            console.log(err)
        }
    })
})

// 浏览器窗口变化监听
$(window).resize(function () {
    logo() // logo大小控制
    nav()
})


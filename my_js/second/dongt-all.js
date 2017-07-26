/**
 * Created by Administrator on 2017/7/21.
 */
/*$(function(){
    $.ajax({
        url:"../news.json",
        type:"GET",
        datatype:"json",
        success:function(data){
            console.log(data);
            var arr = data.datas;
            var i;
            for(i in arr){
                var str = "";
                str = arr[i].newsTitle;
                $(".company-dongt").text(arr[0].categoryName);
                $(".hangye-dongt").text(arr[1].categoryName);
                $(".news-title").html(arr[0].newsTitle);
                $(".news-content").html(arr[0].newsContent);
                // var cont = arr[0].newsContent;
                // var cont5=cont.substring(0,100);
                // console.log(cont5);
            }
        }
    })
})*/

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
                        "<img class='img-border' src=../"+arr[i].newsShowImgUrl+" alt='...' width='100%'/>"+
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
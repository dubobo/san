var id = getUrlParam('id');

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

function projectsInfor() {
    var location = "http://192.168.1.166:6600";
    var a = "index";
    var appkey = md5(a);

    $.get(location+"/api/v1/news/one?newsId="+ id +"&a=index&appkey="+appkey,function (res) {
        console.log(res)
        $('.subproject').append("<div>"+"<img src='"+location+res.data.newsShowImgUrl+"'/>"+"<p>"+ res.data.newsContent +"</p>"+"</div>")
    })
}
projectsInfor()


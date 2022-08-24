$(document).ready(function(){
    var a,b,c;
    a = $(window).height();    //浏览器窗口高度
    $(window).scroll(function(){
        b = $(this).scrollTop();   //页面滚动的高度
        if(a+b>1200){              //滚动到该高度进行操作
            var head=document.getElementById("catalog_normal");
            if(head!=null)
                head.id="catalog_float";
        }else{
            var head=document.getElementById("catalog_float");
            if(head!=null)
                head.id="catalog_normal";
        }
    });
});
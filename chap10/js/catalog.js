$(document).ready(function(){
    var a,b,c;
    a = $(window).height();    //浏览器窗口高度
    var group = $("#p_st");
    $(window).scroll(function(){
        b = $(this).scrollTop();   //页面滚动的高度
        c = group.offset().top;
        if(b+50>c){              //滚动到该高度进行操作
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
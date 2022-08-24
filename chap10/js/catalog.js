$(document).ready(function(){
    var a,b;
    a = $(window).height();    //浏览器窗口高度
    $(window).scroll(function(){
        b = $(this).scrollTop();   //页面滚动的高度
        if(b>a){              //滚动到该高度进行操作
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

jQuery(document).ready(function($) {
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$('[name="'+this.hash.substring(1)+'"]').offset().top}, 500);
	});
});
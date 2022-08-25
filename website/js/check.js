window.onload = function(){
    if("current-user" in localStorage){}
    else{
        alert('你还未登录！即将进入登录页面。');
        var a = location.href.split('/');
        if(a[a.length-1]=='index.html'){
            window.open('html/account.html','_self');
        }
        else{
            window.open('account.html','_self');
        }
    }
}
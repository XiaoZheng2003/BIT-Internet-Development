window.onload = function(){
    if("current-user" in localStorage){}
    else{
        alert('你还未登录！即将进入登录页面。');
        window.open('account.html','_self');
    }
}
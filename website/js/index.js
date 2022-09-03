function check(){
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

function reset(){
    localStorage.clear();
    sessionStorage.clear();
    alert("登录信息重置成功！请重新登录！");
    window.open('html/account.html','_self');
}

function logout(){
    localStorage.removeItem('current-user');
    alert("成功退出登录！即将进入登录界面！");
    window.open('html/account.html','_self');
}
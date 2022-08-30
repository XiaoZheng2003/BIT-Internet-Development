window.onload = function () {
    if("current-user" in localStorage){
        alert('你已经登录！即将返回首页。');
        window.open('../index.html','_self');
    }
    let transfer = document.getElementById('transfetBtn');
    transfer.addEventListener('click', function () {
        let login = document.querySelector('.login-box');
        let reg = document.querySelector('.reg-box');
        let total = document.querySelector('.transtion-box');
        let target = document.querySelector('.transferToReg');
        let title = document.querySelector('.title');
        let subTitle = document.querySelector('.subTitle');
        transfer.innerText === '注册'
            ? (() => {
                target.style.left = 0;
                total.style.left = 260 + 'px';
                transfer.innerText = '登录';
                title.innerText = '已有帐号？';
                subTitle.innerText = '有帐号就登录吧，好久不见了！';
                setTimeout(() => {
                    login.style.display = 'none';
                    reg.style.display = 'flex';
                }, 300);
            })()
            : (() => {
                target.style.left = 640 + 'px';
                total.style.left = 0;
                transfer.innerText = '注册';
                title.innerText = '还未注册？';
                subTitle.innerText = '立即注册，开启奇幻之旅！';
                setTimeout(() => {
                    login.style.display = 'flex';
                    reg.style.display = 'none';
                }, 300);
            })();
    });
}

function reg(){
    let un =document.getElementById('reg_un').value;
    let pw1=document.getElementById('reg_pw').value;
    let pw2=document.getElementById('reg_cf').value;
    if(!un){alert('请输入你的用户名！');}
    else if(!pw1){alert('请输入密码！');}
    else if(pw1.length<6){alert('密码长度过短，请重新输入！');}
    else if(!pw2){alert('请再次输入密码！');}
    else if(pw1!==pw2){alert('两次输入的密码不一致！');}
    else{
        if(localStorage.getItem("gv_"+un)){
            alert("该用户名已存在，请重新输入！")
        }
        else{
            var user_data=new Object();
            user_data["un"]=un;
            user_data["pw"]=pw1;
            //注册成就信息
            var achievement_tmp=new Array();
            for(let i=0;i<6;i++){
                achievement_tmp[i]=0;
            }
            let achievement_data=JSON.stringify(achievement_tmp);
            user_data.achievement_data=achievement_data;
            //注册存档信息
            var save_tmp=new Array();
            for(let i=0;i<4;i++){
                save_tmp[i]=0;
            }
            let save_data=JSON.stringify(save_tmp);
            user_data.save_data=save_data;
            localStorage.setItem("gv_"+un,JSON.stringify(user_data));
            alert("注册成功！你的用户名为"+user_data["un"]);
            document.getElementById('transfetBtn').click()
        }
    }
}

function log(){
    let un=document.getElementById('log_un').value;
    let pw=document.getElementById('log_pw').value;
    if(!un){alert('请输入你的用户名！');}
    else if(!pw){alert('请输入密码！');}
    else{
        var user_data=JSON.parse(localStorage.getItem("gv_"+un));
        if(!user_data){
            alert('该用户不存在，请检查是否输入错误！');
        }
        else if(pw!=user_data["pw"]){
            alert("密码错误！");
            document.getElementById('log_pw').value="";
        }
        else{
            alert("登录成功！");
            localStorage.setItem("current-user",un);
            window.open('../index.html','_self');
        }
    }
}

function reset(){
    localStorage.clear();
    alert("登录信息重置成功！请重新登录！");
    window.open('html/account.html','_self');
}

function logout(){
    localStorage.removeItem('current-user');
    alert("成功退出登录！即将进入登录界面！");
    window.open('html/account.html','_self');
}
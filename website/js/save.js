Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
}

function save(present,id,text)
{
    //存档函数，0为自动存档
    let un=localStorage['current-user'];
    let user_data=JSON.parse(localStorage.getItem("gv_"+un));
    let save_data=JSON.parse(user_data['save_data'])
    let locate=location.href.split('/');
    locate=locate[locate.length-1].split('?');
    let time = new Date().Format("yyyy-MM-dd hh:mm:ss"); 
    save_data[id]=locate[0]+'@'+present+'@'+time+'@'+text;
    user_data['save_data']=JSON.stringify(save_data);
    localStorage["gv_"+un]=JSON.stringify(user_data);
}

function showsave(){
    //展示存档函数
    let un=localStorage['current-user'];
    let user_data=JSON.parse(localStorage.getItem("gv_"+un));
    let save_data=JSON.parse(user_data['save_data']);
    
    for(let i=0;i<4;i++){
        if(save_data[i]){
            let now_save=save_data[i].split('@');
            let object=document.getElementById("save_0");
            object.href="story/"+now_save[0]+"?p="+now_save[1];
            object.children[0].innerHTML=now_save[2];
            object.children[1].innerHTML=now_save[3];
        }
    }
}

function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
}
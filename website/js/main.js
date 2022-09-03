let locate=location.href.split('/');
var researchMode=locate[locate.length-2]!=='story';

window.onload=function(){
    if(typeof player !== "undefined"){
        setInterval(function(){
            if (player.paused) {
                player.play();
            }
        }, 100);
        if(!localStorage['volume']){
            localStorage.setItem('volume','60');
        }
        let obj=document.getElementById('volume');
        if(obj){
            document.getElementById('volume').value=localStorage['volume'];
        }
        player.volume=localStorage['volume']/100;
        if(researchMode&&sessionStorage['researchbgm']){
            player.currentTime=sessionStorage['researchbgm'];
        }
    }
    if(researchMode){
        player.ontimeupdate = function(){
            sessionStorage.setItem('researchbgm',player.currentTime);
        }
    }
}

function changeVolume(){
    localStorage['volume']=document.getElementById('volume').value;
    player.volume=localStorage['volume']/100;
}

function chapInit() {
    document.getElementById('option_area').style.display = "none";
    document.getElementById('dialog_area').style.display = "";
}

function dialog(t, c, cnt) {
    let dialog = document.getElementById("dialog_area")
    let name = document.getElementById("name_area")
    name.innerHTML = c
    if(!c){
        document.getElementById('name_area').style.display = "none";
    }
    if (cnt % 2 == 0) {
        let text = t[cnt / 2]
        dialog.innerHTML = '';
        let timer = null;
        if (text == undefined) return
        let limit = text.length
        let index = 0;
        timer = setInterval(function () {
            if (index == limit) {
                clearInterval(timer);
            } else if (dialog.innerHTML == text) {
                clearInterval(timer);
                dialog = text;
            }
            dialog.innerHTML = text.substr(0, index);
            index++;
        }, 30);
    } else {
        dialog.innerHTML = t[(cnt - 1) / 2]
    }
};

//present赋给cnt,想改变的文本的索引赋给aim,背景图的url赋给url,如果后面要再变回来再用一次即可
function changeBackground(cnt,aim,url) {
    if(cnt/2==aim||(cnt-1)/2==aim){
        document.getElementById('wrapper').style.background=`url(${url})`
    }
}

//present赋给cnt,想改变的文本的索引赋给aim,想改变的区域赋给characterid,图片源赋给charactersrc，opa表示opacity
function changeCharacter(cnt,aim,charactersrc) {
    if(cnt==aim*2+1){
        let cha=document.getElementById('character1');
        cha.src=charactersrc;
    }
}
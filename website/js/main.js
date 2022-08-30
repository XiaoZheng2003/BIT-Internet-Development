function chapInit() {
    document.getElementById('option_area').style.display = "none";
    document.getElementById('dialog_area').style.display = "";
}

function dialog(t, c, cnt) {
    let dialog = document.getElementById("dialog_area")
    let name = document.getElementById("name_area")
    name.innerHTML = c
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
function changeCharacter(cnt,aim,characterid,charactersrc,opa) {
    if(cnt/2==aim||(cnt-1)/2==aim){
        let cha=document.getElementById(characterid)
        cha.src=charactersrc
        cha.style.opacity=opa
    }
}

//使用前需先引入<script src="../../js/main.js"></script>

//present赋给cnt,想改变的文本的索引赋给aim,背景图的url赋给url,如果后面要再变回来再用一次即可
function changeBackground(cnt,aim,url) {
    if(cnt/2==aim||(cnt-1)/2==aim){
        document.getElementById('wrapper').style.background=`url(${url})`
    }
}
    ////present赋给cnt,想改变的文本的索引赋给aim,想改变的区域赋给characterid,图片源赋给charactersrc，opa表示opacity
function changeCharacter(cnt,aim,characterid,charactersrc,opa) {
    if(cnt/2==aim||(cnt-1)/2==aim){
        let cha=document.getElementById(characterid)
        cha.src=charactersrc
        cha.style.opacity=opa
    }
}
var scene_num=[4,3];

function check(scene){
    let un=localStorage['current-user'];
    if(!sessionStorage['rsh'+scene+un]){
        init(scene);
    }
}

function init(scene){
    let un=localStorage['current-user'];
    let research_tmp=new Array();
    for(let i=0;i<scene_num[scene];i++){
        research_tmp[i]=0;
    }
    let research_data=JSON.stringify(research_tmp);
    sessionStorage.setItem('rsh'+scene+un,research_data);
}

function mark(id,scene){
    let un=localStorage['current-user'];
    let research_tmp=JSON.parse(sessionStorage.getItem("rsh"+scene+un));
    research_tmp[id]=1;
    let research_data=JSON.stringify(research_tmp);
    sessionStorage.setItem('rsh'+scene+un,research_data);
}

function showrsh(scene){
    let un=localStorage['current-user'];
    let research_tmp=JSON.parse(sessionStorage.getItem("rsh"+scene+un));
    let cnt=scene_num[scene];
    for(let i=0;i<scene_num[scene];i++){
        if(research_tmp[i]){
            let object=document.getElementById("research"+i);
            object.innerHTML='√ '+object.innerHTML;
            cnt--;
        }
    }
    //第一幕尸体强制优先调查
    if(!scene&&!research_tmp[0]){
        for(let i=1;i<scene_num[0];i++){
            let object=document.getElementById("research"+i);
            object.style="display:none;";
        }
    }
    if(scene==1&&!research_tmp[0]){
        let object=document.getElementById("research2");
        object.style="display:none;";
    }
    if(!cnt){
        let object=document.getElementById("next");
        object.style="";
    }
}
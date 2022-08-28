function check(){
    let un=localStorage['current-user'];
    if(!sessionStorage['rsh_'+un]){
        init();
    }
}

function init(){
    let research_tmp=new Array();
    for(let i=0;i<4;i++){
        research_tmp[i]=0;
    }
    let research_data=JSON.stringify(research_tmp);
    sessionStorage.setItem('rsh_'+un,research_data);
}

function mark(id){
    let un=localStorage['current-user'];
    let research_tmp=JSON.parse(sessionStorage.getItem("rsh_"+un));
    research_tmp[id]=1;
    let research_data=JSON.stringify(research_tmp);
    sessionStorage.setItem('rsh_'+un,research_data);
}

function showrsh(){
    let un=localStorage['current-user'];
    let research_tmp=JSON.parse(sessionStorage.getItem("rsh_"+un));
    let cnt=4;
    for(let i=0;i<4;i++){
        if(research_tmp[i]){
            let object=document.getElementById("research"+i);
            object.style="display:none;";
            cnt--;
        }
    }
    if(!cnt){
        let object=document.getElementById("next");
        object.style="";
    }
}
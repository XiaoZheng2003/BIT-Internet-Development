function showAchv(){
    let un=localStorage['current-user'];
    let user_data=JSON.parse(localStorage.getItem("gv_"+un));
    let achv_data=JSON.parse(user_data['achievement_data']);
    for(let i=0;i<7;i++){
        if(achv_data[i]){
            let object=document.getElementById("trophy"+i);
            object.src="../img/trophy.png";
        }
    }
}

function achieve(id){
    let un=localStorage['current-user'];
    let user_data=JSON.parse(localStorage.getItem("gv_"+un));
    let achv_data=JSON.parse(user_data['achievement_data']);
    if(!achv_data[id]){
        let object=document.getElementById("achv_bar");
        object.style.display="";
        achv_data[id]=1;
        user_data['achievement_data']=JSON.stringify(achv_data);
        localStorage["gv_"+un]=JSON.stringify(user_data);
        $("#achv_bar").delay(3000).fadeOut(3000);
    }
}
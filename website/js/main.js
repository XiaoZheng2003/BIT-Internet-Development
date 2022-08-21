function init(){
    localStorage.clear()
    let str=JSON.stringify({['EXAM']:'exam'})
    let arr=[str]
    localStorage.setItem('archive',JSON.stringify(arr))
}

function chapInit(){
    sessionStorage.setItem('cnt',1)
    document.getElementById('option_area').style.opacity=0
    document.getElementById('dialog_area').style.opacity=1
}

function dialog(){
    let cnt=sessionStorage['cnt']
    let d=document.getElementById('dialog_area')
    let limit=document.getElementById('dialog_area').children.length
    limit=2*limit-1
    if(cnt<limit){
        d.appendChild(d.firstChild)
    }else{
        document.getElementById('option_area').style.opacity=1
        document.getElementById('dialog_area').style.opacity=0
    }
    cnt++
    sessionStorage.setItem('cnt',cnt)
}

function save(){
    let obj={
        [document.title]:location.pathname
    }
    let arr=JSON.parse(localStorage['archive'])
    arr.push(JSON.stringify(obj))
    localStorage.setItem('archive',JSON.stringify(arr))
    console.log(arr)
    alert('成功')
}

function load(){
    console.log('scu')
    let arr=JSON.parse(localStorage['archive'])
    let opt=document.getElementById('option_area')
    for(let i=1;i<arr.length;i++){
        let obj=JSON.parse(arr[i])
        let name=Object.keys(obj)
        let p=document.createElement('p')
        opt.appendChild(p)
        let a=document.createElement('a')
        p.appendChild(a)
        a.href=obj[name]
        let text=document.createTextNode(name)
        a.appendChild(text)
    }
    alert('成功')
}

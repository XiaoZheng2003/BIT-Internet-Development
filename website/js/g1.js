function init() {
    let str = JSON.stringify({
        ['EXAM']: 'exam'
    })
    let arr = []
    arr.push(str)
    localStorage['memory'] = JSON.stringify([0, 0, 0, 0, 0])
    localStorage['archive'] = JSON.stringify(arr)
    localStorage['achievement'] = JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    localStorage['emo'] = '4'
}

function start() {
    localStorage['memory'] = JSON.stringify([0, 0, 0, 0, 0])
    localStorage['emo'] = '4'
    if (localStorage['achievement'] == undefined) localStorage['achievement'] = JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    if (localStorage['archive'] == undefined) {
        let str = JSON.stringify({
            ['EXAM']: 'exam'
        })
        let arr = [str]
        localStorage['archive'] = JSON.stringify(arr)
        console.log(localStorage)
    }
}

function chapInit() {
    sessionStorage.setItem('cnt', 1)
    document.getElementById('option_area').style.opacity = 0
    document.getElementById('dialog_area').style.opacity = 1
}

function dialog(t, c, cnt) {
    let dialog = document.getElementById("dialog_area")
    let name = document.getElementById("name_area")
    if (cnt % 2 == 0) {
        let text = t[cnt / 2]
        name.innerHTML = c[cnt / 2]
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
        name.innerHTML = c[(cnt - 1) / 2]
    }
    if (name.innerHTML != undefined) {
        if (name.innerHTML != '') {
            document.getElementById('name_area').style.opacity = 1;
        } else {
            document.getElementById('name_area').style.opacity = 0;
        }
    } else document.getElementById('name_area').style.opacity = 0;
};

function save() {
    let obj = {
        [document.title]: location.pathname
    }
    let arr = JSON.parse(localStorage['archive'])
    console.log(arr)
    arr.push(JSON.stringify(obj))
    localStorage.setItem('archive', JSON.stringify(arr))
    promtshow()
}

function load() {
    let arr = JSON.parse(localStorage['archive'])
    let opt = document.getElementById('storage_area')
    for (let i = 1; i < arr.length; i++) {
        let obj = JSON.parse(arr[i])
        let name = Object.keys(obj)
        let p = document.createElement('p')
        opt.appendChild(p)
        let a = document.createElement('a')
        p.appendChild(a)
        a.href = obj[name]
        let text = document.createTextNode(name)
        a.appendChild(text)
    }
    if (arr.length == 1) promtshow()
}

function g1init(flag, s) {
    if (flag == 1) {
        let arr = [
            ['窗.html', '窗户'],
            ['镜子.html', '镜子'],
            ['尸体.html', '尸体'],
            ['环境.html', '环视四周']
        ]
        localStorage.setItem('g1', JSON.stringify(arr))
    } else {
        let arr = JSON.parse(localStorage['g1'])
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] == s) {
                arr[i][0] = '-1'
                break;
            }
        }
        localStorage.setItem('g1', JSON.stringify(arr))
    }
}

function g2init(flag, s) {
    if (flag == 1) {
        let arr = [
            ['窗.html', '窗户'],
            ['镜子.html', '镜子'],
            ['尸体.html', '尸体'],
            ['环境.html', '环视四周']
        ]
        localStorage.setItem('g2', JSON.stringify(arr))
    } else {
        let arr = JSON.parse(localStorage['g2'])
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] == s) {
                arr[i][0] = '-1'
                break;
            }
        }
        localStorage.setItem('g2', JSON.stringify(arr))
    }
}

function memo(pos) {
    let arr = JSON.parse(localStorage['memory']);
    arr[pos]=1
    localStorage['memory'] = JSON.stringify(arr)
}


function achieve(pos) {
    let arr = JSON.parse(localStorage['achievement'])
    arr[pos] = 1;
    localStorage['achievement'] = JSON.stringify(arr)
}

function promtshow() {
    let prom = document.getElementById("prompt_area")
    prom.style.opacity = 1;
    prom.style.zIndex = 100000;
}


function promtdown() {
    let prom = document.getElementById("prompt_area")
    prom.style.opacity = 0;
    prom.style.zIndex = -100000;
}

function jump() {
    document.getElementById('dialog_area').style.opacity = 0;
    document.getElementById('option_area').style.opacity = 1;
    document.getElementById('name_area').style.opacity=0;
}

function jumpex(url){ 
    location=url
}


function msplay() {
    let  music = document.getElementById("ms");//获取ID      
    if (music.paused) { //判读是否播放  
        music.paused=false;
        music.play(); //没有就播放 
    }    
}

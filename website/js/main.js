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
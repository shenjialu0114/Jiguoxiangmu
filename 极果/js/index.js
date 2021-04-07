// 倒计时
function timer() {
    var future = new Date("2021-05-07 00:00:00");
    var now = new Date();
    let tian = document.querySelector('.day')
    let shi = document.querySelector('.hour')
    let fen = document.querySelector('.minute')
    let miao = document.querySelector('.miao')
        // 相差的秒数
    var seconds = (future - now) / 1000;

    // 相差的天数
    var day = parseInt(seconds / 86400);

    // 相差的小时数
    var hour = parseInt(seconds / 3600) % 24;

    // 相差的分钟
    var minute = parseInt(seconds / 60) % 60;

    // 相差的秒数
    var second = parseInt(seconds % 60);

    tian.innerHTML = day;
    shi.innerHTML = hour;
    fen.innerHTML = minute;
    miao.innerHTML = second;
}

timer();
setInterval(timer, 1000)

// 轮播图
let uls = document.querySelectorAll('.Carousel-ul')
let leftbtn = document.querySelector('.leftbtn')
let rightbtn = document.querySelector('.rightbtn')
let div = document.querySelector(".uls")
console.log(div);
var imgWidth = uls[0].offsetWidth;

var focusIndex = 0;
var flag = true;

function play(index) {
    // 滚动的距离 
    var offsetLeft = -index * imgWidth;
    // 图片滚动   
    animate(div, offsetLeft, function() {
        // 判断是否是最后一张图，如果是则不加动画再跳到第一张
        if (index == uls.length - 1) {
            div.style.left = 0;
        }
        flag = true;
    })
}

leftbtn.onclick = function() {
    if (flag) {
        flag = false;
        if (focusIndex == 0) {
            div.style.left = -(uls.length - 1) * imgWidth + "px"
            focusIndex = uls.length - 1;
        }

        focusIndex = focusIndex > 0 ? --focusIndex : imgs.length - 1;

        play(focusIndex);
    }
}

rightbtn.onclick = function() {
    if (flag) {
        flag = false;
        focusIndex = focusIndex < uls.length - 1 ? ++focusIndex : 0;
        play(focusIndex);
    }

}

jsq()

function jsq() {
    js = setInterval(function() {
        rightbtn.click()
    }, 1000)
}
// 鼠标移入播放暂停
div.onmouseover = function() {
        clearInterval(js)
    }
    // 鼠标移除播放开始
div.onmouseleave = function() {
    jsq()
}

// 返回顶部
let returns = document.querySelector('.returns')
let main = document.querySelector('.main-sift')
let toplength = returns.offsetTop - main.offsetTop
let fh = document.querySelector('.fh')
let fx = document.querySelector('.fx')
let dg = document.querySelector('.dg')
let bg = document.querySelector('.bgg')
let returns_lis1 = document.querySelector('.returns-lis1')

let jsa = null
let jsb = null
fh.onclick = function() {
    jsa = setInterval(function() {
        // 当前位置
        let dangqian = document.documentElement.scrollTop
            // 步长
            // 每次定时器运走的距离
        let buchang = Math.ceil(dangqian / 5)
        if (dangqian != 0) {
            // 就让当前的的距离减去每步走的距离，在赋值
            document.documentElement.scrollTop = dangqian - buchang
        } else {
            clearInterval(jsa)
        }


    }, 50)
}
console.log(document.documentElement.scrollTop);

fx.onclick = function() {

    document.documentElement.scrollTop = 1774
}
dg.onclick = function() {
    document.documentElement.scrollTop = 1400
}
bg.onclick = function() {
    document.documentElement.scrollTop = 700
}
returns_lis1.onclick = function() {
        document.documentElement.scrollTop = 363
    }
    // 页面滚动事件
window.onscroll = function() {
    // window.pageYOffset 页面被卷去的距离
    if (window.pageYOffset >= main.offsetTop) {
        returns.style.position = 'fixed'
        returns.style.top = toplength + 'px'
        fh.style.display = 'block'
    } else {
        // 小于那个滚动距离时让他重新回到之前
        returns.style.position = 'absolute'
        returns.style.top = '900px'
        fh.style.display = 'none'
    }

}

// 点击加载按钮
let jiazai = document.querySelector('.jiazai')
let zuiwai = document.querySelector('#kwsift')
let kuwanhezi = document.querySelector('.FXKW')
    // 最外层盒子高度
let zuiHeight = zuiwai.offsetHeight
    // 酷玩盒子高度
let kuwanheziHeight = kuwanhezi.offsetHeight
let num = 0
console.log(kuwanhezi);
console.log(zuiwai);

jiazai.onclick = function() {
    ++num
    if (num < 4) {
        zuiHeight += 300
        kuwanheziHeight += 300
        zuiwai.style.height = zuiHeight + 'px'
        kuwanhezi.style.height = kuwanheziHeight + 'px'
    } else {
        this.innerHTML = '没啦没啦~'
        this.style.color = '#505050'
    }


}
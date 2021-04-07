// 点击加载按钮
let jiazai = document.querySelector('.jiazai')
let zuiwai = document.querySelector('#main-sift_HOt')
let kuwanhezi = document.querySelector('.HOt')
let imgjiazai = document.querySelector('.jiazai img')
    // 最外层盒子高度
let zuiHeight = zuiwai.offsetHeight
    // 酷玩盒子高度
let kuwanheziHeight = kuwanhezi.offsetHeight
let num = 0
let jsss = null
console.log(jiazai);
console.log(zuiwai);
console.log(kuwanhezi);

jiazai.onclick = function() {
    jsss = setInterval(function() {

        ++num
        if (num < 3) {
            zuiHeight += 300
            kuwanheziHeight += 300
            zuiwai.style.height = zuiHeight + 'px'
            kuwanhezi.style.height = kuwanheziHeight + 'px'
        } else {
            this.innerHTML = '没啦没啦~'
            this.style.color = '#505050'
        }
        clearInterval(jsss)
        jiazai.innerHTML = '<img src="../imgs/more.png" alt=""> ' + '点击加载更多'
    }, 1000)
    this.innerHTML = '<img src="../imgs/loading-icon.gif" alt="">' + '加载中'
}
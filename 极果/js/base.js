// 点击加载按钮
let jiazai = document.querySelector('.jiazai')
let zuiwai = document.querySelector('.banner-maindiv')
let kuwanhezi = document.querySelector('.banner-ul')
    // 最外层盒子高度
let zuiHeight = zuiwai.offsetHeight
    // 酷玩盒子高度
let kuwanheziHeight = kuwanhezi.offsetHeight
let num = 0


jiazai.onclick = function() {
    jsss = setInterval(function() {

        ++num
        if (num < 3) {
            zuiHeight += 290
            kuwanheziHeight += 290
            zuiwai.style.height = zuiHeight + 'px'
            kuwanhezi.style.height = kuwanheziHeight + 'px'
            jiazai.innerHTML = '<img src="../imgs/more.png" alt=""> ' + '点击加载更多'
        } else if (num == 3) {
            jiazai.innerHTML = '没啦没啦~'
            jiazai.style.color = '#505050'
        }
        clearInterval(jsss)

    }, 1000)
    this.innerHTML = '<img src="../imgs/loading-icon.gif" alt="">' + '加载中'
}
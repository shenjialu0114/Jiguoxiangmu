// 点击加载按钮
let jiazai = document.querySelector('.jiazai')
let zuiwai = document.querySelector('#main-shft1')
let kuwanhezi = document.querySelector('.play-FXKW')
    // 最外层盒子高度
let zuiHeight = zuiwai.offsetHeight
    // 酷玩盒子高度
let kuwanheziHeight = kuwanhezi.offsetHeight
let num = 0
console.log(jiazai);
console.log(zuiwai);
console.log(kuwanhezi);

jiazai.onclick = function() {
    ++num
    if (num < 5) {
        zuiHeight += 300
        kuwanheziHeight += 300
        zuiwai.style.height = zuiHeight + 'px'
        kuwanhezi.style.height = kuwanheziHeight + 'px'
    } else {
        this.innerHTML = '没啦没啦~'
        this.style.color = '#505050'
    }


}
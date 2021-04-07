// 点击加载按钮
let jiazai = document.querySelector('.jiazai')
let zuiwai = document.querySelector('.report-conten')
let kuwanhezi = document.querySelector('.report-conten-middel-left')
    // 最外层盒子高度
let zuiHeight = zuiwai.offsetHeight
    // 酷玩盒子高度
let kuwanheziHeight = kuwanhezi.offsetHeight
let num = 0
let p = document.querySelector('.report-conten-ps')
console.log(jiazai);
console.log(zuiwai);
console.log(kuwanhezi);

p.onclick = function() {
    ++num
    if (num < 5) {
        zuiHeight += 484
        kuwanheziHeight += 484
        zuiwai.style.height = zuiHeight + 'px'
        kuwanhezi.style.height = kuwanheziHeight + 'px'
    } else {
        this.innerHTML = '没啦没啦~'
        this.style.color = '#505050'
    }


}
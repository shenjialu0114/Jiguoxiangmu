// 图片
let imgxin = document.querySelector('.lioneli img')
let span = document.querySelector('.lioneli span')
let p = document.querySelector('.lioneli p')
console.log(imgxin);
console.log(imgxin.src);
console.log(span);
imgxin.onclick = function() {
    if (span.innerText == 15) {
        span.innerText = ++span.innerText
        imgxin.src = '../imgs/xinRedh.png'
        p.style.color = '#FE6541'
    } else if (span.innerText == 16) {
        span.innerText = --span.innerText
        imgxin.src = '../imgs/xinRedo.png'
        p.style.color = ''
    }
}
let bshare = document.querySelector('.bshare-custom-div')
let litwoli = document.querySelector('.litwoli')
let btnquxiao = document.querySelector('.btnquxiao')
litwoli.onclick = function() {
    bshare.style.display = 'block'
}
btnquxiao.onclick = function() {
    bshare.style.display = 'none'
}
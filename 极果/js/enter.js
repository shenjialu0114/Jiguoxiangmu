let input11 = document.querySelector('.enter-div-content-left-div-1')
let input22 = document.querySelector('.enter-div-content-left-div-2')
let bntt = document.querySelector(".bntt")
let bntta = document.querySelector('.bntt-a')
let motaik = document.querySelector('.motaik')
let motaikbtn = document.querySelector('.motaik-btn')
console.log(bntt);
console.log(input11);
console.log(input22);
console.log(bntta);
let result6 = false
bntt.onclick = function() {
    if (/(^\w+\@\w+(\.\w+)*$)|(^1[3-9]+[0-9]{9}$)|(^[a-zA-Z_]\w{4,14}$)/g.test(input11.value) == true && /(^\w{4,7}$)/g.test(input22.value) == true) {
        bntta.href = "./index.html"
    } else {
        bntta.href = "#"
        motaik.style.display = 'block'

    }

}
motaikbtn.onclick = function() {
    motaik.style.display = 'none'
}
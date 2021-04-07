let topshang = document.querySelector(".topshang input")
let souS = document.querySelector('.topshang b')
let topshang_a = document.querySelector('.topshang a')
console.log(topshang);
console.log(souS);

souS.onclick = function() {
    if (topshang.value == '酷玩') {
        topshang_a.href = './play/index.html'

    }
}
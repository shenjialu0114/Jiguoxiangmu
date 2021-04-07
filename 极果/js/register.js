let button = document.querySelector(' .formbtn')

let js1 = null
let js2 = null
let time = 3
button.onclick = function() {
    this.disabled = true;
    js1 = setInterval(function() {
        alert('验证码为：1234')
        clearInterval(js1)
    }, 4000)

    js2 = setInterval(function() {
        if (time > 0) {
            button.innerHTML = --time + '秒后重新获取'
        } else if (time == 0) {
            clearInterval(js2)
            button.innerHTML = "重新获取验证码"
            button.disabled = false
            time = 3
        }
    }, 1000)
}


// 表单验证
// 手机号
let mobileNumber = document.querySelectorAll('input')[0]
    // 手机验证码
let mobileVerify = document.querySelectorAll('input')[1]
    // 用户名

let userName = document.querySelectorAll('input')[3]

// 密码
let pass = document.querySelectorAll('input')[4]
console.log(pass);
//  确认密码
let passclone = document.querySelectorAll('input')[5]
    // 手机号span
let span1 = document.querySelectorAll('.iconfont')[1]

let span2 = document.querySelectorAll('span')[3]
let span3 = document.querySelectorAll('span')[4]
let span4 = document.querySelectorAll('span')[5]
let span5 = document.querySelectorAll('span')[6]

let b1 = document.querySelectorAll('b')[0]
let b2 = document.querySelectorAll('b')[1]
let b3 = document.querySelectorAll('b')[2]
let b4 = document.querySelectorAll('b')[3]
let b5 = document.querySelectorAll('b')[4]

// 手机号
let result1 = false
mobileNumber.onblur = function() {
    let color = 'red'
    let tishi = ''
    let b = ''
    if (/1[3-9]\d{9}$/g.test(this.value) == false) {
        tishi = '手机号格式错误'
        b = '&#xe618;'
        b1.style.color = 'red'
        result1 = false
    } else {
        tishi = '手机号可以使用'
        color = 'green'
        b = '√'
        b1.style.color = 'green'
        result1 = true
    }
    span1.innerHTML = tishi
    span1.style.color = color
    b1.innerHTML = b
}

// 手机验证码
let result2 = false
mobileVerify.onblur = function() {
    let color = 'red'
    let tishi = ''
    let b = ''
    if (/\d{4}$/g.test(this.value) == false) {
        tishi = '验证码错误'
        b = '&#xe618;'
        b2.style.color = 'red'
        result2 = false
    } else {
        tishi = '验证码正确'
        color = 'green'
        b = '√'
        b2.style.color = 'green'
        result2 = true
    }
    span2.innerHTML = tishi
    span2.style.color = color
    b2.innerHTML = b
}

// 用户名
let result3 = false
userName.onblur = function() {
    let color = 'red'
    let tishi = ''
    let b = ''
    if (/(^\w+\@\w+(\.\w+)*$)|(^1[3-9]+[0-9]{9}$)|(^[a-zA-Z_]\w{4,14}$)/g.test(this.value) == false) {
        tishi = '用户名格式不对'
        b = '&#xe618;'
        b3.style.color = 'red'
        result3 = false
    } else {
        tishi = '用户名正确'
        color = 'green'
        b = '√'
        b3.style.color = 'green'
        result3 = true
    }
    span3.innerHTML = tishi
    span3.style.color = color
    b3.innerHTML = b
}

// 密码
let result4 = false
pass.onblur = function() {
        let color = 'red'
        let tishi = ''
        let b = ''
        if (/(^\w{4,7}$)/g.test(this.value) == false) {
            tishi = '密码格式不对'
            b = '&#xe618;'
            b4.style.color = 'red'
            result4 = false
        } else {
            tishi = '密码格式正确'
            color = 'green'
            b = '√'
            b4.style.color = 'green'
            result4 = true
        }
        span4.innerHTML = tishi
        span4.style.color = color
        b4.innerHTML = b
    }
    // 确认密码
let result5 = false
passclone.onblur = function() {
    let color = 'red'
    let tishi = ''
    let b = ''
    if ((this.value != pass.value) || /(^\w{4,7}$)/g.test(this.value) == false) {
        tishi = '确认密码错误'
        b = '&#xe618;'
        b5.style.color = 'red'
        result5 = false
    } else if ((this.value == pass.value) && /(^\w{4,7}$)/g.test(this.value) == true) {
        tishi = '确认密码正确'
        color = 'green'
        b = '√'
        b5.style.color = 'green'
        result5 = true
    }
    span5.innerHTML = tishi
    span5.style.color = color
    b5.innerHTML = b
}
let btn2 = document.querySelector('.btn2')
let btna = document.querySelector('.btn2-a')

btn2.onclick = function() {
    mobileNumber.onblur()
    mobileVerify.onblur()
    userName.onblur()
    pass.onblur()
    passclone.onblur()
    if (result1 && result2 && result3 && result4 && result5) {
        btna.href = "./enter.html"
    }
}
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/play/new',
    success: function(result) {
        let arr1 = result[1]
        let arr2 = [...arr1, ...arr1, ...arr1]
        console.log(arr2);
        var tmpText = doT.template(document.getElementById('li_tmpl-m').innerText);
        document.querySelector('.main-article-HOt-uul').innerHTML = tmpText(arr2);
    }
})
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/play/new',
    success: function(result) {
        let arr4 = [...result[1], ...result[1]]
        let arr1 = arr4.slice(2, 6)
        let arr2 = [...arr1, ...arr1, ...arr1, ...arr1, ...arr1, ...arr1, ...arr1, ...arr1]
        var tmpText = doT.template(document.getElementById('li_tmpl-k').innerText);
        document.querySelector('.main-article-CMDD-ul').innerHTML = tmpText(arr2);

    }

})
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/play/new',
    success: function(result) {
        let arr3 = result[3].slice(0, 4)
        let arr4 = [...arr3, ...arr3, ...arr3, ...arr3, ...arr3, ...arr3, ...arr3, ...arr3]
        var tmpText = doT.template(document.getElementById('li_tmpl-y').innerText);
        document.querySelector('.main-article-play-FXKW-ul').innerHTML = tmpText(arr4);
    }
})
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/play/new',
    success: function(result) {
        let arr1 = [...result[0], ...result[1], ...result[2], ...result[3]]
        let arr2 = arr1.slice(14, 18)
        let arr3 = [...arr2, ...arr2, ...arr2, ...arr2, ...arr2, ...arr2, ...arr2, ...arr2]
        console.log(arr3);
        var tmpText = doT.template(document.getElementById('li_tmpl-u').innerText);
        document.querySelector('.main-article-Hot-ul').innerHTML = tmpText(arr3);
    }
})
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/report/hot',
    success: function(result) {
        console.log(result);
        let arr2 = result.slice(5, 13)
        var tmpText = doT.template(document.getElementById('li_tmpl-1').innerText);
        document.querySelector('.main-article-ul').innerHTML = tmpText(arr2);
    }
})


ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/play/new',
    success: function(result) {
        console.log(result);
        let arr4 = [...result[1], ...result[1]]
        let arr1 = arr4.slice(2, 6)
        var tmpText = doT.template(document.getElementById('li_tmpl').innerText);
        document.querySelector('.main-article-ululul').innerHTML = tmpText(arr1);
    }
})
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/play/new',
    success: function(result) {
        let arr3 = result[3].slice(0, )
        let arr4 = [...arr3, ...arr3, ...arr3, ...arr3]
        var tmpText = doT.template(document.getElementById('li_tmpl-111').innerText);
        document.querySelector('.main-article-FXKW-ul').innerHTML = tmpText(arr4);

    }

})


// 轮播
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/play/new',
    success: function(result) {

        let arr1 = [...result[0], ...result[1], ...result[2], ...result[3]]
        let arr4 = arr1.slice(0, 4)
        console.log(arr4);
        var tmpText = doT.template(document.getElementById('li_tmpl-lb').innerText);
        document.querySelector('#Carousel-ul-1').innerHTML = tmpText(arr4);

    }

})
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/play/new',
    success: function(result) {

        let arr1 = [...result[1], ...result[2], ...result[3]]
        let arr4 = arr1.slice(0, 4)
        console.log(arr4);
        var tmpText = doT.template(document.getElementById('li_tmpl-lb2').innerText);
        document.querySelector('#Carousel-ul-2').innerHTML = tmpText(arr4);

    }

})
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/play/new',
    success: function(result) {

        let arr1 = [...result[2], ...result[3]]
        let arr4 = arr1.slice(0, 4)
        console.log(arr4);
        var tmpText = doT.template(document.getElementById('li_tmpl-lb3').innerText);
        document.querySelector('#Carousel-ul-3').innerHTML = tmpText(arr4);

    }

})
ajax({
        type: 'get',
        url: 'http://192.168.31.254:3000/play/new',
        success: function(result) {


            let arr1 = [...result[0], ...result[1], ...result[2], ...result[3]]
            let arr4 = arr1.slice(0, 4)
            console.log(arr4);
            var tmpText = doT.template(document.getElementById('li_tmpl-lb4').innerText);
            document.querySelector('#Carousel-ul-4').innerHTML = tmpText(arr4);

        }

    })
    // use/help
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/play/new',
    success: function(result) {
        let arr1 = [...result[0], ...result[1], ...result[2], ...result[3]]
        let arr4 = arr1.slice(0, 4)
        var tmpText = doT.template(document.getElementById('li_tmpl-w').innerText);
        document.querySelector('#Carousel-ul-id').innerHTML = tmpText(arr4);

    }

})


// report
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/report/hot',
    success: function(result) {

        // let newaraay = result.slice(0, 2)
        // let array2 = [...newaraay[0], ...newaraay[1]]
        // array2[]
        console.log(result);
        let arr2 = result.slice(5, )
        var tmpText = doT.template(document.getElementById('li_tmpl-o').innerText);
        document.querySelector('.report-conten-middel-left-ul-uul').innerHTML = tmpText(arr2);

    }

})

ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/report/hot',
    success: function(result) {

        // let newaraay = result.slice(0, 2)
        // let array2 = [...newaraay[0], ...newaraay[1]]
        // array2[]
        console.log(result);
        let arr2 = result.slice(7, )
        var tmpText = doT.template(document.getElementById('li_tmpl-p').innerText);
        document.querySelector('.report-conten-middel-left-ul').innerHTML = tmpText(arr2);

    }

})

// use
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/useing/public',
    success: function(result) {

        let arr1 = result.slice(2, 10)
        let arr2 = [...arr1, ...arr1, ...arr1, ...arr1, ...arr1]
        var tmpText = doT.template(document.getElementById('li_tmpl_za').innerText);
        document.querySelector('.banner-ul').innerHTML = tmpText(arr2);

    }

})

ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/useing/public',
    success: function(result) {
        console.log(result);
        let arr1 = result.slice(0, 8)
        let arr2 = [...arr1, ...arr1, ...arr1, ...arr1]
        var tmpText = doT.template(document.getElementById('li_tmpl_zb').innerText);
        document.querySelector('.banner-ul').innerHTML = tmpText(arr2);

    }

})
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/useing/public',
    success: function(result) {
        console.log(result);
        let arr1 = result.slice(6, 10)
        let arr2 = [...arr1, ...arr1, ...arr1, ...arr1, ...arr1, ...arr1, ...arr1]
        var tmpText = doT.template(document.getElementById('li_tmpl_zc').innerText);
        document.querySelector('.banner-ul').innerHTML = tmpText(arr2);
    }
})
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/useing/public',
    success: function(result) {
        console.log(result);
        let arr1 = result.slice(5, 14)
        let arr2 = [...arr1, ...arr1, ...arr1, ...arr1]
        var tmpText = doT.template(document.getElementById('li_tmpl_zd').innerText);
        document.querySelector('.banner-ul').innerHTML = tmpText(arr2);

    }
})
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/useing/public',
    success: function(result) {
        console.log(result);
        let arr1 = result.slice(4, 12)
        let arr2 = [...arr1, ...arr1, ...arr1, ...arr1]
        var tmpText = doT.template(document.getElementById('li_tmpl_ze').innerText);
        document.querySelector('.banner-ul').innerHTML = tmpText(arr2);

    }

})
//同样是显示隐藏切换，效果是从下往上隐藏，从上往下显示

$('.right-font').click(function() {
    $('.topshang').slideDown(1000)
})
$('.topshang-p').click(function() {
        $('.topshang').slideUp()
    })
    // $('button:eq(2)').click(function() {
    //     $('div').slideToggle(3000)
    // })
/*
 * @Author: AndyGao
 * @Date: 2021-03-15 10:27:56
 * @LastEditors: AndyGao
 * @LastEditTime: 2021-03-15 10:52:15
 * @Description: file content
 * @FilePath: \code\6JavaScript\day10\animate.js
 */
/**
 * @description: 缓动动画函数
 * @param {object} element 要操作的元素对象 
 * @param {int} target 目标位置 
 * @param {function} callback 动画完成之后自动调用的函数 
 * @param {int} speed 动画执行的速度  
 * @Author: AndyGao
 * @Date: 2021-03-15 10:28:17
 * @Version: 1.0
 */
// 将缓存动画封装到一个函数中，函数形参有(要操作的元素，执行结束后的位置，动画完成后调用的函数，动画执行的速度)
function animate(element, target, callback = null, speed = 20) {
    // 执行本次动画时让上一个动画停止，防止动画多次执行导致出错
    clearInterval(element.timer);
    // 因为如果是第一次使用动画，首先执行消除定时器会出现报错，所以这里默认让被操作元素的方法为定时器
    element.timer = setInterval(function() {
        // div1.style.left = "1000px"
        //  元素当前位置
        let left = element.offsetLeft;
        // 判断取整方向，如果要去的位置大于0执行向上取整 否则向下取整
        let step = target - left > 0 ? Math.ceil((target - left) / 10) : Math.floor((target - left) / 10);

        // 每步走的距离
        if (left != target) {
            element.style.left = left + step + "px";
        } else {
            clearInterval(element.timer);
            callback && callback();
        }

    }, speed)


}
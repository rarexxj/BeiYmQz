$(function () {
//rem
    function set_font() {
        // 计算、转换布局单位
        var html = document.getElementsByTagName('html')[0];
        var designFontSize = 100,
            designWidth = 750;

        function setFontSize() {
            var winWidth = document.documentElement.getBoundingClientRect().width;
            var fontSize = winWidth / designWidth * designFontSize;

            html.style.fontSize = fontSize + 'px';
        }

        setFontSize();
        window.addEventListener('resize', function () {
            setFontSize();
        });

        return this;
    }

    set_font()
})


//文字伸缩
function shensuo(element) {
    var $element = $(element);
    var _height = $element.siblings('p').children('.shensuotext').height()
    if (_height <= 70) {
        $(element).hide();
    } else {
        $(element).on('click', function () {
            console.log(_height);
            $(this).prev().toggleClass('log');
            $(this).toggleClass('up');
        })
    }

}

//移除LOADING
$.RMLOAD = function () {

    (!$('.new-loading').length) || $('.new-loading').remove();
    (!$('.news-loading').length) || $('.news-loading').remove();
}
//添加LOADING
$.ADDLOAD = function () {
    var html = '<div class="new-loading"><ul class="small-loading"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></div>'
    if (!$('.new-loading').length) {
        $('body').append(html);
    }
}

function oppo(msg, time, callback) {
    var html = '<div class="oppo">' + msg + '</div>';
    $('body').append(html);
    setTimeout(function () {
        $('.oppo').remove()
        if (typeof (callback) == 'function') {
            callback()
        } else {

        }
    }, time * 1000)
}

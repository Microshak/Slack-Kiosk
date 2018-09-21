

var channel = ''
var dialog
$(function () {
    
    $('.center').fadeIn("slow");


    SizeWindow()
});
$(window).resize(function () {
    SizeWindow()
});

function SizeWindow() {
    var height = $(window).height();
    var imgHeight = height / 2 - 10


    var sean = $('#sean').width()
    var wind = $(window).width();
    var NumImages = 4
    imgWidth = ((wind - NumImages * 10) / NumImages)
    marg = imgWidth < 1 ? 0 : wind - (imgWidth * NumImages) - 30
    $('img').css("width", function (index) {
        return imgWidth;
    })

    console.log(marg)
    $('.center').css({ 'margin-left': marg + 'px' })

}

$(function () {
    SizeWindow()

    var e = $('body');

    e.touch();

    e
        .on('swipeRight', function (event) {
            window.location = "/Index.html"
        })
        .on('swipeLeft', function (event) {
            window.location = "/Index.html"
        });
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


$(window).resize(function () {
    SizeWindow()
});

function SizeWindow() {
    var height = $(window).height();
    var imgHeight = (height / 2) - 10


    var sean = $('#sean').width()
    var height = $('#sean').height()

    var wind = $(window).width();
    var NumImages = 4
    imgWidth = ((wind - NumImages * 10) / NumImages)
    tileWidth = ((wind - NumImages * 11) / NumImages ) - 4
    marg = imgWidth < 1 ? 0 : wind - (imgWidth * NumImages) - 30
    $('img').css("width", function (index) {
        return imgWidth;
    })

    var height = $('#sean').height()


    $('.tile').css("width", function (index) {
        return tileWidth ;
    })

    $('.tile').css("height", function (index) {
        return height ;
    })

    console.log(marg)
    $('.center').css({ 'margin-left': marg + 'px' })

}

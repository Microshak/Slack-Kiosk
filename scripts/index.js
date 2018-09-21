

var channel = ''
var dialog
$(function () {
    dialog = $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "fade",
            duration: 1000
        }
    });
    if (getParameterByName('room') == null) {
        dialog = $("#Setup").dialog({
            autoOpen: true,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "fade",
                duration: 1000
            }
        });
    }

    SetRooms(getParameterByName('room'))

    $('.center').fadeIn("slow");


    $(".bio").on("click", function () {
        var that = $(this)
        name = (that.data('name'))
        sound = (that.data('sound'))
        var dia = $("#dialog")
        channel = $(this).attr('id')
        playSound("/sounds/" + sound)

        dia.prop('title', 'Calling ' + name)

        dia.dialog({
            title: "Call " + name + "?"
        });
        dia.dialog("open");
    });
    SizeWindow()
});
$(window).resize(function () {
    SizeWindow()
});

function SetRooms(room) {
    if (room == null) {
        
        return;
    }
    room = room.toLowerCase()


    $('.come').hide()
    $('#more').show()

    switch (room) {
        case 'jemison':
            $('#Jemison').show()
            break;
        case 'lovelace':
            $('#Lovelace').show()
            break;
        case 'c1472':
            $('#C1472').show()
            break;
        case 'c1476':
            $('#C1476').show()
            break;
        default:
            $('.come').show()
            $('#more').hide()
            break;
    }


}
function toggleMore() {
    $('.come').toggle()
    var ml = $('#moreLink')
    ml.hide()
    if ($('.come').is(":visible")) {
        alert(3)
        ml.text= 'show'
    }
    else {
        ml.text = 'hide'
        alert(4)
    }
    
}
function playSound(path) {

    $('.sound').attr('src', path)
    var s = $('#sound');
    s.prop("volume", 0.007);

    s.attr('src', path)

    s.trigger('play');



}
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
function cancel() { dialog.dialog("close") }

function getMessageTech() {
    message = $('#message').val()
    getTech(message);
}

function getTech(message) {
    if (channel == 'general') {
        chanel = '#' + channel
    } else {
        chanel = '@' + channel
    }
    data = '{ "text": "' + message + '", "icon_emoji": ":rabbit2:", "channel": "' + chanel + '" }'
    url = "https://hooks.slack.com/services/[slack key]"
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType: "application/json"
    });
    alert('Notification Sent to ' + name)
    dialog.dialog("close")
}

$(function () {

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
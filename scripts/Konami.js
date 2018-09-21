// ▲ ▲ ▼ ▼ ◀ ▶ ◀ ▶ b a
var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
$(document).keydown(function (e) {
    kkeys.push(e.keyCode);
    if (kkeys.toString().indexOf(konami) >= 0) {
        $(document).unbind('keydown', arguments.callee);
        $('.sound').attr('src', '../sounds/winning.mp3')
        var s = $('#sound');
        s.prop("volume", 1);

        s.attr('src', '../sounds/live-the-moment.mp3')

        s.trigger('play');
    }
});
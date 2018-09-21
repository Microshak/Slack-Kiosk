// ▲ ▲ ▼ ▼ ◀ ▶ ◀ ▶ b a
var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
$(document).keydown(function (e) {
   
    $('#mainframe').hide()
    
    kkeys.push(e.keyCode);
    console.log(kkeys)
    if (kkeys.toString().indexOf(konami) >= 0) {
        $(document).unbind('keydown', arguments.callee);
        var url = 'https://onedrive.live.com/embed?resid=633CA104DD4FFB37%218424&authkey=%21AFncJFuPXtxKZ9g&em=2&AllowTyping=True&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True'
        $('#mainframe').attr('src', url)
   
     $('#mainframe').show()
    }
});
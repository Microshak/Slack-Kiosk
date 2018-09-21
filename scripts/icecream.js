$(function () { 



setInterval(Icecream, 600000)

}

);

function Icecream()
{

    var now = new Date();

    if(Date.today().is().thursday() && now.getHours() == 14 )
    {

openNav()

}
    else{
       
        closeNav();
    }


}


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
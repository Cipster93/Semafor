var x = 1;
function ChangeCollor(button) {
    if (x == 1) {
        button.style.background = "red";
        x = 2;
    } else if (x == 2) {
        button.style.background = "green";
        x = 3;
    } else if (x == 3) {
        button.style.background = "yellow";
        x = 1;
    }
}
setInterval(function() {
    var button = document.getElementById('Pres');
    ChangeCollor(button);
}, 10000);

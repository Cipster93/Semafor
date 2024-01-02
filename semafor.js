let x = 1;
function changeCollor(button) {
    if (x == 1) {
        button.style.background = "red";
        ++x;
    } else if (x == 2) {
        button.style.background = "green";
        ++x ;
    } else if (x == 3) {
        button.style.background = "yellow";
        x -= 2;
    }
}

setInterval(function() {
    let button = document.getElementById('Pres');
    changeCollor(button);
}, 10000);

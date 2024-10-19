let header = document.getElementById('header');
let nav_mobile = document.getElementById('nav_mobile');
let overlay = document.getElementById('overlay');
let barralateral = false;

function togglebarralateral() {
    barralateral = !barralateral;
    if(barralateral) {
        nav_mobile.style.marginLeft = '0vh';
        nav_mobile.style.animationName = 'barralateral';
        overlay.style.display = 'block';
    }
    else {
        nav_mobile.style.marginLeft = '-100vh';
        nav_mobile.style.animationName = '';
        overlay.style.display = 'none';
    }
}

function closebarralateral () {
    if(barralateral) {
        togglebarralateral();
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 840 && barralateral) 
    {  
        togglebarralateral();
    }
})
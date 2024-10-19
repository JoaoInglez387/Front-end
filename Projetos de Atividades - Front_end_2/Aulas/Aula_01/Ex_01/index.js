const body = document.querySelector('body');
const p = document.createElement('p');
p.textContent = 'Meu teste';
p.style.color = 'black';
body.style.backgroundColor = '#0000';
body.prepend(p);
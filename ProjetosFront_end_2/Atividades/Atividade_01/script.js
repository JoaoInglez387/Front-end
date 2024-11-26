const itensMenu = [
    { nome: 'Início', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html' },
];

const body = document.querySelector('body');
const header = document.createElement('header');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

body.appendChild(header);
header.appendChild(nav);
nav.appendChild(ul);


function ItensNoMenu () {
    const ul = document.querySelector('ul');
    itensMenu.forEach(item => {
        const li = document.createElement('li');
        const link = document.createElement('a');

        link.textContent = item.nome.toUpperCase();
        link.href = item.url;
        link.style.textDecoration = 'none';
        link.style.color = 'white';
        link.style.fontWeight = '600';

        ul.appendChild(li);
        li.appendChild(link);
    });
};

body.style.background = 'url("bg.jpg")';

header.style.backgroundColor = '#23232e';
header.style.fontFamily = 'Arial';
header.style.height = '60px';

ul.style.padding = ' 16px 0';
ul.style.display = 'flex';
ul.style.justifyContent = 'center';
ul.style.alignItems = 'center';
ul.style.gap = ' 20px'

ul.style.listStyleType = 'none';

ItensNoMenu();
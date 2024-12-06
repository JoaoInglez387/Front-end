/*const titulo = document.querySelector('h1');

console.log('innerHTML: ', titulo.innerHTML);
console.log('innerText: ', titulo.innerText);
console.log('textContent: ', titulo.textContent);

titulo.textContent = 'Meu novo mundo com Mundo';
*/

const body = document.querySelector('body');
const ancora = document.createElement('a');

ancora.setAttribute('href', 'https://portal.ifro.edu.br/vilhena');
ancora.setAttribute('target', '_blank')
ancora.textContent = 'IFRO';

ancora.style.color = '#f0f08';
ancora.style.textDecoration = 'none';
ancora.style.fontWeight = 'bold';
ancora.style.fontSize = '20px';

body.appendChild(ancora);

const titulo = document.querySelector('h1');
titulo.remove()

const lista = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

li1.textContent = 'itens-1';
li2.textContent = 'itens-2';
li3.textContent = 'itens-3';

lista.appendChild(li1);
lista.appendChild(li2);
lista.appendChild(li3);

body.appendChild(lista);
'use client';
import { useState } from "react";


export default function Filter() {
    const nomes = ['Wagner', 'João', 'Marcos','Oliveira', 'Hiago']
    const nums = [1,2,3,4,5,6,7,8,9,10];

    const [busca, setBusca] = useState('');
    const nomesBusca = nomes.filter(nome => (nome.toLowerCase().startsWith(busca.toLocaleLowerCase())));


    const pares = nums.filter(num => ( num % 2 == 0));
    console.log(nums);
    console.log(pares);

    return (
        <div>
            <h1>Filter / Filtro</h1>
            <input value={busca} 
            type="text" 
            onChange={ev => setBusca(ev.target.value)}/>
            <ul>
                {nomesBusca.map((nome, i) => (
                    <li key={i}> {i+1} - {nome}</li>
                ))}
            </ul>
        </div>
    );
}
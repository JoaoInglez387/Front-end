'use client';
import { useState } from "react";
import styles from "./filter.module.css";

export default function Filter() {
    const nomes = ['Wagner', 'João', 'Marcos','Oliveira', 'Hiago']
    const nums = [1,2,3,4,5,6,7,8,9,10];

    const [busca, setBusca] = useState('');
    const nomesBusca = nomes.filter(nome => (nome.toLowerCase().startsWith(busca.toLocaleLowerCase())));


    const pares = nums.filter(num => ( num % 2 == 0));
    console.log(nums);
    console.log(pares);

    return (
        <main className={styles.main}>
            <div className={styles.div_pag}>
                <h1 className={styles.titule}>Filter / Filtro</h1>
                <p className={styles.descricao}>Criação de filtros</p>
                <div className={styles.div_busca}>
                    <input value={busca} 
                    type="text" 
                    onChange={ev => setBusca(ev.target.value)} className={styles.input}/>
                    <ul className={styles.lista_busca}>
                        {nomesBusca.map((nome, i) => (
                            <li key={i}> {i+1} - {nome}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>    
    );
}
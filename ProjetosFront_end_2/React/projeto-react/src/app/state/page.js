'use client'
import { useState } from "react";
import styles from "./state.module.css";

export default function State() {
    const [conteudo, setConteudo] = useState('Bom dia');
    const [name, setName] = useState('');
    const [showDiv, setShowDiv] = useState (true);

    const controlarInput = (evento) => {
        setName(evento.target.value);
        console.log(evento.target.value);
    }

    const controlarParagrafo = () => {
        setConteudo('Boa Tarde!');
        console.log('conteudo: ' + conteudo);
    }
    
    return (
        <main className={styles.main}>
            <div className={styles.div_pag}>
                <h1 className={styles.titule}>Usando State</h1>
                {/*  <p>{conteudo}</p>
                <button onClick={controlarParagrafo}>Mudar</button> */}
                <button onClick = {() => { setShowDiv(!showDiv) }} className={styles.botao}> {showDiv ? 'Esconder': 'Mostrar'}</button>
                {showDiv &&
                    (
                        <div className={styles.caixa_print}>
                            <p className={styles.respo}>Nome: <span className={styles.print}>{name}</span></p>
                            <input type="text" onChange={controlarInput} className={styles.caixa}/>
                        </div>
                    )
                }
            </div>
        </main>
    );
}
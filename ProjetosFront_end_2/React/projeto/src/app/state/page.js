'use client'
import { useState } from "react";

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
        <div>
           {/*  <p>{conteudo}</p>
            <button onClick={controlarParagrafo}>Mudar</button> */}
            <button onClick = {() => { setShowDiv(!showDiv) }}> {showDiv ? 'Esconder': 'Mostrar'}</button>
            {showDiv &&
                (
                    <div>
                        <p>Nome: {name}</p>
                        <input type="text" onChange={controlarInput} />
                    </div>
                )
            }
        </div>
    )
}
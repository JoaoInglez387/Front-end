'use client';
import styles from "./page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PageListarMedicos() {
    const [medicos, setMedicos] = useState([]);
    const [showBuscar, setShowBuscar] = useState(false);
    const [consultar, setConsultar] = useState([]);

    const getMedicos = async () => {
        try {
            const respose = await fetch('https://api-clinica-2a.onrender.com/medicos');
            
            if(!respose.ok) {
                throw new Error('Erro ao buscar os medicos: ' + respose.statusText);
            }

            const data = await respose.json();
            setMedicos(data);

        } catch (error) {
            console.log('Ocorreu algum erro: ' + error);  
        }
    }

    const buscarMedicosPorNome = async (nome) => {
        try {
            const respose = await fetch(`https://api-clinica-2a.onrender.com/medicos?nome=${nome}`);
            
            if(!respose.ok) {
                throw new Error('Erro ao buscar os medicos: ' + respose.statusText);
            }

            const data = await respose.json();
            setConsultar(data);

        } catch (error) {
            console.log('Ocorreu algum erro: ' + error);  
        }
    }

    useEffect(() => {
        getMedicos();
        buscarMedicosPorNome('');
    },[]);

    return(
        <main className={styles.contener_master}>
            <section className={styles.contener_lista}>
                <div className={styles.header_list}>
                    <h1 className={styles.titulo_list}>Lista de Médicos</h1>
                    <div className={styles.contener_button}>
                        <button className={styles.StarderButton} onClick={() => setShowBuscar(!showBuscar)}>Buscar os médicos</button>
                    </div>
                    {
                    showBuscar && ( 
                        <>
                            <div className={styles.fundo_pop} onClick={() => setShowBuscar(!showBuscar)}></div>
                            <div className={styles.conteudo_buscar}>
                                <div className={styles.header_buscar}>
                                    <h1 className={styles.titulo_buscar}>Buscar Médicos</h1>
                                    <div className={styles.contener_buscar}>
                                        <input type="text" onChange={(r) => buscarMedicosPorNome(r.target.value)} placeholder="Digite o nome do médico" className={styles.input_buscar}/>
                                    </div>
                                </div>
                                {/* <div className={styles.table_buscar}>
                                    <ul>{consultar.map((consu) => (
                                        <li className={styles.list_buscar} key={consu.id}>{consu.nome}</li>
                                        ))}</ul>
                                </div> */}
                            </div>
                            
                        </>
                    )}
                </div>
               <div className={styles.table_list}>
                    <table className={styles.tabela_geral}>
                        <thead className={styles.header_table}>
                            <tr className={styles.conteudo_header}>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Especialidade</th>
                            </tr>
                        </thead>
                        <tbody className={styles.corpo_table}>{medicos.map((med) => (
                            <tr key={med.id} className={styles.conteudo_table}>
                                <td>{med.id}</td>
                                <td>{med.nome}</td>
                                <td>{med.telefone}</td>
                                <td>{med.email}</td>
                                <td>{med.especialidade}</td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}
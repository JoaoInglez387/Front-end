'use client';
import styles from "./page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PageListarMedicos() {
    const [pacientes, setPacientes] = useState([]);
    const [showBuscar, setShowBuscar] = useState(false);
    const [consultar, setConsultar] = useState([]);

    const url = 'https://api-clinica-2a.onrender.com';

    const buscarPacientes = async () => {
        try {
            const respose = await fetch(`${url}/pacientes`);
            
            if(!respose.ok) {
                throw new Error('Erro ao buscar os dados: ' + respose.statusText);
            }

            const data = await respose.json();
            setPacientes(data);

        } catch (error) {
            console.log('Ocorreu algum erro: ' + error);  
        }
    }

    const buscarPacientesPorNome = async (nome) => {
        try {
            const respose = await fetch(`${url}/pacientes?nome=${nome}`);
            
            if(!respose.ok) {
                throw new Error('Erro ao buscar os dados: ' + respose.statusText);
            }

            const data = await respose.json();
            setConsultar(data);

        } catch (error) {
            console.log('Ocorreu algum erro: ' + error);  
        }
    }

    useEffect(() => {
        buscarPacientes();
        buscarPacientesPorNome('');
    },[]);

    return(
        <main className={styles.contener_master}>
            <section className={styles.contener_lista}>
                <div className={styles.header_list}>
                    <h1 className={styles.titulo_list}>Lista de Pacientes</h1>
                    <div className={styles.contener_button}>
                        <button className={styles.StarderButton} onClick={() => setShowBuscar(!showBuscar)}>Buscar Pacientes</button>
                    </div>
                    {
                    showBuscar && ( 
                        <>
                            <div className={styles.fundo_pop} onClick={() => setShowBuscar(!showBuscar)}></div>
                            <div className={styles.conteudo_buscar}>
                                <div className={styles.header_buscar}>
                                    <h1 className={styles.titulo_buscar}>Buscar Pacientes</h1>
                                    <div className={styles.contener_buscar}>
                                        <input type="text" onChange={(e) => buscarPacientesPorNome(e.target.value)} placeholder="Digite o nome do paciente" className={styles.input_buscar}/>
                                    </div>
                                </div>
                                <div className={styles.table_buscar}>
                                    <ul className={styles.dados_table_buscar}>{consultar.map((consu) => (
                                        <li className={styles.list_buscar} key={consu.id}>{consu.nome}</li>
                                        ))}</ul>
                                </div>
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
                                <th scope="col">CPF</th>
                            </tr>
                        </thead>
                        <tbody className={styles.corpo_table}>{pacientes.map((pac) => (
                            <tr key={pac.id} className={styles.conteudo_table}>
                                <td>{pac.id}</td>
                                <td>{pac.nome}</td>
                                <td>{pac.telefone}</td>
                                <td>{pac.email}</td>
                                <td>{pac.cpf}</td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}
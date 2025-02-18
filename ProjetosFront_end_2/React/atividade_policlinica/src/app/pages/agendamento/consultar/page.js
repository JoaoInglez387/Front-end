'use client';
import styles from "./page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PageListarMedicos() {
    const [buscar, setBuscar] = useState([]);
    const [consultasMedicos, setConsultasMedicos] = useState([]);
    const [consultasPacientes, setConsultasPacientes] = useState([]);
    const [showBuscarMedicos, setShowBuscarMedicos] = useState(false);
    const [showBuscarPacientes, setShowBuscarPacientes] = useState(false);

    const url = 'https://api-clinica-2a.onrender.com';

    const buscaGeral = async () => {
        try {
            const respose = await fetch(`${url}/consultas`);
            
            if(!respose.ok) {
                throw new Error('Erro ao buscar os dados: ' + respose.statusText);
            }

            const data = await respose.json();
            setBuscar(data);

        } catch (error) {
            console.log('Ocorreu algum erro: ' + error);  
        }
    }

    const buscarMedicos = async (nome) => {
        try {
            const respose = await fetch(`${url}/consultas?medico=${nome}`);
            
            if(!respose.ok) {
                throw new Error('Erro ao buscar os dados: ' + respose.statusText);
            }

            const data = await respose.json();
            setConsultasMedicos(data);

        } catch (error) {
            console.log('Ocorreu algum erro: ' + error);  
        }
    }

    const buscarPacientes = async (nome) => {
        try {
            const respose = await fetch(`${url}/consultas?paciente=${nome}`);
            
            if(!respose.ok) {
                throw new Error('Erro ao buscar os dados: ' + respose.statusText);
            }

            const data = await respose.json();
            setConsultasPacientes(data);

        } catch (error) {
            console.log('Ocorreu algum erro: ' + error);  
        }
    }


    useEffect(() => {
        buscaGeral();
        buscarMedicos('');
        buscarPacientes('');
    },[]);

    return(
        <main className={styles.contener_master}>
            <section className={styles.contener_lista}>
                <div className={styles.header_list}>
                    <h1 className={styles.titulo_list}>Lista de Consultas</h1>
                    <div className={styles.contener_button}>
                        <button className={styles.StarderButton} onClick={() => setShowBuscarMedicos(!showBuscarMedicos)}>Buscar por Médicos</button>
                        {
                            showBuscarMedicos && ( 
                                <>
                                    <div className={styles.fundo_pop} onClick={() => setShowBuscarMedicos(!showBuscarMedicos)}></div>
                                    <div className={styles.conteudo_buscar}>
                                        <div className={styles.header_buscar}>
                                            <h1 className={styles.titulo_buscar}>Buscar Médicos</h1>
                                            <div className={styles.contener_buscar}>
                                                <input type="text" onChange={(e) => buscarMedicos(e.target.value)} placeholder="Digite o nome do medico" className={styles.input_buscar}/>
                                            </div>
                                        </div>
                                        <div className={styles.table_buscar}>
                                            <ul className={styles.dados_table_buscar}>{consultasMedicos.map((medico) => (
                                                <li className={styles.list_buscar} key={medico.id}>{medico.nome}</li>
                                                ))}</ul>
                                        </div>
                                    </div>
                                </>
                        )}

                        <button className={styles.StarderButton} onClick={() => setShowBuscarPacientes(!showBuscarPacientes)}>Buscar por Pacientes</button>
                        {
                            showBuscarPacientes && ( 
                                <>
                                    <div className={styles.fundo_pop} onClick={() => setShowBuscarPacientes(!showBuscarPacientes)}></div>
                                    <div className={styles.conteudo_buscar}>
                                        <div className={styles.header_buscar}>
                                            <h1 className={styles.titulo_buscar}>Buscar Pacientes</h1>
                                            <div className={styles.contener_buscar}>
                                                <input type="text" onChange={(p) => buscarPacientes(p.target.value)} placeholder="Digite o nome do paciente" className={styles.input_buscar}/>
                                            </div>
                                        </div>
                                        <div className={styles.table_buscar}>
                                            <ul className={styles.dados_table_buscar}>{consultasPacientes.map((paciente) => (
                                                <li className={styles.list_buscar} key={paciente.id}>{paciente.nome}</li>
                                                ))}</ul>
                                        </div>
                                    </div>
                                </>
                        )}
                    </div>
                </div>
               <div className={styles.table_list}>
                    <table className={styles.tabela_geral}>
                        <thead className={styles.header_table}>
                            <tr className={styles.conteudo_header}>
                                <th scope="col">ID</th>
                                <th scope="col">Médico</th>
                                <th scope="col">Especialidade</th>
                                <th scope="col">Paciente</th>
                                <th scope="col">Tipo</th>
                            </tr>
                        </thead>
                        <tbody className={styles.corpo_table}>{buscar.map((buscar) => (
                            <tr key={buscar.id} className={styles.conteudo_table}>
                                <td>{buscar.id}</td>
                                <td>{buscar.medico}</td>
                                <td>{buscar.especialidade}</td>
                                <td>{buscar.paciente}</td>
                                <td>{buscar.tipo}</td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}
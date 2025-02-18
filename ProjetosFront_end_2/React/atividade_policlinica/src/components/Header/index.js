'use client';
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header () {
    const [ showMenu, setShowMenu ] = useState(true);

    return (
        <header className = {styles.header}>
            <div className={styles.conteudo_header}>
                <div className={styles.logoContener}>
                    <Image className={styles.logo} src="/logo_MedVital.png" width={130} height={43} alt="Logo da Clinica MediVital" />
                </div>

                <nav className={styles.navbar}>
                    <ul className = {styles.nav_itens}>
                        <li className={styles.links_itens}><Link href='/'>Home</Link></li>
                        <li className={styles.links_itens}>Médicos
                            <ul className={styles.submenu}>
                                <li className={styles.links_subemenu}><Link href='/pages/medicos/listar'>Listar</Link></li>
                                <li className={styles.links_subemenu}><Link href='/'>Adicionar</Link></li>
                                <li className={styles.links_subemenu}><Link href='/'>Editar</Link></li>
                                <li className={styles.links_subemenu}><Link href='/'>Excluir</Link></li>
                            </ul>
                        </li>
                        <li className={styles.links_itens}>Pacientes
                            <ul className={styles.submenu}>
                                <li className={styles.links_subemenu}><Link href='/pages/pacientes/listar'>Listar</Link></li>
                                <li className={styles.links_subemenu}><Link href='/'>Adicionar</Link></li>
                                <li className={styles.links_subemenu}><Link href='/'>Editar</Link></li>
                                <li className={styles.links_subemenu}><Link href='/'>Excluir</Link></li>
                            </ul>
                        </li>
                        <li className={styles.links_itens}>Agendamento
                            <ul className={`${styles.submenu} ${styles.tamanh_g}`}>
                                <li className={styles.links_subemenu}><Link href='/pages/agendamento/consultar'>Listar Consultas</Link></li>
                                <li className={styles.links_subemenu}><Link href='/'>Agendar Consultas</Link></li>
                                <li className={styles.links_subemenu}><Link href='/'>Editar Consultas</Link></li>
                                <li className={styles.links_subemenu}><Link href='/'>Cancelar</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <div className={styles.button_header}>
                    <button className={styles.StarderButton}>Agendar consulta</button>
                </div>
            </div>
        </header>
    );
};
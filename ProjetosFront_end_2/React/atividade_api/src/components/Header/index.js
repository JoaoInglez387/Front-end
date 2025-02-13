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
                <div className={styles.logo}>
                    <Image src="/img/logo_MedVital.png" width={150} height={85} alt="Logo Cantinho do Sabor" />
                </div>

                <nav className={styles.navbar}>
                    <ul className = {styles.nav_itens}>
                        <li className={styles.links_itens}><Link href='/'>Home</Link></li>
                        <li className={styles.links_itens}>Médicos
                        {/* <ul className={styles.submenu}>
                            <li>Test</li>
                        </ul> */}
                        </li>
                        <li className={styles.links_itens}>Pacientes</li>
                        <li className={styles.links_itens}>Agendamento</li>
                    </ul>
                </nav>

                <div className={styles.button_header}>
                    <button className={styles.StarderButton}>Agendar consulta</button>
                </div>
            </div>
        </header>
    );
};
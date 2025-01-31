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
                </div>

                <nav>
                    <ul className = {styles.navbar}>
                        <li className={styles.links_itens}><Link href='/'>Home</Link></li>
                        <li className={styles.links_itens}><Link href='/about'>Sobre</Link></li>
                        <li className={styles.links_itens}><Link href='/contact'>Contato</Link></li>
                        <li className={styles.links_itens}><Link href='/listas'>Lista</Link></li>
                    </ul>
                </nav>

                <button className={styles.button_mobli}></button>
            </div>
        </header>
    );
};
'use client';
import styles from "./header.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Header () {
    const [ showMenu, setShowMenu ] = useState(true);
    return (
        <header className = {styles.header}>
            <button className = {styles.button} onClick={() => setShowMenu(!showMenu)}>Clique</button>
            {
                showMenu &&
                <nav className = {styles.nav}>
                    <ul className = {styles.list}>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>Sobre</Link></li>
                        <li><Link href='/contact'>Contato</Link></li>
                        <li><Link href='/listas'>Lista</Link></li>
                        <li><Link href='/props'>Props</Link></li>
                        <li><Link href='/filter'>Filter</Link></li>
                    </ul>
                </nav>
            }
        </header>
    );
};
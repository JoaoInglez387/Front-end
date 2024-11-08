import styles from "./header.module.css";
import Link from "next/link";

export default function Header () {
    return (
        <header className = {styles.header}>
            <nav className = {styles.nav}>
                <ul className = {styles.list}>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/sobre'>Sobre</Link></li>
                    <li><Link href='/contato'>Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
};
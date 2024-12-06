'use client';
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import { motion, AnimatePresence, px } from "framer-motion";

export default function HeaderNav() {

    const [showMenu, setShowMenu] = useState(false);
    const [openMobile, setOpenMobile] = useState(false);

    useEffect(() => {
        const headerMobile = () => {
            setOpenMobile(window.innerWidth <= 400);
        };
 
        window.addEventListener("resize", headerMobile);
        headerMobile();

        return () => window.removeEventListener("resize", headerMobile);

    },[]);
    
    return (
        <header className={styles.header}>
            <div className={styles.conteudo_Header}>
                <div className={styles.logo}>
                    <Image src="/img/logo_queijini.png" width={100} height={100} alt="Logo Cantinho do Sabor" />
                </div>

                <button className={styles.button_mobli} onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? <FaX /> : <FaBars />}
                </button>
            </div>
            <AnimatePresence>
                {showMenu && (
                    <motion.nav className={styles.navbar}
                        key="navbar"
                        initial={{ opacity: 0, y: openMobile ? 0 : -70, x: openMobile ? 0 : -70}}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 5, y: openMobile ? 0 : -70, x: openMobile ? 0 : -70}}
                        transition={{ duration: 0.4 }}
                    >
                        <div className={styles.menu}>
                            <ul className={styles.nav_itens}>
                                <li className={styles.item_link}><Link href="/">Home</Link></li>
                                <li className={styles.item_link}><Link href="/menu">Menu</Link></li>
                                <li className={styles.item_link}><Link href="/about">Sobre</Link></li>
                                <li className={styles.item_link}><Link href="/contact">Contanto</Link></li>
                            </ul>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
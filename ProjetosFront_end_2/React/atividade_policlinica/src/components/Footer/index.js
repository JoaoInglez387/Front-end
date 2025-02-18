'use client';
import styles from "./footer.module.css";

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_copyright_sytle}>
                <p id={styles.footer_copyright}>© 2025 Clinica MedVital. Todos os direitos são reservados.</p>
            </div>
        </footer>
    );
}
import styles from "./page.module.css";
import Link from "next/link";

export default function PageListarMedicos() {
    return(
        <main className={styles.contener_master}>
            <section className={styles.contener_lista}>
                <div className={styles.header_list}>
                    <h1 className={styles.titulo_list}>Lista de Médicos</h1>
                    <button className={styles.StarderButton}>Buscar os médicos</button>
                </div>
                <div className={styles.table_list}>
                    <table>
                        <thead>
                            <tr key="">
                                <th></th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </section>
        </main>
    );
}
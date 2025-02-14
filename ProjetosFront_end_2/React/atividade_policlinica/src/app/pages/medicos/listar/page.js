import styles from "./page.module.css";
import Link from "next/link";

export default function PageListarMedicos() {
    return(
        <main className={styles.contener_master}>
            <section className={styles.contener_lista}>
                <div className={styles.header_list}>
                    <h1 className={styles.titulo_list}>Lista de Médicos</h1>
                    <div className={styles.contener_button}>
                        <button className={styles.StarderButton}>Buscar os médicos</button>
                    </div>
                </div>
                <div className={styles.table_list}>
                    <table className={styles.tabela_geral}>
                        <thead className={styles.header_table}>
                            <tr className={styles.conteudo_table}>
                                <th scope="col" className={styles.colun_table}>ID</th>
                                <th scope="col" className={styles.colun_table}>Nome</th>
                                <th scope="col" className={styles.colun_table}>Telefone</th>
                                <th scope="col" className={styles.colun_table}>Email</th>
                                <th scope="col" className={styles.colun_table}>Especialidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}
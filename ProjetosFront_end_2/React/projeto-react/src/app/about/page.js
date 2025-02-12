import styles from "./about.module.css";

export default function About() {
  return (
    <main className={styles.main}>
        <div className={styles.div_pag}>
          <h1 className={styles.titule}>Sobre</h1>
          <div className={styles.div_p}>
            <p className={styles.paragrafo}> Minha segunda página é <strong id={styles.paragrafoUnico}>sobre o projeto</strong></p>
          </div>
        </div>
    </main>
  );
}

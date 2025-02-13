import Image from "next/image";
import styles from "./page.module.css";

export default function PageHome() {
  return (
    <main className={styles.contener_master}>
        <section className={styles.contener_banner}>
            <div className={styles.banner}>
                <img className={styles.img_banner} src="/img/banner_home.jpg" alt="Banner do Home MediVital"/>
            </div>
        </section>
        <section className={styles.page_contener}>
            <div className={styles.text_inicio}>
                <h1 className={styles.titulo_text}>Bem-vindo à CLÍNICA MEDVITAL</h1>
                <p className={styles.conteudo_text}>Onde excelência e cuidado se unem para promover sua saúde. Nossa equipe de especialistas, com o apoio das mais avançadas tecnologias, oferece um atendimento personalizado e preciso. Na MedVital, acreditamos que o cuidado com a saúde vai além do tratamento – é um compromisso contínuo com o seu bem-estar e o de sua família.</p>
                <button className={styles.StarderButton}>Agendar consulta</button>
            </div>
        </section>
    </main>
  );
}

import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const nome = 'João Gabriel Soares Inglez';
  return (
    <main className={styles.main}>
        <div className={styles.div_pag}>
          <h1 className={styles.titule}>Home</h1>
          <p className={styles.subDescri}>Paragráfo da página principal</p>
          <div className={styles.div_img}>
            <Image className={styles.imagem} src="/images/natureza.jpg" alt="Imagem de Natureza" width={600} height={400}/>
            <p className={styles.autor}>Autor: {nome}</p>
          </div>
        </div>
    </main>
  );
}

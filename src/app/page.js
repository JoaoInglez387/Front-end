/* import Image from "next/image"; */
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const nome = 'João';
  return (
    <div>
      <h1>Página Principal</h1>
      <p>Paragráfo da página principal</p>
      <p>Autor: {nome}</p>
      <Image className = {styles.imagem} src="/images/natureza.jpg" alt="natureza" width={600} height={400}/>
    </div>
  );
}

import styles from "./listas.module.css";

export default function Listas() {
    const racas = ["Vira-lata", "Pit-bull", "Shitsu", "Labrador"]

    const racasObj = [
        {
            id:1,
            raca:"Vira-lata",
        },
        {
            id:2,
            raca:"Pit-bull",
        },
        {
            id:3,
            raca:"Shitsu",
        },
        {
            id:4,
            raca:"labrador",
        }
    ]

    return(
        <main className={styles.main}>
            <div className={styles.div_pag}>
                <h1 className={styles.titule}>Listas</h1>
                <p className={styles.descricao}>Criação de listas comuns e de objetos</p>
                
                <div className={styles.lista}>
                    <h2 className={styles.subTitulos}>Lista Comum</h2>
                    <p className={styles.objeto}>Objeto: Raça {racasObj[0].raca}</p>
                    <ul className={styles.lista_simples}>
                        {racas.map((raca, i)=> (
                            <li key={i}> {i+1} - {raca}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.lista}>
                    <h2 className={styles.subTitulos}>Lista de Objetos </h2>
                    {racasObj.map((racaObj)=> (
                        <div key={racaObj.id}>
                            <h3>{racaObj.id}</h3>
                            <p>{racaObj.raca}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
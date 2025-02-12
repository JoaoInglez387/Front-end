import Card from "@/components/Card";
import styles from "./props.module.css";

export default function Props() {
    const dogs = [
        {
            id: 1,
            nome: 'Perigo',
            raca: 'Vira-lata',
            peso: 1.5,
            cor: 'Branco'
        },
        {
            id: 2,
            nome: 'Bob',
            raca: 'Pit-bull',
            peso: 35,
            cor: 'Marrom'
        },
        {
            id: 1,
            nome: 'Mel',
            raca: 'Pug',
            peso: 8,
            cor: 'Preto'
        },
    ]

    return (
        <main className={styles.main}>
            <div className={styles.div_pag}>
                <h1 className={styles.titule}>Props</h1>
                <p className={styles.subDescri}>Criação de componetes Card</p>
                <div className={styles.card_list}>
                    {dogs.map((dog) => (
                        <Card key={dog.id} id={dog.id} nome={dog.nome} raca={dog.raca} peso={dog.peso} cor={dog.cor} />
                    ))}
                </div>
            </div>
        </main>
    );
}
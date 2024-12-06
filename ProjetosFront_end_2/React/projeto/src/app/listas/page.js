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
        <div>
            <h1>Listas</h1>
            <p>{racasObj[0].raca}</p>
            <h1>lista comum</h1>
            <ul>
                {racas.map((raca, i)=> (
                    <li key={i}> {i+1} - {raca}</li>
                ))}
            </ul>
            
            <div>
                <h2>lista de Objetos </h2>
                {racasObj.map((racaObj)=> (
                    <div key={racaObj.id}>
                        <h3>{racaObj.id}</h3>
                        <p>{racaObj.raca}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
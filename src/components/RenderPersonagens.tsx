interface PersonagensProps {
    personagens: any[]
}

export function RenderPersonagens(props: PersonagensProps) {
    return (
        <ul>
            {props.personagens.map((personagem: any) => {
                return <li key={personagem.name}>{personagem.name}</li>
            })}
        </ul>
    )
}
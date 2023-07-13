interface PersonagemProps {
  personagens: any[];
  selecionar: (personagem: any) => void;
}

export function Personagens(props: PersonagemProps) {
  return (
    <div className="w-full flex justify-center">
      {/* <RenderPersonagens personagens={props.personagens} /> */}

      <table className="w-3/5 text-xl opacity-70 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-zinc-900">
            <th className="p-2 font-black">Nome</th>
            <th className="p-2 font-black">Altura</th>
            <th className="p-2 font-black">Peso</th>
            <th className="p-2 font-black">Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.personagens.map((p: any, i: number) => (
            <tr
              key={p.name}
              className={`
              text-center
              ${i % 2 === 0 ? "bg-zinc-700" : "bg-zinc-800"}
          `}
            >
              <td className="p-2">{p.name}</td>
              <td className="p-2">{p.height}</td>
              <td className="p-2">{p.mass}</td>
              <td className="p-2">
                <button className="botao" onClick={() => props.selecionar(p)}>
                  Filmes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

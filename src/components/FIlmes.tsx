interface FilmesProps {
    filmes: any[];
    voltar: () => void;
  }
  
  export function Filmes(props: FilmesProps) {
    return (
      <div className="w-full flex flex-col items-center gap-5 justify-center">
        <table className="w-3/5 text-xl opacity-70 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-zinc-900">
              <th className="p-2 font-black">Título</th>
              <th className="p-2 font-black">Número do episodio</th>
              <th className="p-2 font-black">Data</th>
            </tr>
          </thead>
          <tbody>
            {props.filmes.map((filme: any, i: number) => (
              <tr
                key={filme.title}
                className={`
                text-center
                ${i % 2 === 0 ? "bg-zinc-700" : "bg-zinc-800"}
            `}
              >
                <td className="p-2">{filme.title}</td>
                <td className="p-2">{filme.episode_id}</td>
                <td className="p-2">{new Date(filme.release_date).toLocaleDateString('pt-BR')}</td>
              </tr>

            ))}
          </tbody>
        </table>

        <button className="p-2 bg-sky-600 text-lg rounded-lg" onClick={props.voltar}>Voltar</button>
      </div>
    );
  }
  
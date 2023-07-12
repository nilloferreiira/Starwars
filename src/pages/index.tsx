import { Background } from "@/components/Background";
import { Personagens } from "@/components/Personagens";
import useStarwars from "@/data/hooks/useStarwars";

export default function PaginaStarwars() {
  const { processando, personagens, obterPersonagens } = useStarwars();
  
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      
      <Background />

      {processando ? (
        <div>Processando...</div>
      ) : personagens.length > 0 ?(
        <Personagens personagens={personagens}  />
      ) : (
        <div>Nenhum personagem</div>
      )}

<button className="bg-sky-600 p-2 rounded-lg" onClick={obterPersonagens}>
        Obter
      </button>

    </div>
  );
}

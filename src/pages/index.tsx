import { Background } from "@/components/Background";
import { Filmes } from "@/components/FIlmes";
import { Personagens } from "@/components/Personagens";
import useStarwars from "@/data/hooks/useStarwars";

export default function PaginaStarwars() {
  const { processando, personagens, filmes, voltar, selecionarPersonagem } = useStarwars();
  
  return (
    
    <div className="flex flex-col justify-center items-center h-screen relative">
      <Background />

      {processando ? (
        <div>Processando...</div>
      ) : filmes.length > 0 ?(
        <Filmes filmes={filmes} voltar={voltar}/>
        ) : personagens.length > 0 ?(
        <Personagens personagens={personagens} selecionar={selecionarPersonagem} />
      ) : (
        <div>Nenhum personagem</div>
      )}


    </div>
  );
}

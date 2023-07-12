import { RenderPersonagens } from "./RenderPersonagens";

interface PersonagemProps {
    personagens: any[];
}

export function Personagens(props: PersonagemProps) {

  return (
    <div>
      <RenderPersonagens personagens={props.personagens} />
    </div>
  );
}

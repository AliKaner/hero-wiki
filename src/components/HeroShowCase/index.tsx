import { HeroType } from "../../shared/types";
import { HeroCard } from "../HeroCard";

export function HeroShowCase({ heros }: { heros: HeroType[] }) {
  return (
    <div className="flex flex-wrap w-full md:w-3/4 gap-4 items-center justify-center ">
      {heros.map((hero) => (
        <HeroCard key={hero.id} id={parseInt(hero.id)} hero={hero} />
      ))}
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { HeroType } from "../../shared/types";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function HeroCard({ hero, id }: { hero: HeroType; id: number }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex bg-action flex-col w-64 h-96"
      onClick={() => navigate(`/hero/${id}`)}
    >
      <LazyLoadImage
        className="w-64 h-72"
        src={hero.image.url}
        loading="lazy"
      />
      <div className="text-center text-2xl font-comic text-white h-24">
        {hero.name}
        <div>{hero.biography.publisher}</div>
      </div>
    </div>
  );
}

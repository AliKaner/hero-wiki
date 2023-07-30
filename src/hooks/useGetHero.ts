import { useQuery } from "react-query";
import { API_ROOT } from "../shared/constants";
import { GetHeroQuery } from "../shared/types";

const GET_HERO_KEY = "GET_HERO";

export const useGetHero = (query: GetHeroQuery) => {
  const { id } = query;

  const fetchHero = async () => {
    const url = new URL(API_ROOT + `/${id}`);

    return fetch(url.href).then((res) => res.json());
  };

  const getHero = useQuery([GET_HERO_KEY, id], fetchHero);

  return { ...getHero };
};

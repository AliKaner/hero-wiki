import { useQuery } from "react-query";
import { API_ROOT } from "../shared/constants";
import { GetHerosQuery, HeroType } from "../shared/types";

const GET_HEROS_KEY = "GET_HEROS";

export const useGetHeros = (query: GetHerosQuery) => {
  const { search } = query;

  const fetchHeros = async () => {
    const url = new URL(API_ROOT + `/search/${search}`);
    return fetch(url.href).then((res) => res.json());
  };

  const getHeros = useQuery<{
    response: string;
    results_for: string;
    results: HeroType[];
  }>([GET_HEROS_KEY, search], fetchHeros);
  console.log(getHeros.data);
  const results = getHeros.data?.results || [];

  return results;
};

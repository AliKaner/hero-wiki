import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import { Body } from "../../components/Body";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import HomeButton from "../../components/HomeButton";
import { SearchBar } from "../../components/SearchBar";
import { HeroShowCase } from "../../components/HeroShowCase";
import { useGetHeros } from "../../hooks/useGetHeros";
import { Footer } from "../../components/Footer";
import ThemeSwitch from "../../components/ThemeSwitch";

export function HomePage() {
  const [params] = useSearchParams();
  const initialSearchValue = params.get("search") ?? "";
  const [search, setSearch] = useState(initialSearchValue);
  const debouncedSearch = useDebounce(search, 500);

  const heros = useGetHeros({ search: debouncedSearch });

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Layout>
      <Header>
        <HomeButton />
        <div className="flex flex-1 flex-row justify-between">
          <SearchBar
            value={search}
            onChange={onSearchChange}
            onClear={() => setSearch("")}
          />
          <ThemeSwitch />
        </div>
      </Header>
      <Body>
        <HeroShowCase heros={heros ?? []} />
      </Body>
      <Footer>
        <p>Made in ali's room</p>
        <a className="text-2xl" href="https://github.com/AliKaner/hero-wiki">
          u can look to repo 2
        </a>
      </Footer>
    </Layout>
  );
}

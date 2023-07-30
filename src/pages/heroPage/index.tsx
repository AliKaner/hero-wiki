import { useParams } from "react-router-dom";
import { HeroType } from "../../shared/types";
import { useState, useEffect } from "react"; // Import useEffect
import { useGetHero } from "../../hooks/useGetHero";
import { Body } from "../../components/Body";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import HomeButton from "../../components/HomeButton";
import { PowerStats } from "../../components/PowerStats";
import { Footer } from "../../components/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ThemeSwitch from "../../components/ThemeSwitch";
export function HeroPage() {
  const { id } = useParams();
  const [hero, setHero] = useState<HeroType | null>(null);

  const { data, isLoading, isError } = useGetHero({
    id: String(id),
  });

  useEffect(() => {
    if (data) {
      setHero(data);
    }
  }, [data]);

  return (
    <Layout>
      <Header>
        <div className="flex flex-1 flex-row justify-between">
          <HomeButton />
          <ThemeSwitch />
        </div>
      </Header>
      <Body>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error occurred while fetching data.</div>
        ) : hero ? (
          <div className="flex flex-col font-comic rounded bg-action ">
            <div className=" text-2xl ml-24 text-white">{hero.name}</div>
            <div className="flex flex-col xs:flex-row  ">
              <div className="bg-action">
                <LazyLoadImage
                  className="w-72"
                  src={hero.image.url}
                  loading="lazy"
                />
                <div className="text-center items-center text-action">
                  Stats
                  <PowerStats stats={hero.powerstats} />
                </div>
              </div>
              <div className="w-72 text-xl bg-action text-white text-center">
                <h2 className="text-4xl">Appearance</h2>
                <div className="text-left pl-2">
                  <p>race: {hero.appearance.race}</p>
                  <div>
                    <span className="text-white">eye color: </span>
                    <span
                      className={`text-${hero.appearance[
                        "eye-color"
                      ].toLowerCase()}-400`}
                    >
                      {hero.appearance["eye-color"]}
                    </span>
                  </div>
                  <p>gender: {hero.appearance.gender}</p>
                  <div>
                    <span className="text-white">hair color: </span>
                    <span
                      className={`text-${hero.appearance[
                        "hair-color"
                      ].toLowerCase()}-400`}
                    >
                      {hero.appearance["hair-color"]}
                    </span>
                  </div>

                  <p>height: {hero.appearance.height[1]}</p>
                  <p>weight: {hero.appearance.weight[1]}</p>
                </div>
                <h2 className="text-4xl">Biography</h2>
                <div className="text-left pl-2">
                  <p>full name: {hero.biography["full-name"]}</p>
                  {hero.biography.alignment ? (
                    <p>alter ego: {hero.biography.alignment}</p>
                  ) : null}
                  {hero.biography.aliases[0] !== "-" ? (
                    <div>
                      <p>aliases:</p>
                      <div>
                        {hero.biography.aliases.map((ally) => (
                          <p className="pl-8 text-calm">{ally}</p>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  <p>first appearance: {hero.biography["place-of-birth"]}</p>
                  <p>publisher: {hero.biography.publisher}</p>
                  <p>alignment: {hero.biography.alignment}</p>
                </div>
                <h2 className="text-4xl">work</h2>
                <div className="text-left">
                  <p>ccupation: {hero.work.occupation}</p>
                  <p>ccupation: {hero.work.base}</p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </Body>
      <Footer>
        <p>Made in ali's room</p>
        <a href="https://github.com/AliKaner/hero-wiki">u can look to repo 2</a>
      </Footer>
    </Layout>
  );
}

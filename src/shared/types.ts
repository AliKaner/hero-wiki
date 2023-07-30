export type HeroType = {
  id: string;
  name: string;
  powerstats: PowerstatsType;

  biography: {
    "full-name": string;
    "alter-ego": string;
    aliases: string[];
    "place-of-birth": string;
    "first-appearance": string;
    publisher: string;
    alignment: string;
  };
  appearance: {
    gender: string;
    race: string;
    height: [string, string];
    weight: [string, string];
    "eye-color": string;
    "hair-color": string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    "group-affiliation": string;
    relatives: string;
  };
  image: {
    url: string;
  };
};

export type PowerstatsType = {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
};

export type GetHeroQuery = {
  id: string;
};

export type GetHerosQuery = {
  search: string;
};

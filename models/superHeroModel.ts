export interface SuperHero {
  superHeroId: number;
  superHeroName: string;
  alias: string;
  superHeroAge: number;
  publisher: string;
}

let superHeroes: SuperHero[] = [];

export function addSuperHero(superhero: SuperHero): SuperHero {
  superHeroes.push(superhero);
  return superhero;
}

export function getAllSuperHero(): SuperHero[] {
  return superHeroes;
}

export function deleteSuperHero(superHeroId: number): void {
  const position = superHeroes.findIndex(
    (hero: SuperHero) => hero.superHeroId === superHeroId
  );

  if (position >= 0) {
    superHeroes.splice(position, 1);
  }
}

export function updateSuperHero(superHeroId:number, newSuperHeroProps: Partial<SuperHero>): void {
  const hero = superHeroes.find((hero: SuperHero) => hero.superHeroId === superHeroId);

  if (hero) {
    const heroUpdated = {...hero, ...newSuperHeroProps, superHeroId}
    const newHeroList = superHeroes.filter((hero: SuperHero) => hero.superHeroId !== superHeroId);
    newHeroList.push(heroUpdated);
    superHeroes = newHeroList
  }
}


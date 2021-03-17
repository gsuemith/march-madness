// import { PUBLIC_KEY, PRIVATE_KEY } from './keys'

const PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY;

export const URL = 'https://api.sportsdata.io/v3/cbb/scores/json/teams?key=4570cd5e85c0439cb05471055ea02f40'

export const getURL = () => {
  return URL;
}


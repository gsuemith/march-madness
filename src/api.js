export const URL = 'https://api.sportsdata.io/v3/cbb/scores/json/teams'

export const getURL = () => {
  return URL + `?key=${process.env.REACT_APP_SPORTS_IO_KEY}`;
}


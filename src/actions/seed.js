const { ceil, log2, random } = Math

export default function seed(ids){
  const powerOf2 = ceil(log2(ids.length))
  const matchupList = [];

  let upperIndex = 2**(powerOf2 - 1);
  let lowerIndex = upperIndex - 1;

  while(lowerIndex >= 0){
    matchupList.unshift([
      ids[lowerIndex], 
      ids[upperIndex] || 'bye'
    ])
    
    //upper index allowed to go out of Bounds
    //undefined will result in bye match ups
    upperIndex++;
    lowerIndex--;
  }

  return matchupList;
}

// elo rating simulator
export const whoWins = (ratingA, ratingB) => {
  const expectedA = 1/(1 + 10**((ratingB - ratingA)/400))
  
  return random() < expectedA;
}
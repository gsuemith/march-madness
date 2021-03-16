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
export const probability = (a, b) => 1/(1 + 10**((b - a)/400));
export const whoWins = (ratingA, ratingB) => {
  const expectedA = probability(ratingA, ratingB);
  
  return random() < expectedA;
}
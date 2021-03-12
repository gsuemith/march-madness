const { ceil, log2 } = Math

export default function matchups(ids){
  const powerOf2 = ceil(log2(ids.length))
  const matchupList = [];

  let upperIndex = 2**(powerOf2 - 1);
  let lowerIndex = upperIndex - 1;

  while(lowerIndex >= 0){
    matchupList.push([
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
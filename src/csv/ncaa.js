const ncaaArray = [
"Auburn","Duke","Houston","Florida",
"Michigan State","Alabama","Tennessee","St. John's",
"Iowa State","Wisconsin","Kentucky","Texas Tech",
"Texas A&M","Arizona","Purdue","Maryland",
"Michigan","Oregon","Clemson","Memphis",
"Ole Miss","BYU","Illinois","Missouri",
"Marquette","Saint Mary's","UCLA","Kansas",
"Louisville","Mississippi State","Gonzaga","Connecticut",
"Creighton","Baylor","Georgia","Oklahoma",
"New Mexico","Vanderbilt","Utah State","Arkansas",
"North Carolina","VCU","Texas","Drake",
"UC San Diego","Liberty","McNeese State","Colorado State",
"Yale","Akron","High Point","Grand Canyon",
"Lipscomb","Montana","Troy","UNCW",
"Bryant","Robert Morris","Wofford","Omaha",
"Alabama State","American","SIUE","Norfolk State",
"St. Francis (PA)","Mount St. Mary's","bye","bye",
"bye","bye","bye","bye",
"bye","bye","bye","bye",
"bye","bye","bye","bye",
"bye","bye","bye","bye",
"San Diego State","bye","Xavier","bye"
]


const snake = arr => arr.map((item, index, arr) => {
  const reversed = index % 8;
  if(reversed > 3){
    return arr[index + 11 - 2*reversed] //+3 +1 -1 -3, 4 5 6 7
  }
  return item;
})

export const ncaa = snake(ncaaArray)
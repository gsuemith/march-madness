const ncaaArray = [
"Gonzaga","Baylor","Illinois","Michigan",
"Iowa","Ohio State","Houston","Alabama",
"Kansas","Arkansas","West Virginia","Texas",
"Virginia","Purdue","Oklahoma State","Florida State",
"Creighton","Villanova","Tennessee","Colorado",
"USC","Texas Tech","San Diego State","BYU",
"Oregon","Florida","Clemson","Connecticut",
"Oklahoma","North Carolina","Loyola-Chicago","LSU",
"Missouri","Wisconsin","Georgia Tech","St Bonaventure",
"VCU","Virginia Tech","Rutgers","Maryland",
"Wichita State","Utah State","Syracuse","Michigan State",
"UC Santa Barbara","Winthrop","Oregon State","Georgetown",
"Ohio","North Texas","Liberty","UNC Greensboro",
"E. Washington","Colgate","Morehead State","Abilene Christian",
"Grand Canyon","Oral Roberts","Cleveland State","Iona",
"Norfolk State","Hartford","Drexel","Mount St Mary's",
"Appalachian State","bye","bye","Texas Southern",
"bye","bye","bye","bye",
"bye","bye","bye","bye",
"bye","bye","bye","bye",
"bye","bye","bye","bye",
"Drake","bye","bye","UCLA"
]


const snake = arr => arr.map((item, index, arr) => {
  const reversed = index % 8;
  if(reversed > 3){
    return arr[index + 11 - 2*reversed] //+3 +1 -1 -3, 4 5 6 7
  }
  return item;
})

export const ncaa = snake(ncaaArray)
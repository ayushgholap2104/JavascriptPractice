let myObj = {
  'js':'javascript',
  'py': 'python',
  'sql': 'structured query language'
}

for (const key in myObj){
  console.log(`${key} is a shortcut of ${myObj[key]}`)
}

// Similary for arrays
let myArr = ["Python","C++","Java","Javascript"]

for (const arr in myArr){
  console.log(`${arr}:${myArr[arr]}`)
}

// For myMaps
// let myMaps = new Map()
// console.log(typeof myMap)
// myMaps.set('IN','INDIA')
// myMaps.set('IN','INDIA')
// myMaps.set('RUS','RUSSIA')
// myMaps.set('CHI','CHINA')

// for (const key in myMaps){
//   console.log(key)
// }
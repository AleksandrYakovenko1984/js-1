const arr = [
  { name: 'Albert', surname: 'Einstein', born: 1879, dead: 1955, id: 1 },
  { name: 'Isaac', surname: 'Newton', born: 1643, dead: 1727, id: 2 },
  { name: 'Galileo', surname: 'Galilei', born: 1564, dead: 1642, id: 3 },
  { name: 'Pierre', surname: 'Curie', born: 1859, dead: 1934, id: 4 },
  { name: 'Marie', surname: 'Curie', born: 1867, dead: 1934, id: 4 },
  { name: 'Johannes', surname: 'Kepler', born: 1571, dead: 1630, id: 5 },
  { name: 'Nicolaus', surname: 'Copernicus', born: 1473, dead: 1543, id: 6 },
  { name: 'Max', surname: 'Planck', born: 1858, dead: 1947, id: 7 },
  { name: 'Katherine', surname: 'Blodgett', born: 1898, dead: 1979, id: 8 },
  { name: 'Ada', surname: 'Lovelace', born: 1815, dead: 1852, id: 9 },
  { name: 'Sarah E.', surname: 'Goode', born: 1855, dead: 1905, id: 10 },
  { name: 'Lise', surname: 'Meitner', born: 1878, dead: 1968, id: 11 },
  { name: 'Hanna', surname: 'Hammarström', born: 1829, dead: 1909, id: 12 },
]
// 1
let result = arr.filter((obj) => obj.born >= 1800 && obj.born < 1900)
console.log(result);
// 2
//
// result = arr.reduce((acc, obj) => {
//      console.log(obj.dead - obj.born);
//      let age = obj.dead - obj.born
//     // acc += (obj.dead - obj.born)
//     return acc +age
// }, 0)
// console.log(result);
result = arr.reduce((acc, obj) => (acc +=obj.dead - obj.born)
, 0)
         
console.log(result);
// 3
result = arr.sort((a, b) => (a.surname + ' ' + a.name).localeCompare(b.surname + ' ' + b.name)
 )
    // console.log(a.surname + ' ' + a.name);
console.log(result);
// 4
result = arr.sort((a, b) => (a.dead - a.born) - (b.dead -b.born)
)
console.log(result);
result.forEach((el) => console.log(el.dead - el.born))
//  5
result = arr.filter((obj) =>  !(obj.born >= 1400 && obj.born < 1700))
console.log(result);
// 6
result = arr.sort((a, b) => a.born - b.born)[arr.length -1]

console.log(result);
// 7
result = arr.find((obj) => obj.name + ' ' + obj.surname === 'Albert Einstein').born
        

console.log(result);

const classes = document.getElementsByClassName('class1234');
console.log(classes)

const tags = document.getElementsByTagName('h1');
console.log(tags)

const ids = document.getElementById('id123');
console.log(ids)
ids.innerHTML = '<b>hello</b>123123123123123123123123123123123'
// array.method(callback)

// callback = () => { }


// array.forEach() => undefined
const numbers = [1, 2, 3, 4, 5]
// console.log(numbers)

const newArr = []
const forEachResult = numbers.forEach((num) => {
    // console.log(num + 1);
     newArr.push(num + 1)
    return num
})
// array.map() => всегда возвращает массив той же длины что и исходный
const mapResult = numbers.map((item) =>{
// console.log(item);
    return item + 1
})
// console.log(mapResult);
// console.log(mapResult)
// console.log('исходный массив', numbers)
// console.log(mapResult === numbers)

// array.filter() => только тех, что прошли условия
const filterResult = numbers.filter((elem) => {
    // console.log(elem);
    return elem >2 && elem <4
})
// array.find() => только один элемент по условию
const findResult = numbers.find((i) => {
    const condition = i >2 || i > 5
return condition
})
// console.log(findResult);
//  array.reduce() => что угодно
const reduceResultArray = numbers.reduce((acc, elem) => {
    // console.log(acc, elem);
    acc.push(elem)
    return acc
}, [])
// console.log(reduceResultArray);
// console.log(reduceResultArray === numbers)

const reduceResultObject = numbers.reduce((newObject, number) => {
    // console.log(newObject, number);
    newObject[number] = number
    return newObject
}, {})

// console.log(reduceResultObject);

const reduceResultNumber = numbers.reduce((total, num) => {
    // console.log(total, num);
total += num
    return total
}, 0)

// console.log(reduceResultNumber);
// array.every()       => true || false   (&& * ||) 
const everyResult = numbers.every((elem) => {
    // console.log(elem);
    return elem > 0
})

// // console.log(everyResult);

//  array.some()
const someResult = numbers.some((elem) => {
    // console.log(elem);
    return elem > 3
})
// console.log(someResult);
// array.sort() => мутирует исходный массив
const fruits = ['banana', 'apples', 'oranges']
const sortFruits = fruits.sort()
console.log(sortFruits);
console.log(fruits);
console.log(sortFruits === fruits);

const ages = [54, 32, 17, 85, 100, -22, -3, 8, 3]
const sortAges = ages.sort((min, max) => {
return min - max
})
console.log(sortAges);
// цепочка методов
const students = [
  { name: 'Phillip', age: 21, gender: 'male' },
  { name: 'Margo', age: 27, gender: 'female' },
  { name: 'Ann', age: 32, gender: 'female' },
  { name: 'Edd', age: 41, gender: 'male' },
  { name: 'Bill', age: 35, gender: 'male' },
]
const result1 = 
    students
    .filter((student) => student.gender === 'female')
    .map((girl) => girl.name)
    .sort()
console.log(result1);

const result2 = students.sort((a, b) => a.age - b.age)[0]
console.log(result2);

const result3 = students.sort((a, b) =>b.age - a.age)[0]
console.log(result3);

const result4 = students.reduce((acc, elem, i, arr) => {
    console.log(acc += elem.age/ arr.length);
    return acc
}, 0)
console.log(result4);
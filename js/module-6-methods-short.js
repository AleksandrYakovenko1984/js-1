const numbers = [1, 2, 3, 4, 5]
// forEach
const newArr = []
const forEachResult = numbers.forEach((num) => newArr.push(num + 1))
console.log(newArr);
// map
const mapResult = numbers.map((item) =>item + 1)
console.log(mapResult);
// filter
const filterResult = numbers.filter((elem) => elem > 2 && elem < 4)
console.log(filterResult);
// find
const findResult = numbers.find((i) => i > 2 || i > 5)
console.log(findResult);
// reduce
// const reduceResultArray = numbers.reduce((acc, elem) =>acc.push(elem + ''), [])
// console.log(reduceResultArray);
// ><><><><><><><>
// const reduceResultObject = numbers.reduce((newObject, number) => newObject[number] = number, {})
//     console.log(reduceResultObject);
// <><><><><><>
    const reduceResultNumber = numbers.reduce((total, num) =>total += num, 0) 
    console.log(reduceResultNumber);

    // every
    const everyResult = numbers.every((elem) =>elem > 0) 
console.log(everyResult);
    // some
    const someResult = numbers.some((elem) =>elem > 3) 
console.log(someResult);
    // sort
    const ages = [54, 32, 17, 85, 100, -22, -3, 8, 3]
const sortAges = ages.sort((min, max) => min - max)
console.log(sortAges);
    

 


    

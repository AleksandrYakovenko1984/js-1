const array = [1, 2, 3, "javaScrypt", 4, 5, 6]
console.log(array);

console.log(array[3]);

array[4] = 'i love';
console.log(array);

// delete array[5]
console.log(array);

                                // i = i + 1 i++
                                // 
for (let i = 0; i < array.length; i += 1) {
    
    if (typeof array[i] === "string") {
        
        continue
    }
    console.log(`итерация- ${i + 1}`, array[i]);
}

for (let i = 0; i < array.length; i += 1) {
    
    if (typeof array[i] === "string") {
        
        break
    }
    console.log(`итерация- ${i + 1}`, array[i]);
}

const multiArray = [
    [1, 10, 100, 1000],
    [2, 20, 200, 2000],
    [3, 30, 300, 3000],
]
console.log(multiArray);
console.log(multiArray[0]);


for (let array of multiArray) {
    console.log(array);
}

let it = 1;
for (let array of multiArray) {
    console.log(`iteration - ${it}`, array);
    it += 1;
    for (let xxx of array) {
        console.log(`xxx:`, xxx + 1);
    }
}


let age = 30;

console.log(age);
let myAge = age;
console.log(myAge === age);

age = 31
 console.log(myAge === age);


const numbers = [1, 2, 3, 4]
console.log(numbers);
const myNumbers = numbers;
numbers[0] = 100500
console.log(myNumbers);
console.log(numbers);

const mySliceNumbers = numbers.slice()
console.log(mySliceNumbers === numbers);


const firstTwoElems = numbers.slice(0, 2)
console.log(firstTwoElems);

// split
let myString = "my String"
console.log([1]);
console.log([2]);
console.log([3]);
console.log([4]);
console.log([5]);
console.log([6]);
console.log([7]);
console.log([8]);
console.log(myString.length);

const arrayFromString1 = myString.split("")
console.log(arrayFromString1);

const arrayFromString2 = myString.split(" ")
console.log(arrayFromString2);

const arrayFromString3 = myString.split("s")
console.log(arrayFromString3);

const arrayFromString4 = myString.split("S")
console.log(arrayFromString4);

// join
const myArray = ["i", "love", "javasript"]
console.log(myArray.length);

let arrayToString = myArray.join(" ")
console.log(arrayToString);

let arrayToString2 = myArray.join("-")
// console.log(arrayToString2);

console.log(`myArray`, myArray);
console.log(`myString`, myString);

//                                 ADD
// unshift(el1, ..., el) ------------------------ push(el1, ..., el)
//                       |        array          |
//                       |  [0],[1],[2],[3]      |
//               shift() ------------------------ pop()
//                                  DELETE

const exampleArray = [1, 1, 2, 3, 4, 4]
console.log(exampleArray)
const unshiftElem = exampleArray.unshift(0, 0)
console.log(unshiftElem) // новый exampleArray.length
console.log(exampleArray) //  [0, 0, 1, 1, 2, 3, 4, 4]

const pushElem = exampleArray.push(5, 5)
console.log(pushElem) // новый exampleArray.length
console.log(exampleArray) // [0, 0, 1, 1, 2, 3, 4, 4, 5, 5]

const shiftElem = exampleArray.shift()
console.log(shiftElem) // удаленный элемент
console.log(exampleArray) // [0, 1, 1, 2, 3, 4, 4, 5, 5]

const popElem = exampleArray.pop()
console.log(popElem) // удаленный элемент
console.log(exampleArray) // [0, 1, 1, 2, 3, 4, 4, 5]

exampleArray.splice(1, 1)
console.log(exampleArray);

let addSplice = exampleArray.splice(0, 0, "i", "love", "js")
console.log(addSplice)

console.log(exampleArray);

let replaceSplice = exampleArray.splice(7, 1, "react", "nodejs")
console.log(replaceSplice);
console.log(exampleArray);

// concat()
const firstPiece = [1, 2]
console.log(firstPiece)

const secondPiece = [3, 4]
console.log(secondPiece)

const thirdPiece = [5, 6]
console.log(thirdPiece)

const fullArray = firstPiece.concat(secondPiece, thirdPiece)

console.log(fullArray)
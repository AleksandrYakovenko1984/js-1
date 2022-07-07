// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45


// function checkStorage(available, ordered) {
//   let message;
  
//   if(available > ordered) {
//   message = 'Order is processed, our manager will contact you.'}
//     else (available < ordered)
//     {
//   message = 'Not enough goods in stock!'}
//   // Change code below this line

//   // Change code above this line
//   return message;
// }

//  checkStorage(100, 50)
//  checkStorage(100, 130) 
//  checkStorage(200, 20) 
//  checkStorage(200, 150) 
//  checkStorage(150, 180) 

//  function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

// ordered > available ? message = 'Not enough goods in stock!': message = 'The order is accepted, our manager will contact you';
  

//   // Change code above this line
//   return message;
// }

//  checkStorage(100, 50) 
//  checkStorage(100, 130) 
//  checkStorage(200, 20) 
//  checkStorage(200, 150) 
//  checkStorage(150, 180) 

// function highOrder(value, callback){
// callback(value)

// }
// highOrder(`Hello, i am callback`, setMessage)

// function setMessage(message) {
//   // console.log(message);
// }

// function toDoMeal(prods, zzz) {
//   // console.log(prods);
//   let result = zzz(prods)
//   // console.log(`your dish-`);
// }
// toDoMeal(['bread', 'meat'], toDoSandwich)
// toDoMeal(['banana', 'orange'], toDoSandwich)

// function toDoSandwich(arr) {
//   // console.log(arr);
//   let bread = arr.includes(`bread`)
//   // console.log(bread);
//  return bread ? `sandwich is done`: `no bread`
// }
// // ==============================================

// const results = [{ mail: "", scores: 10}]
// function getResultsByTests(getMax, getMin, mail, ...scores) {
//   // console.log(mail);
//   // console.log(scores);
//   let total = 0
//   for (let i of scores) {
//     total += 1
//   }
//   console.log(total);
//   const obj = { mail, scores: total }
//   results.push(obj)
//   console.log(results);
//   const scoresArr = []
//   for (let obj of results) {
//     console.log(obj.scores);
//     scoresArr.push(obj.scores)
//   }
//   console.log(scoresArr);
//   let max = getMax(scoresArr)
//   let min = getMin(scoresArr)
//   console.log(`max:`, max);
//   console.log(`min:`, min);
// }

// getResultsByTests(getMaxValue, getMinValue, "a@gmail.com", 1, 1, 1, 1, 1, 1, 1, 1,)


// function getMaxValue(arr) {
//   return Math.max(...arr)
// }

// function getMinValue(arr) {
//    return Math.min(...arr)
// }
  
const Hotel = function (name, stars, capacity) {
  this.name = name;
  this.stars = stars;
  this.capacity = capacity;
  this.guestCount = 0;

  this.greet = function (guestName) {
    console.log(`Hello ${guestName}, wellcome to ${this.name}`);
  };
   this.addGuests = function (amount) {
    this.guestCount += amount;
  };
    this.removeGuests = function (amount) {
    this.guestCount -= amount;
  };
};

const hotel = new Hotel('Sunrise Hotel', 5, 100);

console.log(hotel);
// Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
hotel.addGuests(50);
hotel.removeGuests(50);
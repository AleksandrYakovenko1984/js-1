// function calculateEngravingPrice(message, pricePerWord) { let stringArray = message.split(" ")
// let totalPrice = stringArray.length*pricePerWord
//    // Change code below this line
// return totalPrice


//    // Change code above this line
// }

//  calculateEngravingPrice("JavaScript is in my blood", 10) 
//  calculateEngravingPrice("JavaScript is in my blood", 20) 
//  calculateEngravingPrice("Web-development is creative work", 40) 
//  calculateEngravingPrice("Web-development is creative work", 20) 
// // // // // // // // 
//  function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line

// string = array.join(delimeter)

//   // Change code above this line
//   return string;
// }

//  makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") 
//  makeStringFromArray(["M", "a", "n", "g", "o"], "") 
//  makeStringFromArray(["top", "picks", "for", "you"], "_") 

// //  //  //  //  //  //  //  //

// function slugify(title) {
//   // Change code below this line
//   let slug
// slug = title.toLowerCase().split(" ").join("-")
// return slug

//   // Change code above this line
// }

//  slugify("Arrays for begginers") 
//  slugify("English for developer") 
//  slugify("Ten secrets of JavaScript") 
//  slugify("How to become a JUNIOR developer in TWO WEEKS") 



//  function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// const allArray = firstArray.concat(secondArray)
// allArray.slice(0, maxLength)
// return allArray

//     // Change code above this line
//   }

//  makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) 
//  makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) 
//  makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) 
//  makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) 
//  makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) 
//  makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) 


//  const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
// total += order[i]; }

//   return total;
// }

//  calculateTotalPrice([12, 85, 37, 4]) 
//  calculateTotalPrice([164, 48, 291]) 
//  calculateTotalPrice([412, 371, 94, 63, 176]) 
//  calculateTotalPrice() 

// function findLongestWord(string) {
//   // Change code below this line

//    const newArray = string.split(" ");
//    let biggerWord = "";
//    for (const word of newArray) {
//      if(word.length > biggerWord.length) {
//      biggerWord = word;
//      }

//    }
// return biggerWord
//   // Change code above this line
// }

//  findLongestWord("The quick brown fox jumped over the lazy dog") 
//  findLongestWord("Google do a roll") 
//  findLongestWord("May the force be with you") 
// // findLongestWord() 

// function createArrayOfNumbers(min, max) {
//   const numbers = []
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i)

//   }

//   // Change code below this line

//   // Change code above this line
//   return numbers;
// }

//  createArrayOfNumbers(1, 3) 
//  createArrayOfNumbers(14, 17) 
//  createArrayOfNumbers(29, 34) 
//  createArrayOfNumbers()


function filterArray(numbers, value) {
  // Change code below this line
  const valueNumb = [value]
  let newArray = []

  for (let number of numbers) {

    if (number > valueNumb) {
      number.push(newArray)
    }
  }
  return newArray

  // Change code above this line
}

filterArray([1, 2, 3, 4, 5], 3)
filterArray([1, 2, 3, 4, 5], 4)
filterArray([1, 2, 3, 4, 5], 5)
filterArray([12, 24, 8, 41, 76], 38)
filterArray([12, 24, 8, 41, 76], 20)
filterArray()

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  let value;

  if (fruits.includes(fruit)) { value = true } else { value = false }


  return value; // Change this line
}


function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (const elem of order) {
    total += order[elem];
  }

  // Change code above this line
  return total;
}
calculateTotalPrice([12, 85, 37, 4])
calculateTotalPrice([164, 48, 291])
calculateTotalPrice([412, 371, 94, 63, 176])
calculateTotalPrice([])
calculateTotalPrice()

//======================================================================  
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};
// ========================================================
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.area = 60;
apartment.rooms = 3;
apartment.location = { country: "Jamaica", city: "Kingston" };


// ============================================

const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Change code below this line
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
  
  
  // Change code above this line
};

// ===================================================
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line

for (const key in apartment){
 console.log(key);
console.log(apartment[key]);
  keys.push(key)
  values.push(apartment[key])
}

// ============================================
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line

 
  
if(apartment.hasOwnProperty(key)) { keys.push(key);
          values.push(apartment[key])                                
} 
  // Change code above this line
}
// ============================================================

function countProps(object) {
  let propCount = 0;
  // Change code below this line
for(const key in object){
if(object.hasOwnProperty(key)) {
propCount = Object.keys(object).length
}
}
  // Change code above this line
  return propCount;
}
// ======================================
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for(const key of keys) {
 values.push(apartment[key])
}
// ===========================================
function countProps(object) {
  // Change code below this line
  let propCount = 0;
const keys = Object.keys(object)
  for (const key of keys) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
  // Change code above this line
}
// ==================================================
function countProps(object) {
  // Change code below this line
  let propCount = 0;
const keys =  Object.keys(object)
 

  return keys.length;
  // Change code above this line
}
// =======================================================
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);
// =============================================================
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
 
for (const key in salaries) {
if (salaries.hasOwnProperty(key)) {
  totalSalary += (salaries[key])
}

}
  
  // Change code above this line
  return totalSalary;
}
//  ====================================================================

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];const hexColors = [];
const rgbColors = [];
for(const color of colors){
hexColors.push(color.hex)
  rgbColors.push(color.rgb)
}
// ========================================

function getProductPrice(productName) {
  // Change code below this line
  for(const prod of products){
  if(productName === prod.name) {
  return prod.price
  } 
    
  }
  
  return null
  // Change code above this line
}

// ====================================================
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];




function getAllPropValues(propName) {
 const values = []
  for(const prod of products) {
 
  if(prod.hasOwnProperty(propName)){
values.push(prod[propName])
  }
  }
  return values
  }

  // ================================================================

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let totalPrice 
for(const prod of products) {
if(productName === prod.name) {
return totalPrice = prod.price*prod.quantity
}
}
return 0

  // Пиши код выше этой строки
}
// ========================================================
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const  {tomorrow, today, yesterday} = highTemperatures
   
 

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
// =============================================================
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const  {tomorrow, today, yesterday, 
icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures
 

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
// ===============================================================
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow,   
icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"    
      } = highTemperatures
  
 


// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// ======================================================================
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}
// =============================================================
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
  tomorrow: { low:lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
  } } = forecast

// ===========================================================
// Change code below this line
function calculateMeanTemperature(forecast) {
  
  const {today:{low:todayLow, high:todayHigh },  tomorrow: {low:tomorrowLow, high:tomorrowHigh}} = forecast
  

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
// ======================================================
const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);
// ======================================
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
// =====================================================29
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings };
// ===============================================================30
function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  // Change code below this line
return {completed, category, priority, ...data}
  // Change code above this line
}
// ======================================================================31
function add(...args) {
  let total = 0
  for(const arg of args) {
  total += arg
  }
  return total
  // Change code above this line
}
// ===========================================32
// Change code below this line
function addOverNum(firstNum, ...args) {
  let total = 0;

  for (const arg of args) {
    if(arg > firstNum)
    total += arg;
  }

  return total;
  // Change code above this line
}
// ==================================================33
// Change code below this line
// Change code below this line
function findMatches(array, ...args) {
  const matches = []; // Don't change this line
for(const arr of args) {
if(array.includes(arr)) {
   matches.push(arr)
   }
}
  
  // Change code above this line
  return matches;
}
// ========================================================34
const bookShelf = {
  // Change code below this line
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  // Change code above this line
  removeBook(bookName){
  return `Deleting book ${bookName}`
  },
  updateBook(oldName, newName) {
 return `Updating book ${oldName} to ${newName}`
  }
};
// ============================================35
const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
   
	let bookIndex = this.books.indexOf(oldName) 
    this.books.splice(bookIndex, 1, newName)
    
    
	
	
    // Change code above this line
  },
};
// =========================================================36
const atTheOldToad = {
  // Change code below this line
  potions: []
  // Change code above this line
};
// ===========================================================37
const atTheOldToad = {
  // Change code below this line
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions(){
  return   ['Speed potion', 'Dragon breath', 'Stone skin']
  }
  // Change code above this line
};
// ==============================================================38
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    // Change code below this line
     this.potions.push(potionName)
    // Change code above this line
  },
};
// ======================================================39
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    let indexPoison = this.potions.indexof(potionName),
      this.potions.splice(indexPoison, 1)
    // Change code above this line
  },
};
// ===============================================================40
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line
 let poisonIndex = this.potions.indexOf(oldName) 
    this.potions.splice(poisonIndex, 1, newName)
    // Change code above this line
  },
};
// =======================================================================41
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    for(const elem of potions) {
    return elem
    }
    
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
   for(const potion of this.potions) {
if(potion.name === potionName) {
this.potions.splice(this.pothions.indexOf(potion), 1)
}
}
return `Potion ${potionName} is not in inventory!`

  // Пиши код выше этой строки
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`
    }

    this.potions.splice(potionIndex, 1, newName);
  }
  // Change code above this line
};

// ==========================================================
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
    
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
   for(const potion of this.potions) {
if(potion.name === potionName) {
this.potions.splice(this.pothions.indexOf(potion), 1);
}
}
return `Potion ${potionName} is not in inventory!`;

  // Пиши код выше этой строки
  },
  updatePotionName(oldName, newName) {
      for(const potion of this.potions) {
if(potion.name === potionName) {
potion.name = newName
}
}
  // Change code above this line
}
};

// ========================================41=жесть


const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
    
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }

    this.potions.push(potionName);
  },
 removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
      }
    }
  },
 updatePotionName(oldName, newName) {
    let prov = false;
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === oldName) {
        prov = true;
        this.potions[i].name = newName;
      }
    }
    if (!prov) {
    return `Potion ${oldName} is not in inventory!`;
  }
  }}

  // ---------------------------------------------------
  const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    let potionIndex;
    for (let i = 0; i<  this.potions.length; i++){
      if (this.potions[i].name === potionName){
        potionIndex = i;
      }
    }
    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    let potionIndex;
    for (let i = 0; i<  this.potions.length; i++){
      if (this.potions[i].name === oldName){
        potionIndex = i;
      }
    }

    this.potions[potionIndex].name = newName;
    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }
  },
};
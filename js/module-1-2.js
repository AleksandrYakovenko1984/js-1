// логические операторы //
// && // || // ! //
console.log("i love javascript" && 1);
console.log("react" && 1 && true);
console.log(0 && "react" && 1);


// ветвления
let minPrice = 100;
let maxPrice = 200;
let curentPrice = 80;

if (curentPrice >= minPrice && curentPrice <= maxPrice) {
    console.log(`Этот товар я могу купить сейчас`)
} else {console.log('эта цена нам не подходит')
    
}
console.log(!"true" || true);
console.log("true" || false);
console.log(false || true);
console.log(false || NaN || "false");

let day = "sun"
if (
    day === "mon" ||
    day === "tue" ||
    day === "wed" ||
    day === "thu" ||
    day === "fri"

) {
    console.log(`${day} - будний день`)
} else (console.log(`это выходной`))

console.log(!true)
console.log(!0)

let enterPrompt = null;
if (!enterPrompt) {
    console.log("пользователь нажал отмена")
}


console.log(!!1)
console.log(!!0)


let a = 11
if (a > 0 && a <= 5) {
    console.log(`0 - 5`)
} else if (a > 5 && a <= 10) {
    console.log(`6 - 10`)
} else if (a > 10 && a <= 15) {
    console.log(`11-15`)
}

let age = 17
if (age >= 18) {
    console.log(`вам можно!`)
} else {
    console.log(`вам нельзя!`)
}
// ТЕРНАРНЫЙ ОПЕРАТОР //
age >= 18 ? console.log(`вам можно!`) : console.log(`вам нельзя!`)

// СВИТЧ //
switch (day) {
    case "mon":
        console.log(`${day} - будний день`)
        break
     case "tue":
        console.log(`${day} - будний день`)
        break
     case "wed":
        console.log(`${day} - будний день`)
        break
     case "thu":
        console.log(`${day} - будний день`)
        break
     case "fri":
        console.log(`${day} - будний день`)
        break
    default:
        console.log(`это выходной`)
}


switch (day) {
    case "mon":
     case "tue":
     case "wed": 
     case "thu":
     case "fri":
        console.log(`${day} - будний день`)
        break
    default:
        console.log(`это выходной`)
}

// МЕТОД isNaN //
console.log(isNaN(0))
console.log(isNaN(1))
console.log(isNaN(1000000))
console.log(isNaN("0"))
console.log(isNaN(Infinity))
console.log(isNaN(0.4))
console.log(isNaN(true))
console.log(isNaN(false))
console.log(isNaN("true"))
console.log(isNaN("false"))

// ОБЛАСТЬ ВИДИМОСТИ //
const elaja = 1

if (elaja > 0) {
    let elaja = 1
    elaja += 10
console.log('LOCAL:', elaja)
}

// ЦИКЛЫ //
// const max = 10
// let y = 1

// while (y < max) {
//     y = y + 1
//     console.log(y)
// }
// do{ } while()

// ЦИКЛ СО СЧЕТЧИКОМ //
//      СТАРТ  УСЛОВИЕ ДО  ШАГ
for ( let i = 0; i <= 10; i = i += 1) {
    // console.log(`${i}`)
    if (i % 2 === 0) {
        console.log(`continue ${i}`)
        continue
    }
}

for ( let i = 0; i <= 10; i = i += 1) {
    // console.log(`${i}`)
    if (i % 2 === 0) {console.log(`break ${i}`)
        
        break
    }
}


function checkIfCanAccessContent(subType) {
  const canAccessContent =  if(subType === "pro" ||
subType === "vip" ) {console.log(true)} else if(subType === "starter" ||
                              subType === "free") { console.log(false)}

// Change this line

  return canAccessContent;
}

 checkIfCanAccessContent("pro") 
 checkIfCanAccessContent("starter") 
 checkIfCanAccessContent("vip") 
 checkIfCanAccessContent("free") 

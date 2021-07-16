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


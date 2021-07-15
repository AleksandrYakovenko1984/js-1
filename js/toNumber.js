// приведение к числу строчного значения
let value = "In the beginning was the Word";

let toNumber = Number(value);
console.log(`${value}, значение через конструктор Number(): `, toNumber);

console.log( `тип данных ${value}, значение через конструктор Number(): `, typeof toNumber);

// 2-й способ//
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);

console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// .. ..// // // // // // к строчному числу

 value = "123";

 toNumber = Number(value);
console.log(`${value}, значение через конструктор Number(): `, toNumber);

console.log( `тип данных ${value}, значение через конструктор Number(): `, typeof toNumber);

// 2-й способ//
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);

console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// // // // // // // // пустая строка
 

 value = "";

 toNumber = Number(value);
console.log(`${value}, значение через конструктор Number(): `, toNumber);

console.log( `тип данных пустая строка ${value}, значение через конструктор Number(): `, typeof toNumber);

// 2-й способ//
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);

console.log(`тип данных пустая строка ${value}, через унарный +: `, typeof toNumber);

// .. // // // // // // строка с пробелом

 value = " ";

 toNumber = Number(value);
console.log(`${value}, значение через конструктор Number(): `, toNumber);

console.log( `тип данных строка с пробелом ${value}, значение через конструктор Number(): `, typeof toNumber);

// 2-й способ//
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);

console.log(`тип данных строка с пробелом ${value}, через унарный +: `, typeof toNumber);

// // // // // // // // // // // // булевое значение true приводим к числовому

 value = true;

 toNumber = Number(value);
console.log(`${value}, значение через конструктор Number(): `, toNumber);

console.log( `тип данных ${value}, значение через конструктор Number(): `, typeof toNumber);

// 2-й способ//
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);

console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// // // // // // // // // // // // булевое значение false приводим к числовому

 value = false;

 toNumber = Number(value);
console.log(`${value}, значение через конструктор Number(): `, toNumber);

console.log( `тип данных ${value}, значение через конструктор Number(): `, typeof toNumber);

// 2-й способ//
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);

console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// // // // // // // // // // // // булевое значение undefined приводим к числовому

 value = undefined;

 toNumber = Number(value);
console.log(`${value}, значение через конструктор Number(): `, toNumber);

console.log( `тип данных ${value}, значение через конструктор Number(): `, typeof toNumber);

// 2-й способ//
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);

console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// // // // // // // // // // // // булевое значение undefined приводим к числовому

 value = null;

 toNumber = Number(value);
console.log(`${value}, значение через конструктор Number(): `, toNumber);

console.log( `тип данных ${value}, значение через конструктор Number(): `, typeof toNumber);

// 2-й способ//
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);

console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);




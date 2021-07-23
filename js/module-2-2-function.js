// объявление, создание

// FUNCTION EXPRESSION
const myFunc = function (param1) {
    console.log(`это функц выражение`);
}
// FUNCTION DECLARATION
function myFuncDec1(param) {
    console.log(`это декларативное выражение`);
}
// ARROW FUNCTION
const myArrowFunc = (param1) => {
    console.log(`это стрелочная функция`);
}
// ВЫЗОВЫ ФУНКЦИИ
myFunc()
myFuncDec1()
myArrowFunc()

// PARAMS & ARGUMENTS

// DEFAULT PARAMS
// function toSayHello(userName = "user") {
//     alert(`${userName},  рады вас приветствовать!` )
// }
// toSayHello('Yakovenko Juliia')
// ARGUMENTS & ...ARGS


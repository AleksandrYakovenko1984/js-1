document.getElementById("inc").addEventListener('click', () => {
    let count = productCounter.increment(5) 
    console.log(count);
    document.getElementById("count").textContent = count
})
document.getElementById("dec").addEventListener('click', () => {
    let count = productCounter.decrement(5)
    document.getElementById("count").textContent = count
})
// document.getElementById("count")


const productCounter = createCounter()

console.log(productCounter);

function createCounter() {
    
    let current = 0

    function increment(value) {
        return (current += value)
    }

    function decrement(value) {
        if (current <= 0) return
            return (current -= value)
    }
    return { increment, decrement, current }
}


function changeColor() {
    let color = 'green'
    function getNewColor(value) {
       return (color = value)
    }
    function resetColor() {
        return (color = 'green')
    }
    return {getNewColor, resetColor}
}

const x = changeColor()
let color = x.getNewColor('black')
console.log(color);
color = x.resetColor()
console.log(color);
export default createCounter
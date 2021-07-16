const cart = [ 25, 25, 25, 25, 25, 25, 25, 25]
let total = 0;
for (let i = 0; i < cart.length; i += 1) {
    total += cart[i]
}
console.log(`Total: `, total) 
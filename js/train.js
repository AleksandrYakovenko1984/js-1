const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let total = 0;

for (let i = 0; i < matrix.length; i += 1) {
  console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

  for (let j = 0; j < matrix[i].length; j += 1) {
    console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
    total += matrix[i][j];
  }
}

console.log(total); // 45


function checkStorage(available, ordered) {
  let message;
  
  if(available > ordered) {
  message = 'Order is processed, our manager will contact you.'}
    else (available < ordered)
    {
  message = 'Not enough goods in stock!'}
  // Change code below this line

  // Change code above this line
  return message;
}

 checkStorage(100, 50)
 checkStorage(100, 130) 
 checkStorage(200, 20) 
 checkStorage(200, 150) 
 checkStorage(150, 180) 
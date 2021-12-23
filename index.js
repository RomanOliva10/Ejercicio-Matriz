let length = prompt('ingresar tamnaño');
let matriz = [];
let principal = 0;
let secundarfa = 0;

for (let f = 0; f < length; f++) {
  matriz[f] = new Array();
  for (let c = 0; c < length; c++) {
    let random = 1 + Math.floor(Math.random() * 100);
    matriz[f][c] = random;
    if (f == c) {
      principal += matriz[f][c];
    }
    if (f + c == length - 1) {
      secundarfa += matriz[f][c];
    }
  }
}
for (let f = 0; f < length; f++) {
  console.log(matriz[f]);
}
console.log(principal);
console.log(secundarfa);

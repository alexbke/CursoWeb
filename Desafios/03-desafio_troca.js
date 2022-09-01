/*Trocar o valor das variaveis*/
let a = 7;
let b = 94;
let c = a;

a = b;
b = c;

console.log(a + " - " + b);

[a,b] = [b,a];

console.log(a);
console.log(b);
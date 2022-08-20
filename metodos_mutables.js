let beers = ["erdinger", "corona", "delirium"];

/**
 * Métodos mutables de Javascript para el manejo de Arrays.
 *    ? Este tipo de métodos permiten modificar el arreglo.
 */
beers.push("heineken"); // ! Agrega elemento al final del Array.
beers.unshift("modelo especial"); // ! Agrega elemento al inicio del Array.
beers.splice(2, 0, "fuller"); // ! Elimina o modifica para insertar un elemento en cualquier posición del Array.
let beer = beers.pop(); // ! Elimina el ultimo elemento del Array.
let beer2 = beers.shift(); // ! Elimina el primer elemento del Array.

console.log(beer);
console.log(beer2);

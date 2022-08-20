let beers = ["erdinger", "corona", "delirium"];
let wines = ["chardonnay", "merlot", "cabernet"];

/**
 * Métodos inmutables de Javascript para el manejo de Arrays.
 * ? Un método inmutable, no modifica los valores originales del elemento.
 * ? Sino que genera un nuevo arreglo con esos cambios.
 * 
 * * e.g. concat();, slice(); son métodos inmutables.
 */
let alcoholicDrinks = beers.concat(wines);
let beers2 = beers.slice(0, -1);
beers2[0] = "budweiser";

console.log(alcoholicDrinks);
console.log(beers2);

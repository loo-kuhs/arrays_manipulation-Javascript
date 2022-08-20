let beers = ["erdinger", "corona", "delirium", "budweiser", "budlight"];

/**
 * El método slice() de Javascript.
 * ? Es un método inmutable, no modifica los valores del elemento.
 * * Sirve para generar un nuevo arreglo partiendo de un grupo de parámetros o valores.
 */
const beers2 = beers.slice(0, -2);

console.log(beers2);
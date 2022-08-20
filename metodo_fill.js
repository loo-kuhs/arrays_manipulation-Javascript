let beers = ["erdinger", "corona", "delirium", "budweiser", "budlight"];

/**
 * El método fill() de Javascript.
 * ? Es un método mutable, modifica su estado, los valores.
 * * Llena los valores, desde un posición a otra de los elementos.
 */
beers.fill("pato", 0, beers.length);

console.log(beers);
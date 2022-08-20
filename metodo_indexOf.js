let beers = ["erdinger", "corona", "delirium"];
let numbers = [6, 5, 99, 8];

/**
 * El método indexOf() de Javascript.
 * ? Hace un comparativa de forma estricta (===), de valor y tipo.
 *    * Cuando el elemento existe, retorna su posición en forma de numero positivo.
 *    ! Cuando no existe retorna un valor numérico negativo. e.g. -1
 */
console.log(beers.indexOf("erdinger"));
console.log(beers.indexOf("corona"));
console.log(numbers.indexOf(99));
console.log(numbers.indexOf("99")); // ! Error de tipo.

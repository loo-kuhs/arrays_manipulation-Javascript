let beers = ["erdinger", "corona", "delirium", "budweiser", "budlight"];

/**
 * El operador spread.
 */

const showDom = (element, arr) => {
  document.getElementById(element).innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    document.getElementById(element).innerHTML += `
      <div>${arr[i]}</div>
    `;
  }
};

showDom("array1", beers);
/* showDom("array2", beers2); */

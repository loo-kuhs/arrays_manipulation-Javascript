let number = [2, 5, 6, 3, 6, 7, 18];

/**
 * Recorrer un array
 */
for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

for (let i = number.length - 1; i >= 0; i--) {
  console.log(number[i]);
}

const show = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

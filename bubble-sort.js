let array = [1, 55, 33, 4, 9, 25, ]

function bubbleSort(array) {
    let n = array.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let x = 0; x < n - 1 - i; x++) {
        if (array[x] > array[x + 1]) {
          let arr = array[x];
          array[x] = array[x + 1];
          array[x + 1] = arr;
        }
      }
    }
  
    return array;
  }
  

bubbleSort(array)
console.log(array)
module.exports = bubbleSort;

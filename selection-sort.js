let arr = [1, 16, 9, 2, 99, 32];



function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let arrNew = i;

    for (let x = i + 1; x < n; x++) {
      if (arr[x] < arr[arrNew]) {
        arrNew = x;
      }
    }

    if (arrNew !== i) {
      let temp = arr[i];
      arr[i] = arr[arrNew];
      arr[arrNew] = temp;
    }
  }

  return arr;
}

selectionSort(arr);
console.log(arr); 
module.exports = selectionSort;

let array = [1, 88, 26, 23, 2,]

function insertionSort(array) {
	let y = array.length;
  
	for (let i = 1; i < y; i++) {
	  let arr = array[i];
	  let x = i - 1;
  
	  while (x >= 0 && array[x] > arr) {
		array[x + 1] = array[x];
		x = x - 1;
	  }
  
	  array[x + 1] = arr;
	}
  
	return array;
  }
  
 
 insertionSort(array)
 console.log(array) 
 module.exports = insertionSort;
  
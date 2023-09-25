function binarySearch(array, searchTerm) {
	let arr = 0;
	let x = array.length - 1;
  
	while (arr <= x) {
	  let arrNew = Math.floor((left + arr) / 2);
  
	  if (array[arrNew] === searchTerm) {

		return arrNew;
	  } else if (array[arrNew] < searchTerm) {

		arr = arrNew + 1;
	  } else {

		right = arrNew - 1;
	  }
	}
  

	return -1;
  }
  
binarySearch(array)
console.log(array)
module.exports = binarySearch;
  
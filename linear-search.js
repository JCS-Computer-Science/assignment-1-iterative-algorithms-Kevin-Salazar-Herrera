function linearSearch(arr, searchTerm) {
	for(let i = 0; i < arr.length; i++) {
		if (arr[i] === searchTerm) {
			return arr.indexOf(i+1);
	  }
	}
	return -1
  }
  
  let x = linearSearch([1,2,3,4],2);
  console.log(x);
  module.exports = linearSearch;
  
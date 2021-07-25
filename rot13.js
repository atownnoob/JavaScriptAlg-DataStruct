// Ceasars Cipher
// Written as part of FreeCodeCamp certification 
// Adam Khudoznyk
// 25th July 2021

function rot13 (str) {
	// store base value in an array
	// store the shfted values in an array
	// can find and use the same index in from both to decipher between the char values
	const base = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ','!','?','.'];
	const shift = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M',' ','!','?','.'];
	let newArr = [];

	// loop through the length of the String
	// create a new array which contains the shifted/non-shifted values
	for (let i = 0; i < str.length; i++){
		// find the index in the base array
		// hardcode punctuation with no shit to pass through
		let baseIndex = base.indexOf(str[i]);
		newArr[i] = shift[baseIndex];
		//console.log(newArr);
	}
	
	// join the array into a string
	// ensure that no char between the elements (default is ',')
	str = newArr.join('');
	//console.log(str);
	return str;
}

// tests with output to console
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("SERR CVMMN!"));
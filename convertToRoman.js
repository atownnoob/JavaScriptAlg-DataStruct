function convertToRoman(num) {
	// 1000 = M
	// 900 = CM
	// 500 = D
	// 400 = CD
	// 100 = C
	// 90 = XC
	// 50 = L
	// 10 = X
	// 5 = V
	// 1 = I
	let output = "";
	
	
	// simplest approach is to use if{}elseif{}
	// check if number is above the cutoff, if it is and can subtract, add the relevant Roman
	// numeral code to the output string.
	while (num != 0){
		//console.log(num);
		//console.log(output);
		// check for thousands -> M
		if (num >= 1000) {
			output = output + "M";
			num = num - 1000;
		}
		// check for item before M, 900 (CM)
		else if(num >= 900) {
			output = output + "CM";
			num = num - 900;
		}		
		// check for number of 500's in the number, D
		else if(num >= 500) {
			output = output + "D";
			num = num - 500;
		}
		// check for item before D, 400 (CD)
		else if(num >= 400) {
			output = output + "CD";
			num = num - 400;
		}
		// check for hundreds, C
		else if(num >= 100) {
			output = output + "C";
			num = num - 100;
		}
		// check for item before C, 90 (XC)
		else if(num >= 90) {
			output = output + "XC";
			num = num - 90;
		}
		// check for 50s, L
		else if(num >= 50) {
			output = output + "L";
			num = num - 50;
		}
		// check for number before L, XL
		else if(num >= 40) {
			output = output + "XL";
			num = num - 40;
		}
		// check for 10s, X
		else if(num >= 10) {
			output = output + "X";
			num = num - 10;
		}
		// check for item before X, IX
		else if(num >= 9) {
			output = output + "IX";
			num = num - 9;
		}
		// check for 5s, V
		else if(num >= 5) {
			output = output + "V";
			num = num - 5;
		}
		// check for item before V, IV
		else if(num >= 4) {
			output = output + "IV";
			num = num - 4;
		}
		// check for 1's, I
		else if(num >= 1) {
			output = output + "I";
			num = num - 1;
		}
		
	}
	return output;
	
	
	
	// thoughts - might be best to extract the actual numbers from each position into an array?
	// regex to check for a number, and continue checking - use global flag
	let regex = /(\d)/g;
	// return an array of strings which breaks up each item into a separate element
	let temp = num.match(regex);
	// length of the array will tell me to what level
	// loop through each element, and can form the relevant 
	
	
	//console.log(num);
	//console.log(temp);
	
	
	
	//return num;
}


//Tests
console.log(convertToRoman(36));
console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));
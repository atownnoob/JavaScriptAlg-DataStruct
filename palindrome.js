

function palindrome (inputString) {
	// need to remove the non-alpha nyumeric characters
	// use Regex and .match() function
	// note that .match() returns an array of elements
	// /i for case insensitive
	// /g for global
	let myRegex = /[a-z0-9]/ig;
	let cleanArray = inputString.match(myRegex);
		
	// join the array of elements to sanitise input
	let cleanString = cleanArray.join();
	
	// reverse teh array of elements and join to create string
	let reverseString = cleanArray.reverse();
	reverseString = reverseString.join();
  	
	// final logic check
	// ensure that checking against .toUpperCase() for valid comparison
	if (cleanString.toUpperCase() == reverseString.toUpperCase()) {
		console.log("passed test");
		return true;
	} 
	else {
		console.log("failed test");
		return false;
	}
}

// test cases
palindrome("eye");
palindrome("_eye");
palindrome("Race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");
palindrome("RaceCar");
palindrome("race CAR");
palindrome("2A3*3a2");
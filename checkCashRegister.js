// Cash Register
// Written as part of Free Code Camp certification
// Adam Khudoznyk
// August/Sept 2021

/*
Requirements:
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
	// object to calculate exact change from cid
	// start from highest to lowest so that can iterate through drawer with highest denomination
	const CHANGE = {
		"ONE HUNDRED": 100.00,
		"TWENTY": 20.00,
		"TEN": 10.00,
		"FIVE": 5.00,
		"ONE": 1.00,
		"QUARTER": .25,
		"DIME": .10,
		"PENNY": .01
	}
		
	// calculate the change due
	let change = cash - price;
	// declare array to contain the change to provide back to customer
	let changeBack = [];
  
  
	// calculate the total amount in the cid
	let totalCid = 0;
	for (let i = 0; i < cid.length; i++){
		// add the amount to the total
		totalCid += cid[i][1];
	}
	// convert 64bit floating point to the two decimal places required by changing to int
	// W3 schools recommends using .toFixed(2) as 'perfect for working with money'
	totalCid = totalCid.toFixed(2);
    
	// check for insufficient funds
	if (totalCid < change) {
		return {status: "INSUFFICIENT_FUNDS", change: []};
	}
	// check for exact change amount
	else if (totalCid == change) {
		return {status: "CLOSED", change: cid};
	}
	// calculate the exact change
	else {
		// e.g. cid is $1, and 1c
		// if change is 50c, need to respond with insufficient funds
		// if change is $1, need to respond with changeBack
		// need to return array with highest to lowest order
		// reverse cid in place so that can calculate based on the largest values first
		cid = cid.reverse();		
		// iterate through the possible values in CHANGE
		let temp = change;
		// keep track of the drawer position
		let cidIndex = 0;

		for (let value in CHANGE) {
			// declare array to hold the cash taken out of the drawer
			let tempArray = [,];
			// keep track of how many 
			let counter = 0;
				
			// while our change is greater than the demonination, and we still have cash in drawer for that demonination
			while ((temp >= CHANGE[value]) && (cid[cidIndex][1]) > 0) {					
				// take away the value from the change
				temp = (temp - CHANGE[value]).toFixed(2);
				// increment the qty of that denomination taken from the drawer
				counter++;		
				// take the money out of the drawer
				cid[cidIndex][1] -= CHANGE[value];
			}
			
			// move to next denomination in the cid
			cidIndex++;			
			// if we have taken a denomination out, push the qty*value to the changeBack array
			if (counter > 0) {	
				changeBack.push([value,CHANGE[value]*counter]);
			}
		}			
	}
	
	// if there are no elements in the changeback, nothing has been taken out of the drawer
	if (changeBack.length == 0) {
		return {status: "INSUFFICIENT_FUNDS", change: []};
	}
	// else return the change that has been taken out of the drawer
	else {
		return { status: "OPEN", change: changeBack};
	}
 }



// tests
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
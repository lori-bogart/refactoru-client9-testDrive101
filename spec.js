// Status: I've got the first 4 tests to pass; 
// This is where I'm stopping on this project; 
// so it's complete for me.


// This function is not yet implemented, and should initially make the tests fail.
// TODO: Make the tests pass!
/**
		@param arr 						An array
		@param start 					The index to start removing items
		@param numToReplace		The number of items to remove from the array
		@param ...						Items to insert
		@returns							A new array
*/


var splice = function(originalArray, start, numToReplace, replace) {

// pseudocode:
// look at each item in the array
//if < 3rd item (start item)
// then keep it (take value of source arr and push to result array)
// else ...if it is the 3rd or 4th item (start + numToReplace) don't do anything
// else  >=5th (> start + numToReplace) item keep them

// check to see if there is a replace value
// if yes, then,  insert value into slot
// return resultArray items

	var resultArray = [];
	var replaceFlag = true;  //only replace once 

	if (start === undefined) { return originalArray } //error trap

	for (var i = 0; i < originalArray.length ;  i++) {          //insertion
		if (i === start && numToReplace === 0 && replaceFlag && replace !== undefined){
			resultArray.push(replace); 
			resultArray.push(originalArray[i]);
			replaceFlag = false;
		}
		else if (i < start || numToReplace === undefined || i >= start + numToReplace) {
			resultArray.push(originalArray[i]);
		}
		else if (replaceFlag && replace !== undefined){   
			resultArray.push(replace);     						//replace here
			replaceFlag = false;
		}
	} 

	if (arguments.length > 4) {
		var x = arguments.splice(5, arguments.length);
		resultArray.push(x);
	}

	return resultArray;
};

// The Smallest Unit Testing Library
var assert = function(a,b) {
if(a !== b) {
    console.error('Expected', a, 'to equal', b);
  }
   else {
    console.log('Test passed!', a, 'equals', b);
  }
};

// The Second Smallest Unit Testing Library... to support array comparison
// Prints FAIL if the two given arrays do not have the same contents.
var assertArraysEqual = function(a,b) {

	if(!a || a.length === undefined) {
		console.error('FAIL: Expected first argument to assertArraysEqual to be an array. Instead received:', a);
	}
	else if(!b || b.length === undefined) {
		console.error('FAIL: Expected second argument to assertArraysEqual to be an array. Instead received:', b);
	}
	else if(a.length !== b.length) {
		console.error('FAIL: Array', a, '(length: ' + a.length + 
			') expected to be the same length as', b, '(length: ' + b.length + ')');
	}
	else {
		var pass = true;                     //!
		for(var i=0; i<a.length; i++) {
			if(a[i] !== b[i]) {
				pass = false;
				break;
			}
		}
		if(pass) {
			console.log('PASS:', a, 'equals', b);
		}
		else {
			console.error('FAIL: Expected array', a, 'to equal', b);
		}
	}
};


// TESTS (Normally you'd have to write these yourself! But a magical elf left these for you...)

// You should be able to remove elements from an array.
// var splice = function(arr, start, numToReplace, replace)
// TEST ONE:
console.log("TEST 1-----------------------------------");
assertArraysEqual(splice(['a','b','c','d','e'], 1, 2),  ['a','d','e']);


// The original array should remain unchanged (pure function).
// TEST TWO
console.log("TEST 2-----------------------------------");
var a = ['a','b','c','d','e'];
a = splice(a);                                 //test undefined                  
assertArraysEqual(a,  ['a','b','c','d','e']);
a = splice(a, 0);                     			//test zero
assertArraysEqual(a,  ['a','b','c','d','e']);

// You can insert an item with the fourth argument.
// TEST THREE
console.log("TEST 3-----------------------------------");
assertArraysEqual(splice(['a','b','c','d','e'], 1, 2, 'z'),  ['a','z','d','e']);

// You can insert elements without removing anything.
// TEST FOUR
console.log("TEST 4-----------------------------------");
assertArraysEqual(splice(['a','b','c','d','e'], 1, 0, 'z'),  ['a','z','b','c','d','e']);

// Inserting at an arbitrarily high index should just insert at the end.
// TEST FIVE
console.log("TEST 5-----------------------------------");
assertArraysEqual(splice(['a','b','c'], 99, 0, 'z'),  ['a','b','c','z']);

//TEST SIX
console.log("TEST 6-----------------------------------");
assertArraysEqual(splice(['a','b','c'], 99, 1, 'z'),  ['a','b','c','z']);

// You should be able to insert an arbitrary number of values using multiple arguments.
//TEST SEVEN
console.log("TEST 7-----------------------------------");
assertArraysEqual(splice(['a','b','c'], 99, 1, 'x','y','z'),  ['a','b','c','x','y','z']);

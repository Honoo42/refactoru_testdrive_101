// This function is not yet implemented, and should initially make the tests fail.
// TODO: Make the tests pass!
/**
		@param arr 						An array
		@param start 					The index to start removing items
		@param numToReplace		The number of items to remove from the array
		@param ...						Items to insert
		@returns							A new array
*/
var splice = function(arr, start, numToReplace, replace) {
	// console.log(arguments);
	var output = [];
	var copy = arr;
	var getRidOf = start + numToReplace;

	for (var i = 0; i < arr; i++) {
		start = copy[i];
		};
		if (i < start) {
		thing = copy.slice(i,start);	
		}
		// else if ( i > getRidOf) {
			// stuff = copy.slice(start);
		// }
			// stuff1 = stuff.shift();
			// stuff2 = stuff.shift();
			// output= stuff2;
		
		// var	stageThree = copy.pop(start,getRidOf);

	
	// output = thing.join(",",stuff2) ;

	
	 output = thing
	return output;
};

// ================================================================

// Titanic Dataset challenges! 

// Your goal is to write some functions that will extract
// relevant data from the dataset. 

// Write your code here in this file. 

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant 
// piece of information from the data and return it. 

// ===============================================================

// ---------------------------------------------------------------
// 1 -------------------------------------------------------------
// Return an array of all the values in data for a given property
// For example if property = 'fare' the output should be a list of 
// all fares something like: [7.3125, 15.75, 7.775, 10.5, ...]
// Or if property = 'age' -> [40, 26, 22, 28, 23, 45, 21, ...]

const getAllValuesForProperty = (data, property) => {
	const values = data.map((record) => record.fields[property]);
  
	return values;
  };

// 2 -------------------------------------------------------------
// Return an array where a given property matches the given value
// For example property = 'sex' and value = 'male' returns an 
// array of all the male passengers [{...}, {...}, {...}, ...]

const filterByProperty = (data, property, value) => {
	return data.filter((record) => record.fields[property] === value);
};

// 3 -------------------------------------------------------------
// Filter out missing or null values
// Return an array where the objects that have undefined for a 
// given property have been removed

const filterNullForProperty = (data, property) => {
	return data.filter((record) => record.fields[property] !== undefined);
};

// 4 -------------------------------------------------------------
// Abstract the sum by creating a function that returns the sum 
// for any (numeric) property
// Return the total of all values for a given property. This

const sumAllProperty = (data, property) => {
	return data.reduce((total, record) => {
		const value = record.fields[property];
		if (typeof value === 'number') {
			return total + value;
		}
			return total;
	}, 0);
}


// 5 -------------------------------------------------------------
// Count unique values for property. The goal here is return an 
// object with keys equal to the unique values for a property and
// values equal to the number of times that property appears. For
// example the embarked property has three unique values: S, C, 
// and Q, and a couple passengers have undefined for this property. 
// So the output should be: { S: 644, C: 168, Q: 77, undefined: 2 }
// That is 644 passengers embarked at South Hampton. 168 embarked 
// at Cherbourg, 77 emabrked at Queenstown, and 2 are undedfined

const countAllProperty = (data, property) => {
	const counts = {};

	data.forEach((record) => {
			const value = record.fields[property];
			if (value !== undefined) {
				if (counts[value]) {
					counts[value]++;
			} else {
				counts[value] = 1;
			}
		} else {
			if (counts.undefined) {
				counts.undefined++;
			} else {
				counts.undefined = 1;
			}
		}
	});
	return counts;
};

// 6 ------------------------------------------------------------
// Make histogram. The goal is to return an array with values 
// of a properties divided into buckets and counting the number
// of items in each bucket.

const makeHistogram = (data, property, step) => {
	const histogram = data.reduce((result, record) => {
		const value = record.fields[property];
		if (typeof value === "number") {
			const bucket = Math.floor(value / step);
			if (result[bucket]) {
				result[bucket]++;
			} else {
				result[bucket] = 1;
			}
		}
		return result;
	}, []);

	return Array.from(histogram, (v) => v || 0);
};

// 7 ------------------------------------------------------------
// normalizeProperty takes data and a property and returns an 
// array of normalized values. To normalize the values you need
// to divide each value by the maximum value in the array.

const normalizeProperty = (data, property) => {
	const values = data
	  .map((record) => record.fields[property])
	  .filter((value) => !isNaN(value));
  
	const maxValue = Math.max(...values);
  
	const normalizedValues = values.map((value) => value / maxValue);
	return normalizedValues;
  };

// ===================================

// Normalizing is an important process that can make many other
// operations easier. Normalizing allows you to take numbers in one
// range and convert them to any other range.
// For this example you need to find the max value first before
// generating an array of normalized values.

// If the range of data included negative numbers or did not start at 0
// we might also need to find the minimum value.

// 8 ------------------------------------------------------------
// Write a function that gets all unique values for a property.
// Given the array of data and a property string it should return
// an array of all of the unique values under that property.
// For example if the property string were "sex" this function
// would return ['male', 'female']

const getUniqueValues = (data, property) => {
	const values = data
	  .map((record) => record.fields[property])
	  .filter((value) => value !== undefined);
	const uniqueValuesSet = new Set(values);
	const uniqueValuesArray = Array.from(uniqueValuesSet);
	return uniqueValuesArray;
  };
  
  // There are a couple ways to do this.
  // Use an object and add each value as a key. The value can be anything.
  // Use a Set. Be sure to convert this to an array before returning!

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports = {
	getAllValuesForProperty,
	filterByProperty,
	filterNullForProperty,
	sumAllProperty,
	countAllProperty,
	makeHistogram,
	normalizeProperty,
	getUniqueValues
};
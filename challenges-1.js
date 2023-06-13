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

// =================================================================

// 1 ---------------------------------------------------------------
// Return the total number of passengers. 
// Return a number.

const getTotalPassengers = (data) => {
	return data.length
}

// 2 ---------------------------------------------------------------
// Return the number of surviving passengers. A passenger survived 
// if their survived property is "Yes".
// Return a number.

const getSurvivorCount = (data) => {
	const survivors = data.filter(item => item.fields.survived === "Yes");
	return survivors.length;
}

// 3 ---------------------------------------------------------------
// Return the number of passengers who did not survive. A passenger
// Return a number.

const getCasualityCount = (data) => {
	const casualties = data.filter(item => item.fields.survived === "No");
	return casualties.length;
}

// 4 ---------------------------------------------------------------
// Return the number of passengers in any class. This function 
// takes the data and the passenger class a string. Fins all of the 
// passengers whose pclass matches and return the count. 
// Return a number

const countPassengersInClass = (data, pclass) => {
	const passengers = data.filter(item => item.fields.pclass === pclass);
	return passengers.length;
}

// 5 ---------------------------------------------------------------
// Return the number of survivors in a class. This function takes 
// the data and passenger class. Return only passengers  

const getSurvivorCountForClass = (data, pclass) => {
	const survivors = data.filter(item => item.fields.pclass === pclass && item.fields.survived === "Yes");
	return survivors.length;
}

// 6 ---------------------------------------------------------------
// Return the number of passengers who did not survive in a class.
// This function takes the data and the passenger class and returns 
// the number of passengers who did not survive for that class. 

const getCasualityCountForClass = (data, pclass) => {
	const casualties = data.filter(item => item.fields.pclass === pclass && item.fields.survived === "No");
	return casualties.length;
}

// 7 ---------------------------------------------------------------
// Return the age of the youngest passenger. You'll need to filter
// passenger data where the age is missing. 

const getMinAge = (data) => {
	const validAges = data.filter(item => item.fields.age !== undefined);
	const minAge = Math.min(...validAges.map(item => item.fields.age));
	return minAge;
}

// 8 ---------------------------------------------------------------
// Return the age of the oldest passenger. 

const getMaxAge = (data) => {
	const validAges = data.filter(item => item.fields.age !== undefined);
	const maxAge = Math.max(...validAges.map(item => item.fields.age));
	return maxAge;
}

// 9 ---------------------------------------------------------------
// Return the number of passengers that embarked at a given stop. 
// Each passenger has a embarked property with a value of: S, C,
// or Q. 

const getEmbarkedCount = (data, embarked) => {
	const passengers = data.filter(item => item.fields.embarked === embarked);
	return passengers.length;
}

// 10 ---------------------------------------------------------------
// Return the lowest fair paid by any passenger. The fare is missing 
// for some passengers you'll need to filter this out! 

const getMinFare = (data) => {
	const Fares = data.filter(item => item.fields.fare !== undefined);
	if (Fares.length === 0) {
		return null;
	}
	const minFare = Math.min (...Fares.map(item => item.fields.fare));
	return minFare;
}

// 11 ---------------------------------------------------------------
// Return the highest fare paid by any passenger. Some of the 
// passengers are missing data for fare.

const getMaxFare = (data) => {
	const validFares = data.filter(item => item.fields.fare !== undefined);
	if (validFares.length === 0) {
		return null;
	}
	const maxFare = Math.max(...validFares.map(item => item.fields.fare));
	return maxFare;
}

// 12 ---------------------------------------------------------------
// Return the count of passengers by gender. 

const getPassengersByGender = (data, gender) => {
	const passengers = data.filter(item => item.fields.sex === gender);
	return passengers.length;
}

// 13 ---------------------------------------------------------------
// Return the number of passengers who survived by gender. 

const getSurvivorsByGender = (data, gender) => {
	const survivors = data.filter(item => item.fields.sex === gender && item.fields.survived === "Yes");
	return survivors.length;
}

// 14 ---------------------------------------------------------------
// Return the number of passengers who did not survived by gender. 

const getCasualitiesByGender = (data, gender) => {
	const casualties = data.filter(item => item.fields.sex === gender && item.fields.survived === "No");
	return casualties.length;
}

// 15 --------------------------------------------------------------
// Return the total of all fares paid. 
// Add up fares and return number but make sure to filter
// the records of the passengers that are missing

const getTotalFare = (data) => {
	const validFares = data.filter(item => item.fields.fare !== undefined);
	const totalFare = validFares.reduce((sum, item) => sum + item.fields.fare, 0);
	return totalFare;
}

// 16 --------------------------------------------------------------
// Return the average fare paid.
// Add up fares and return number but make sure to filter
// the records of the passengers that are missing a fare.
const getAverageFare = (data) => {
	const validFares = data.filter(item => item.fields.fare !== undefined);
	const totalFare = validFares.reduce((sum, item) => sum + item.fields.fare, 0);
	const averageFare = totalFare / validFares.length;
	return averageFare;
}

// 17 --------------------------------------------------------------
// Return the median fare. The median is the value equal distance
// from the minimum and maximum values. 

const getMedianFare = (data) => {
	const validFares = data.filter(item => item.fields.fare !== undefined);
	const sortedFares = validFares.map(item => item.fields.fare).sort((a, b) => a - b);
	const length = sortedFares.length;

	if (length === 0) {
		return 0;
	}

	const middleIndex = Math.floor(length / 2);
	
	if (length % 2 === 0) {
		const sumMiddleValues = sortedFares[middleIndex -1 ] + sortedFares[middleIndex];
		return sumMiddleValues / 2;
	} else {
		return sortedFares[middleIndex];
	}
}

// 18 --------------------------------------------------------------
// Return the average age of all passengers. 

const getAverageAge = (data) => {
	const validAges = data.filter(item => item.fields.age !== undefined);
	const totalAge = validAges.reduce((sum, item) => sum + item.fields.age, 0);
	const averageAge = totalAge / validAges.length;
	return averageAge;
}

// 19 --------------------------------------------------------------
// Return the median age from passengers. 

const getMedianAge = (data) => {
	const validAges = data.filter(item => item.fields.age !== undefined);
	const sortedAges = validAges.map(item => item.fields.age).sort((a, b) => a - b);
	const length = sortedAges.length;

	if (length === 0) {
		return 0;
	}

	const middleIndex = Math.floor(length / 2);

	if (length % 2 === 0) {
		const sumMiddleValues = sortedAges[middleIndex - 1] + sortedAges[middleIndex];
		return sumMiddleValues / 2;
	} else {
		return sortedAges[middleIndex];
	}
}

// 20 --------------------------------------------------------------
// Add up all the ages for the gender and divide by total number.

const getAverageAgeByGender = (data, gender) => {
	const validAges = data.filter(item => item.fields.age !== undefined && item.fields.sex === gender);
	const totalAge = validAges.reduce((sum, item) => sum + item.fields.age, 0);
	const averageAge = totalAge / validAges.length;
	return averageAge;
}

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports = {
	getTotalPassengers,
	getSurvivorCount,
	getCasualityCount,
  	countPassengersInClass,
  	getSurvivorCountForClass,
	getCasualityCountForClass,
	getMinAge,
	getMaxAge,
	getEmbarkedCount,
	getMaxFare,
	getMinFare,
	getPassengersByGender,
	getSurvivorsByGender,
	getCasualitiesByGender,
	getTotalFare,
	getAverageFare,
	getMedianFare,
	getAverageAge,
	getMedianAge,
	getAverageAgeByGender
}
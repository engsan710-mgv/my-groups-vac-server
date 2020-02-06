/**
 * 
 */
exports.main = function (req, res) {
	var data = getData();
	//TODO - How do I verify the data before returning?
	res.send(JSON.stringify(data));
}


function getData() {
	let members = [
		{ first_name: 'Emma', last_name: 'SMITH', vacation: [] },
		{ first_name: 'Olivia', last_name: 'JOHNSON', vacation: [] },
		{ first_name: 'Noah', last_name: 'WILLIAMS', vacation: [] },
		{ first_name: 'Liam', last_name: 'BROWN', vacation: [] },
		{ first_name: 'Sophia', last_name: 'JONES', vacation: [] },
		{ first_name: 'Mason', last_name: 'MILLER', vacation: [] },
		{ first_name: 'Ava', last_name: 'DAVIS', vacation: [] }, 
		{ first_name: 'Jacob', last_name: 'GARCIA', vacation: [] },
		{ first_name: 'William', last_name: 'RODRIGUEZ', vacation: [] },
		{ first_name: 'Isabella', last_name: 'WILSON', vacation: [] },
		{ first_name: 'Ethan', last_name: 'MARTINEZ', vacation: [] }, 
		{ first_name: 'Mia', last_name: 'ANDERSON', vacation: [] }, 
		{ first_name: 'James', last_name: 'TAYLOR', vacation: [] }, 
		{ first_name: 'Alexander', last_name: 'THOMAS', vacation: [] },
		{ first_name: 'Michael', last_name: 'HERNANDEZ', vacation: [] },
		{ first_name: 'Benjamin', last_name: 'MOORE', vacation: [] },
		{ first_name: 'Elijah', last_name: 'MARTIN', vacation: [] }, 
		{ first_name: 'Daniel', last_name: 'JACKSON', vacation: [] }, 
		{ first_name: 'Aiden', last_name: 'THOMPSON', vacation: [] },
		{ first_name: 'Logan', last_name: 'WHITE', vacation: [] },
		{ first_name: 'Matthew', last_name: 'LOPEZ', vacation: [] },
		{ first_name: 'Abigail', last_name: 'LEE', vacation: [] },
		{ first_name: 'Lucas', last_name: 'GONZALEZ', vacation: [] }
	]
	
	 members.forEach( member => {
		 addRandomVacation(member);
	 });
	 	
	return members;
}


function addRandomVacation(member) {
	let vacationDays = getRandomInt(10) + 1;
	for(let i= 0 ; i < vacationDays ; i++) {
		let year = 2020;
		let month = getRandomInt(12);
		let day = getRandomMonthDay(month);
		member['vacation'].push(new Date(year,month,day));
	}
	member['vacation'].sort((a,b) => a - b)
}


function getRandomMonthDay(year, month) {
	let isLeapYear = leapYear(year);
	let numberOfDays = 31;
	
	if (month == 1 && isLeapYear) {
		numberOfDays = 29;
	} else if (month == 1 && !isLeapYear) {
		numberOfDays = 28;
	} else if (month == 3 || month == 5 || month == 8 || month == 10) {
		numberOfDays = 30;
	}
	
	return getRandomInt(numberOfDays);
}


function leapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}


function getRandomInt(maxValue) {
	return Math.floor(Math.random() * maxValue);
}
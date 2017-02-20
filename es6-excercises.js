//ES6 Features Excercise

//Const Example (calculate wavelength based on frequency)
let freq = 20;
function waveLengthCalc(freq) {

	const SPEED_OF_SOUND = 340;
	return [SPEED_OF_SOUND / freq, (SPEED_OF_SOUND / freq) * 100];
}

if (freq > 340) {
	console.log(`
	The wavelength of a ${freq}Hz tone is ${waveLengthCalc(freq)[1]} centimeters.`);

} else {
	console.log(`
	The wavelength of a ${freq}Hz tone is ${waveLengthCalc(freq)[0]} meters.`);
}


//Arrows Example (calcualte age based on birth year)
var yearsOfBirth = [1987, 1999, 1984, 1934, 1967, 1923, 2001];

_.map(yearsOfBirth, (age) => {
	console.log(`A person born in ${age} would be ${2017 - age} years old.`);
});


//Template Strings Examples (rave about template strings)

let tempStrings = ["good", "great", "fantastic", "the best thing since sliced bread"];
let stringUsage = _.random(1, 100);

console.log(
	`Template strings are ${tempStrings[_.random(0,_.size(tempStrings) - 1)]}!

	They take into account newlines.

	I use template strings ${stringUsage} times a day.
	Thats ${stringUsage * 7} times a week, ${stringUsage * 28} times a month and ${stringUsage * 365.2422} times a year!`
	);

// Module Example (import random cat function)
import {randomCat} from './functions';



//Destructuring Array Example
//generate array of ten random times between 1 and 20
let randomisedTimes = _.map(_.fill(Array(10), 1), (times) => {
	return times * _.random(1, 20);
})

//sort the times into ascending order
let orderedTimes = _.sortBy(randomisedTimes);

// Assing the lowest three values to varianles a,b and c
let [first, second, third] = orderedTimes;
console.log(`The fastest times are: ${first}, ${second} and ${third}.`);


//Object Defaults (dog creating fucntion with defaults)
function createDog (name, options = {}) {
	let defaults = {
		breed : "Sausage Dog",
		length : "4ft",
		gender : "male",
		colour : "Brown",
	}

	let result = Object.assign({}, defaults, options);
	return [name, result];
}

let dogOptions = {'breed' : "Poodle", 'length' : '1ft', 'gender' : 'female', 'colour' : 'pink'};

console.log(`${createDog("Dan", dogOptions)[0]} the dog:`);
console.log(JSON.stringify(createDog("Dan", dogOptions)[1]));


//Rest and Spread Examples (personal average time)
//Rest
function personalAverage(name, ...times) {
	let personalAverage = _.sum(times) / _.size(times);
	return [name, personalAverage];
}

let alexAverage = personalAverage("Alex", 45, 34, 60, 54);

//Spread
function displayAverage(name, averageTime) {
	console.log(`${name}'s average time is ${averageTime}`);

}
//call displayAverage function and spread alexAverage array for args
displayAverage(...alexAverage);


//Class and sub-class example (create human and human child)

class Human {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	concatNames() {
		return `The humans name is: ${this.firstName} ${this.lastName}`;
	}
}

//Create instance of class
let me = new Human('Dan', 'Ellin');
console.log(me.concatNames());

//Inherit from human class

class humanChild extends Human {
	constructor(firstName, lastName, age) {
		super(firstName, lastName);
		this.age = age;
	}

	nameAndAge() {
		return super.concatNames() + "\n The human is " + this.age + " years old.";
	}
}

//Create instance of sub-class
let child = new humanChild('Dan', 'Ellin', 43);
console.log(child.nameAndAge());



//Object Initiliazer and Destructuring Shorthand (calcualte cat age)

function catAges (birthYear){
	let age = 2017 - birthYear;
	let humanAge;

	if (age < 1) {
		humanAge = age * 15;
	} else if (age > 1 && age < 2) {
		humanAge = (age - 1) * 24;
	} else {
		humanAge = 24 + ((age - 2) * 4);
	}

	//Object Initiliazer shorthand
	return {birthYear, age, humanAge};
}

//Destructure object
let {birthYear, age, humanAge} = catAges(2010);

console.log(`A cat born in ${birthYear} would be ${age} years old in cat years, and ${humanAge} in human years.`);


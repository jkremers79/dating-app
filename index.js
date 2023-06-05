'use strict';

const prompt = require('prompt-sync')();

const mockData = require('./mockData.js').data;

// Your code here

//Empty object for storing user data
const userProfile = {}

console.log(`Hej! Welcome to the Win-Winc dating app. Please provide us with your personal information so we can find a dating match for you. \n`);

while (true) {

  const firstName = prompt("What is your first name? ");

  if (firstName === "") {
    console.log("Please provide your first name");
    continue;
  }

  else {
    userProfile.first_name = firstName;
    break;
  }

}

while (true) {

  const lastName = prompt("What is your last name? ");

  if (lastName === "") {
    console.log("Please provide your last name");
    continue;
  }

  else {
    userProfile.last_name = lastName;
    break;
  }

}

while (true) {

  const age = Number(prompt("What is your age? "));

  if (Number.isNaN(age) || age === "") {
    console.log("Please provide your age");
    continue;
  }

  else {
    userProfile.age = age;
    break;
  }

}

while (true) {

  const gender = prompt("What is your gender (M/F/X)? ");

  if (
    gender === "M"
    || gender === "F"
    || gender === "X"
  ) {
    userProfile.gender = gender;
    break;
  }

  else {
    console.log("Please provide your gender (M/F/X)")
    continue;
  }

}

while (true) {

  const genderInterest = prompt("Which gender are you interested in? (M/F/X/B) ");

  if (
    genderInterest === "M"
    || genderInterest === "F"
    || genderInterest === "X"
    || genderInterest === "B"
  ) {
    userProfile.gender_interest = genderInterest;
    break;
  }

  else {
    console.log("Please provide which gender (M/F/X/B) you're interested in");
    continue;
  }

}

while (true) {

  const location = prompt("Where do you live? (city/rural) ");

  if (
    location === "city"
    || location === "rural"
  ) {
    userProfile.location = location;
    break;
  }

  else {
    console.log("Please provide where you live. (city/rural)");
    continue;
  }

}

//declared outside the code block so it can be accessed in other parts of the code
let minAge;
while (true) {

  minAge = Number(prompt("What is the minimum age you are interested in? "));

  if (Number.isNaN(minAge) || minAge === "") {
    console.log("Please provide the minimum age you're interested in.");
    continue;
  }

  else if (minAge < 18) {
    console.log("The minimum age has to be at least 18.");
  }

  else {
    userProfile.min_age_interest = minAge;
    break;
  }

}

while (true) {

  const maxAge = Number(prompt("What is the maximum age you are interested in? "));

  if (Number.isNaN(maxAge) || maxAge === "") {
    console.log("Please provide the maximum age you're interested in.");
    continue;
  }

  else if (maxAge < 18) {
    console.log("The maximum age has to be at least 18.");
  }

  else if (maxAge <= minAge) {
    console.log(`The maximum age has to be higher than the minimum age you provided (${minAge}).`);
  }

  else {
    userProfile.max_age_interest = maxAge;
    break;
  }

}

//Destructering the 'userProfile' object values in variables.
const {

  first_name: userFirstName,
  age: userAge,
  min_age_interest: userMinAge,
  max_age_interest: userMaxAge,
  location: userLocation,
  gender: userGender,
  gender_interest: userGenderInterest

} = userProfile;

//Array for storing the matches' names, so they can be displayed later.
const matchesFirstNames = [];


//Start of comparison program
for (const match of mockData) {

  //Destructering the object 'match' values in variables.
  const {

    first_name: matchFirstName,
    age: matchAge,
    min_age_interest: matchMinAge,
    max_age_interest: matchMaxAge,
    location: matchLocation,
    gender: matchGender,
    gender_interest: matchGenderInterest

  } = match;


  //Compare user and match for matching conditions.
  if (userAge >= matchMinAge
    && userAge <= matchMaxAge) { }
  else { continue; }


  if (matchAge >= userMinAge
    && matchAge <= userMaxAge) { }
  else { continue; }


  if (matchLocation === userLocation) { }
  else { continue; }


  if (userGenderInterest === "B"
    && (matchGender === "F"
      || matchGender === "M")) {

  } else if (userGenderInterest === "F"
    && matchGender === "F") {

  } else if (userGenderInterest === "M"
    && matchGender === "M") {

  } else if (userGenderInterest === "X"
    && matchGender === "X") {

  } else { continue; }


  if (matchGenderInterest === "B"
    && (userGender === "F"
      || userGender === "M")) {
    matchesFirstNames.push(matchFirstName);

  } else if (matchGenderInterest === "F"
    && userGender === "F") {
    matchesFirstNames.push(matchFirstName);

  } else if (matchGenderInterest === "M"
    && userGender === "M") {
    matchesFirstNames.push(matchFirstName);

  } else if (matchGenderInterest === "X"
    && userGender === "X") {
    matchesFirstNames.push(matchFirstName);

  } else { continue; }

}
//End of comparison program


//Display match information

const numberOfMatches = matchesFirstNames.length;

console.log(`\n`);

if (numberOfMatches > 0) {
  console.log(`${userFirstName}, you have ${numberOfMatches} match(es)!`);
}

//seperating the first matches from the last one, and storing them in a string.
const firstMatchesNames = matchesFirstNames.slice(0, -1).join(', ');
const lastMatchName = matchesFirstNames.slice(-1).join('');


if (numberOfMatches < 1) {
  console.log("You have no matches");
}
else if (firstMatchesNames === "" && lastMatchName !== "") {
  console.log(`You have matched with ${lastMatchName}.`);
}
else {
  console.log(`You have matched with ${firstMatchesNames} and ${lastMatchName}.`);
}
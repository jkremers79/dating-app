'use strict';

const mockData = require('./mockData.js').data;

// Your code here

//Empty object for storing user data
const userProfile = {}

console.log(`Hej! Welcome to the Win-Winc dating app. Please provide us with your personal information so we can find a dating match for you. \n`);

while (true) {

  const firstName = prompt("What is your first name?");

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

  const lastName = prompt("What is your last name?");

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

  const age = Number(prompt("What is your age"));

  if (Number.isNaN(age)) {
    console.log("Please provide your age");
    continue;
  }

  else if (age == "") {
    console.log("Please provide your age");
    continue;
  }

  else {
    userProfile.age = age;
    break;
  }

}

while (true) {

  const gender = prompt("What is your gender (M/F/X)?");

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

  const genderInterest = prompt("Which gender are you interested in? (M/F/X/B)");

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

  const location = prompt("Where do you live? (city/rural)");

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

  minAge = Number(prompt("What is the minimum age you are interested in?"));

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

  const maxAge = Number(prompt("What is the maximum age you are interested in?"));

  if (Number.isNaN(maxAge)) {
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

//storing object 'userProfile' values in strings for comparison
const userFirstName = userProfile.first_name;
const userAge = userProfile.age;
const userMinAge = userProfile.min_age_interest;
const userMaxAge = userProfile.max_age_interest;
const userLocation = userProfile.location;
const userGender = userProfile.gender;
const userGenderInterest = userProfile.gender_interest

//Array for storing the matches' names, so they can be displayed later.
const matchesFirstNames = [];

for (const match of mockData) {

  //storing object 'match' values in strings for comparison
  const matchFirstName = match.first_name;
  const matchAge = match.age;
  const matchMinAge = match.min_age_interest;
  const matchMaxAge = match.max_age_interest;
  const matchLocation = match.location;
  const matchGender = match.gender;
  const matchGenderInterest = match.gender_interest;


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

const numberOfMatches = matchesFirstNames.length;

console.log(`\n`);

console.log(`${userFirstName}, you have ${numberOfMatches} match(es)!`);

//seperating the first matches from the last one
const firstMatches = matchesFirstNames.slice(0, -1);
const lastMatch = matchesFirstNames.slice(-1);

//storing the values of 'firstMatches' and 'lastMatch' arrays in strings.
const firstMatchesNames = firstMatches.join(', ');
const lastMatchName = lastMatch.join('');

if (firstMatchesNames === "" && lastMatchName === "") {
  console.log("You have no matches");
}
else if (firstMatchesNames === "" && lastMatchName !== "") {
  console.log(`You have matched with ${lastMatchName}.`);
}
else {
  console.log(`You have matched with ${firstMatchesNames} and ${lastMatchName}.`);
}
const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const allNames = characters.map((char) => char.name);
console.log('allNames');
console.log(allNames);

//2. Get array of all heights
const allHeights = characters.map((char) => char.height);
console.log('allHeights');
console.log(allHeights);

//3. Get array of objects with just name and height properties
const justNameAndHeight = allNames + ' ' + allHeights;
console.log('justNameAndHeight');
console.log(justNameAndHeight);

//4. Get array of all first names
const justFirstNamesGetter = characters.map((char) => char.name.split(" ")[0]);
console.log('justFirstNamesGetter');
console.log(justFirstNamesGetter);

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***

//1. Get characters with mass greater than 100
const greaterThan100 = characters.filter((charac) => charac.mass > 100);
console.log('greaterThan100');
console.log(greaterThan100);

//2. Get characters with height less than 200
const filterHeightLessThan200 = characters.filter((charac) => charac.height < 200);
console.log("filterHeightLessThan200");
console.log(filterHeightLessThan200);

//3. Get all male characters
const allMaleCharacters = characters.filter((charac) => charac.gender === "male");
console.log("allMaleCharacters");
console.log(allMaleCharacters);

//4. Get all female characters
const allFemaleCharacters = characters.filter((charac) => charac.gender ==="female");
console.log("allFemaleCharacters");
console.log(allFemaleCharacters);


//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
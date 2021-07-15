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
console.log('MAP - Get array of all names');
console.log(allNames);

//2. Get array of all heights
const allHeights = characters.map((char) => char.height);
console.log('MAP - Get array of all heights');
console.log(allHeights);

//3. Get array of objects with just name and height properties
const justNameAndHeight = characters.map((char) => {
  return char.name + ' ' + char.height 
});
console.log('MAP - Get array of objects with just name and height properties');
console.log(justNameAndHeight);

//4. Get array of all first names
const justFirstNamesGetter = characters.map((char) => char.name.split(" ")[0]
);
console.log('MAP - Get array of all first names');
console.log(justFirstNamesGetter);


//***REDUCE***

//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0); 
console.log('REDUCE - Get total mass of all characters');
console.log(totalMass);

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0);
console.log('REDUCE - Get total height of all characters');
console.log(totalHeight);

//3. Get total number of characters by eye color
const eyeColorCounter = characters.reduce((acc, cur) => {
  const color = cur.eye_color;
  if(acc[color]) {
    acc[color]++;
  }else {
    acc[color] = 1;
  }
  return acc;
}, {})
console.log('REDUCE - Get total number of characters by eye color');
console.log(eyeColorCounter);

//4. Get total number of characters in all the character names
const characterCounterForNames = characters.reduce((acc, cur) => acc + cur.name.length, 0);
console.log('REDUCE - Get total number of characters in all the character names');
console.log(characterCounterForNames);


//***FILTER***

//1. Get characters with mass greater than 100
const greaterThan100 = characters.filter((charac) => charac.mass > 100);
console.log('FILTER - Get characters with mass greater than 100');
console.log(greaterThan100);

//2. Get characters with height less than 200
const filterHeightLessThan200 = characters.filter(
(charac) => charac.height < 200
);
console.log("FILTER - Get characters with height less than 200");
console.log(filterHeightLessThan200);

//3. Get all male characters
const allMaleCharacters = characters.filter(
(charac) => charac.gender === "male"
);
console.log("FILTER - Get all male characters");
console.log(allMaleCharacters);

//4. Get all female characters
const allFemaleCharacters = characters.filter(
(charac) => charac.gender === "female"
);
console.log("FILTER - Get all female characters");
console.log(allFemaleCharacters);


//***SORT***

//1. Sort by mass
const sortByMass = characters.sort((a, b) => a.mass - b.mass);
console.log("SORT - Sort by mass");
console.log(sortByMass);

//2. Sort by height
const sortByHeight = characters.sort((a, b) => a.height - b.height);
console.log("SORT - Sort by height");
console.log(sortByHeight);

//3. Sort by name
const sortingNames = characters.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }else{
    return 1;
  }
});
console.log('SORT - Sort by name')
console.log(sortingNames);

//4. Sort by gender
const sortByGender = characters.sort((a, b) => {
  if (a.gender === 'female') return -1;
  return 1;
});
console.log("SORT - Sort by gender");
console.log(sortByGender);


//***EVERY***

//1. Does every character have blue eyes?
const hasBlueEyes = (char) => {
  return char.eye_color === 'blue'
}
console.log('EVERY - Does every character have blue eyes?');
console.log(characters.every(hasBlueEyes));

//2. Does every character have mass more than 40?
const massIsOver40 = (char) => {
  return char.mass > 40
}; 
console.log('EVERY - Does every character have mass more than 40?');
console.log(characters.every(massIsOver40));

//3. Is every character shorter than 200?
const shorterThan200 = (char) => {
  return char.height < 200
};
console.log('EVERY - Is every character shorter than 200?');
console.log(characters.every(shorterThan200));

//4. Is every character male?
const isMale = (char) => {
  return char.gender === 'male'
};
console.log('EVERY - Is every character male?');
console.log(characters.every(isMale));


//***SOME***

//1. Is there at least one male character?
console.log('SOME - Is there at least one male character?')
console.log(characters.some(isMale))

//2. Is there at least one character with blue eyes?
console.log('SOME - Is there at least one character with blue eyes?')
console.log(characters.some(hasBlueEyes))

//3. Is there at least one character taller than 210?
const tallerThan210 = (char) => char.height > 210;
console.log('SOME - Is there at least one character taller than 210?')
console.log(characters.some(tallerThan210))

//4. Is there at least one character that has mass less than 50?
const massIslessThan50 = (char) => char.mass < 50; 
console.log('SOME - Is there at least one character that has mass less than 50?')
console.log(characters.some(massIslessThan50))
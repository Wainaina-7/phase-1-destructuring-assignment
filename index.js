const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner

c// 1. Destructure farm animals by sound
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Assign four animals: bessie, dolly, babe, little
const [bessie, dolly, babe, little] = farmAnimals.split(' ');

// 3. Assign animals after little chicken leaves
const [newBessie, newDolly, newBabe] = farmAnimals.split(' ');
const blackAndWhite = newBessie; // cow
const black = newDolly; // sheep
const pink = newBabe; // pig

// 4. Destructure colors into variable names
const [r, o, y, g, b, i, v] = colors;

// 5. Remove indigo and destructure other colors
const [red, orange, yellow, green, blue, , violet] = colors;

// 6. Assign indigo separately
const [indg] = colors.slice(5, 6);

// 7. Destructure muppet object
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure songs and Kermit's details from nested muppet object
const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;

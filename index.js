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
  nestedPartner: "Miss Piggy"
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const animals=['cow','horse','sheep','pig','chicken']
const[moo,neigh,baa,oink,cluck] = animals
console.log(moo,neigh,baa,oink,cluck)

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const domestic =['cow','sheep','pig','chicken']
const[bessie,dolly,babe,little] = domestic
console.log(bessie,dolly,babe,little)

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const domestic1 =['cow','sheep','pig',]
const[blackAndWhite,black,pink] = domestic1
console.log(blackAndWhite,black,pink)

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const color3 =['red','orange','yellow','green','blue','indigo','violet']
const[red,orange,yellow,green,blue,indigo,violet] = color3
console.log(red,orange,yellow,green,blue,indigo,violet)

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const color1 =['red','orange','yellow','green','blue','violet']
const[r,o,y,g,b,v] = color1
console.log(r,o,y,g,b,v)

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const color2=["indigo"]
const[indg]=color2
console.log(indg)
// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
const vaNames=["Miss Piggy","pink","Never Before, Never Again","Cast member of The Muppet Show","Kermit"]
const[muppetName,color,song,job,partner] =vaNames
console.log(muppetName,color,song,job,partner)

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const nestedMuppet1=['Moving Right Along','I Hope That Something Better Comes Along','Host of The Muppet Show','Miss Piggy']
const[song2,song4,nestedJob,nestedPartner]=nestedMuppet1
console.log(song2,song4,nestedJob,nestedPartner)
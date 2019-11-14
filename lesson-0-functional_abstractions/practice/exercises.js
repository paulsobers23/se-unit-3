// Number 1
let fellows = ['paul','peter','devonte','mark','emanuel','carmen','anne','laisha','cielo','stephanie'];
fellows.forEach(function (names) {
     console.log(names);
}); 

// Number 2
const madFellows = [];
 fellows.forEach(function (names) {
 console.log (`${names.toUpperCase()}!!!`) ;
    madFellows.push(names);
});

// Number 3
const cFellows = [];
fellows.forEach(function(names) {
     if(names.charCodeAt() === 67 || names.charCodeAt() === 99 ){
         cFellows.push(names);
     }
});
console.log(cFellows);

// Number 4
const headAss = (str) => {
    let word = str.split('');
    let wordArr = [];
 word.forEach(function (character, i){
 if (i % 2 === 0){
     wordArr.push(character.toUpperCase());
 } else if(i % 2 !== 0){
     wordArr.push(character.toLowerCase());
 }
});
 return wordArr.join('');
}
headAss('hello word');

// Number 5
const squared = function(numbers){
  let numArray = [];
    numbers.map(function(nums){
       numArray.push(nums * nums);
    });
     return numArray;
}
squared([1,2,3,4,5]);

// Number 6
let wordArr = ['dog','cat','worm','bug']
const pluralize = function(words){
  let newArr = [];
    wordArr.map(function(word){
        newArr.push(`${word}s`);
    });
    return newArr;
}
pluralize(wordArr);

// Number 7
const songs = [
   {song: 'Phenom', artist: 'Alex Mali'},
   {song: 'Too Deep', artist: 'dvsn'},
   {song: 'FireFly', artist: 'Mura Masa'}

];
const songBy = function(songs) {
  let songArr =[];
  songs.map(function(song){
      songArr.push(`${song.song} by ${song.artist},`);
  }); 
  return songArr; 
};
songBy(songs);

// Number 8
 const users = [
    { firstName: 'Homer', lastName: 'Simpson' },
    { firstName: 'Marge', lastName: 'Simpson' },
    { firstName: 'Bart', lastName: 'Simpson' },
    { firstName: 'Lisa', lastName: 'Simpson' },
    { firstName: 'Maggie', lastName: 'Simpson' }
];
const firstNames = function(users){
  let firstNameArr = [];
  users.map(function(user){
         firstNameArr.push(`${user.firstName}`);
  }); 
  return firstNameArr;
};
firstNames(users);


// Number 9
const fullNames = function(users){
  let fullNameArr = [];
  users.map(function(user){
         fullNameArr.push(`${user.firstName} ${user.lastName}`);
  }); 
  return fullNameArr;
};
fullNames(users);

// #10 Need to be done , also add values to return array questions
const products =  [
  ['Dark Chocolate Crunchies', 4.11, 3],
  ['Peppermint Poppers', 0.88, 1],
  ['Banana Bunches', 2.33, 2]
];
const toObject = function(products){
 return products.map(function(value){
   return {
     name:value[0],
     price:value[1],
     quantity:value[2]
   };
 });
};
toObject(products);


// Number 11
const lessThanThen = function(numbers){
  let num = numbers.filter(number => number < 10);
  return num;
};

lessThanThen([1, 5, 12, 18, 94, 3, 16]);

// Number 12
const onlyEvens = function(numbers){
  let num = numbers.filter(number => number % 2 === 0);
  return num;
};
onlyEvens([25, 16, 12, 99, 8, 37]);

// Number 13
const onlyOddWords = function(words){
  let oddWord = words.filter(word => word.length % 2 !== 0);
  return oddWord;
}
onlyOddWords(['hello', 'my', 'name', 'is', 'alexa']);

// Number 15
const onlyPlural = function(words){
  let pluralArr = [];
  let plural = words.filter(function(word){
    if(word.endsWith('s')){
      pluralArr.push(word);
    }
   });
  return pluralArr;
}
onlyPlural(['dogs', 'cat', 'humans', 'kyle']);


// Number 16
const characters = [
  { character: 'Superman', hero: true },
  { character: 'Sinestro', hero: false },
  { character: 'Wonder Woman', hero: true },
  { character: 'Lex Luthor', hero: false },
  { character: 'Green Lantern', hero: true }
];

const isHero = function (chars){
  let heroArray = [];
  let hero = characters.filter(function(character){
    if(character.hero === true){
      heroArray.push(character);
    }
  });
  return heroArray;
};
isHero(characters);


// Number 17 
const sum = function(numbers){
  let total = numbers.reduce((acc,number) => acc + number);
  return total;
};
sum([2, 4, 6]);

// Number 18
const product = function(numbers){
  let total = numbers.reduce((acc,number) => acc * number);
  return total;
};
product([2, 4, 6]);


// Number 19
const stringConcat = function(strings){
 return strings.reduce(function(sentenceStr, value){
    return `${sentenceStr} ${value}`
  });
}

stringConcat(['Hello', 'my', 'name', 'is', 'Alexandra']);


// Number 20
const users2 = [
  { fullName: 'George Washington', email: 'george@us.gov' },
  { fullName: 'John Adams', email: 'john@us.gov' },
  { fullName: 'Thomas Jefferson', email: 'thomas@us.gov' },
  { fullName: 'James Madison', email: 'james@us.gov' }
];

const createEmailObject = function(users) {
  return users2.reduce(function(userNames,user) {
    userNames[user.fullName] = user.email;
     return userNames;
  }, {} );
};
createEmailObject(users2);


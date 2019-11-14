let fellows = ['paul','peter','devonte','mark','emanuel','carmen','anne','laisha','cielo','stephanie'];
fellows.forEach(function (names) {
     console.log(names);
}); 

const madFellows = [];
 fellows.forEach(function (names) {
 console.log (`${names.toUpperCase()}!!!`) ;
    madFellows.push(names);
});

const cFellows = [];
fellows.forEach(function(names) {
     if(names.charCodeAt() === 67 || names.charCodeAt() === 99 ){
         cFellows.push(names);
     }
});
console.log(cFellows);

const headAss = (str) => {
    let word = str.split('');
    let wordArr = [];
 word.forEach(function (character){
 if (word.indexOf(character) % 2 === 0){
     wordArr.push(character.toUpperCase());
 } else if(word.indexOf(character) % 2 !== 0){
     wordArr.push(character.toLowerCase());
 }
});
 console.log(wordArr.join(''));
}
headAss('hello word');

let numArray = [1,2,3,4,5];
const squared = function(numbers){
    numArray.map(function(nums){
        console.log (nums * 2);
    });
}
squared(numArray);

let wordArr = ['dog','cat','worm','bug']
const pluralize = function(words){
    wordArr.map(function(word){
        console.log (`${word}s`);
    });
}
pluralize(wordArr);

const songs = [
   {song: 'Phenom', artist: 'Alex Mali'},
   {song: 'Too Deep', artist: 'dvsn'},
   {song: 'FireFly', artist: 'Mura Masa'}

];
const songBy = function(songs) {
  songs.map(function(song){
        console.log(`${song.song} by ${song.artist},`); 
  });  
};
songBy(songs);

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
         console.log(`${user.firstName}`);
  }); 
};
firstNames(users);

const fullNames = function(users){
  let fullNameArr = [];
  users.map(function(user){
         console.log(`${user.firstName} ${user.lastName}`);
  }); 
};
fullNames(users);

// #10 Need to be done , also add values to return array questions

const lessThanThen = function(numbers){
  let num = numbers.filter(number => number < 10);
  return num;
};

lessThanThen([1, 5, 12, 18, 94, 3, 16]);

const onlyEvens = function(numbers){
  let num = numbers.filter(number => number % 2 === 0);
  return num;
};
onlyEvens([25, 16, 12, 99, 8, 37]);

const onlyOddWords = function(words){
  let oddWord = words.filter(word => word.length % 2 !== 0);
  return oddWord;
}
onlyOddWords(['hello', 'my', 'name', 'is', 'alexa']);







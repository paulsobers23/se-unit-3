let fellows = ['paul','peter','devonte','mark','emanuel','carmen','anne','laisha','cielo','stephanie'];
let logmyFellows = fellows.forEach(function (names) {
     console.log(names);
}); 
logmyFellows(fellows);

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
headAss('abcdef');

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

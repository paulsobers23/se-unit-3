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

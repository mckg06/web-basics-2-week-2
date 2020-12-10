
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here 
//is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product
  let question1= parseInt(prompt("Give me a number"));
  let question2= parseInt(prompt("Give me another number"));

const multiplication = (question1, question2) => {

let stored = question1;
  for (i=1; i <question2; i++){
  stored += question1
}
  return stored;
}

  multiplication(question1,question2);

const htmlTarget = document.getElementById('a-1')
htmlTarget.innerHTML = answer1





//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each 
//character of the string to determinate if the character is vowel or a consonant.
// you have to store each character on separates arrays, one for vowels 
// and the other one for consonants.
// after separating the characters concatenate both arrays. 
//ask the user if wants the vowels first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters

  var words = prompt("write something").toLowerCase().split(``);
  const vowels= ['a', 'e', 'i', 'o', 'u'];
  let userVowels= [];
  let userCons= [];

for (i=0; i< words.length; i++){
  let letter= words[i];
  if ((letter === ('a')) || (letter === 'e') || (letter ==='i') || (letter === 'o') || (letter === 'u')) {
  userVowels.unshift(letter);
} 
else (userCons.unshift(letter))



//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins

guessTheNumber  = () => {

  const player = {
    name: userName,
    lives: 4,
    fail_numbers: [],
  }
  
    var userName = prompt("What is your name?");
    let wrongAnswers=[]
    const randomNumber = Math.floor(Math.random()*40)+10;
  
    while (player.lives>0)
  {
    var numberGuess = parseInt(prompt(`Guess a number between 10 and 50!`));
    if (numberGuess != randomNumber) {
  
  alert(`that is incorrect!`);
    player.lives--;
    wrongAnswers.push(numberGuess);
  
  if (player.lives===0) {
    alert(`game over!`);
  } 

  } else {
    alert(`congrats, you got it!`);
    break
  }
  }
  }
  guessTheNumber()

const answer3 = guessTheNumber()

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3



//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"

sort = () => {

  var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
 
  var sorting= prompt(`How would you like to sort these novels? 1 for title, 2 for author, 3 for libraryID.`);

  if (sorting=='1'){
  
  library2 = library.sort((a,b) =>{
    return b.title.length- a.title.length;
  }
  )
  return `${library2[0].title}; ${library2[1].title};${library2[2].title}`
  }
  else if(sorting=='2'){
    library2 = library.sort((a,b) =>{
    return b.author.length- a.author.length;
  }
  )
  return `${library2[0].author}; ${library2[1].author};${library2[2].author}`

  } else {
  library2 = library.sort((a,b) =>{
    return b.libraryID- a.libraryID;
  }
  )
  return `${library2[0].libraryID}; ${library2[1].libraryID};${library2[2].libraryID}`
  }


}

 


alert (sort())
const answer4 = sort()

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4

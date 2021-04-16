const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]


//JS Basics

/* Ex.A
  Create a variable called "test" and assign a string to it.
*/
let test = "This is a test variable";

/* Ex.B
  Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
let sum;
let result = 10+20
sum = result;

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
let random = Math.floor(Math.random()* 20)

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
let me = {
  name: "Samuel Obeng",
  surname: "Obeng",
  age: 27,
}

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me["age"];

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
me["skills"] = ["Java", "Python", "JavaScript"];

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
me["skills"].pop();

// JS Functions

/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
let dice = function(){
  return Math.floor(Math.random()*6) + 1;
}

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
let whoIsBigger = function(num1, num2){
  let max = num1>num2 ? num1 : num2;
  return max;
}

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
let splitMe = function(word){
  return word.split(" ");
}

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
let deleteOne = function(anyWord, anyBool){
  return anyBool === true ? anyWord.slice(1) : anyWord.slice(0, anyWord.length - 1);
}

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
let onlyLetters = function(myStrings){
  const regex = /[0-9]/g;
  for(let i = 0; i<=myStrings.length; i++){
    return myStrings.replace(regex, "")
  }
}

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
let isThisAnEmail = function(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email) ? true:false;
}

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
let whatDayIsIt = function() {
  const today = new Date;
  const dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  let day = today.getDay();
  return dayList[day];
}

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
let rollTheDices = function(n) {
  let diceObject = {};
  let values = [];
  let sum;
    for(let i = 1; i<= n ; i++){
    values.push(dice())
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    sum = values.reduce(reducer);
    diceObject.sum = sum;
    diceObject.values = values
    }
    return diceObject;
}

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
const howManyDays = function(date1, date2) {      //https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
  var date1 = new Date(date1);
  var date2 = new Date(date2);
  // var Difference_In_Time = date2.getTime() - date1.getTime();
  // var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  let diffDays = parseInt((date1 - date2) / (1000 * 60 * 60 * 24), 10);
  return diffDays; 
}


// /* Ex.10
//    Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
let isTodayMyBirthday = function() {    //https://www.techiedelight.com/get-current-date-javascript/
  var today = new Date();
  var now = today.toLocaleDateString('en-US');
  if (now === "05/08/2021") {
      return true;
  }
  else {
      return false;
  }
}

console.log("Today my birthday!! : " + isTodayMyBirthday());
/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
let deleteProp = function(obj, str){

}

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
let olderMovie = function() {
 let oldMovie = movies[0];
 for(movie of movies){
   if(movie.Year < oldMovie.Year){
     oldMovie = movie;
   }
 }
 return oldMovie;
}

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
let countMovies = function() {
  return movies.length;
}

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

let onlyTheTitles = function(){
  let array = []
  for(movie of movies){
    array.push(movie.Title)
  }
  return array;
}

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
let onlyInThisMillennium = function(){
  let year = new Date
  for(movie of movies){
    if(movie.Year >= 2001 && movie.Year <= 3000){
      return movie;
    }
  }
}

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
let getMovieById = function(id) {
  for(movie of movies){
    if(movie.imdbID === id)
    return movie
  }
}
//console.log(getMovieById("tt4154796"))

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/
const sumAllTheYears = function() {
  let sum = 0;
  for (i = 0; i < movies.length; i++) {
      sum += parseInt(movies[i].Year);
  }
  return sum;
}
console.log(sumAllTheYears())

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/
let searchByTitle = function(title) {
  for(movie of movies){
    if(movie.Title.includes(title)){
      return movie
    } 
  }
}




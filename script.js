// 'Version 1'


// function pow(a, n) {

//   let b = a;

//   for (let i = 3; i < n; i++) {
//       b *= a;
//   }

//   return b;
// }

// alert(pow(2, 5));


// function random(number) {

//   return  Math.ceil(Math.random() * number);

// }

//  let number = random(220);

//  alert(number);



// 'Version 2'



let name = prompt('What is your name?');

while (name == '' || name == null ) {
  name = prompt('Yoor name, please');  

  }

  alert(name + ', I made a number from 1 to 100. Try to guess it as quickly as possible for the least number of attempts.');

  let number = 53;
  let guess = prompt('What number did I make?');
  let numberOfGuesses = 0;

  console.log(number);
  
   while (guess !=number) {
     if (guess > number)  {
        guess = prompt('Much. Try again!');
        numberOfGuesses = numberOfGuesses + 1;
     }
    if (guess !=number) {
      guess = prompt('Few. Try again!');
      numberOfGuesses = numberOfGuesses + 1;
     }
   }

   alert('You guess! This number ' + number + '. You needed ' + numberOfGuesses + ' attemps. ');


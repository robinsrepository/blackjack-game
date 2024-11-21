
// let playerName = "Robin";
// let playerChips = 145;
// Instead of the above seperate variables, you can also put these together inside of an object
// Objects exist of key-value pairs
let player = {
    name: "Robin",
    chips: 200
}
let cards = []; 
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }   
}

function startGame() {
    isAlive = true;
    // Generate two random numbers
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    // Re-assign the cards and sum variables so that the game can start
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Black Jack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    
    messageEl.textContent = message;
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }
}


// Age exercise 1
// let age = 22;

// if (age < 21) {
//     console.log("You can not enter the club! ❌")
// } else {
//     console.log("Welcome! 🍺")
// }



// Age exercise 2
// let age = 101;

// if (age < 100) {
//     console.log("Not elegible! ❌")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King! 👑")
// } else {
//     console.log("Not elegible, you have already gotten one ❌")
// }

// Arrays - ordered list of items
// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my portfolio"
// ]

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

// let experience = [
//     "Web Developer", "Financial Auditor", "Research Assistant", "Cleanroom Operator"
// ]

// let education = [ 
//     "Web Development certificate", "BSc Informatica, software engineering"
// ]

// let skills = [
//     "HTML", "CSS", "JavaScript", "PHP", "mySQL", "CMS"
// ]

// console.log(experience[1])
// console.log(experience[2])
// console.log(experience[0])

// console.log(experience.length)


// Array - ordered list of items - composite / complex data type
// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number) and whether you like pizza (boolean)

// let me = [
//     "Robin van Kempen",
//     29,
//     true
// ]


// Push the newMessage to the messeges array and then log out the array
// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear.",
//     "🙌"
// ]

//// 1. First "messages" exercise

// let newMessage = "Same here!"

// messages.push(newMessage)

// console.log(messages);

// How can you remove the last item in an array? Try to google it!

// messages.pop() // Found it in my JJ book

// console.log(messages);

//// 2. Second "messages" exercise

// DRY - Don't repeat yourself
// console.log(messages[0]);
// console.log(messages[1]);
// console.log(messages[2]);
// console.log(messages[3]);
// console.log(messages[4]);
// console.log(messages[5]);

// for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages[i]);
// }




// Count to ten!

// We need to specify...

// Where should we START counting?
// Where should we STOP counting?
// What's the STEP SIZE we should use?


//    START          FINISH      STEP SIZE
// for ( let count = 1; count < 11; count += 1 ) {
//     console.log(count);
// }

// for ( let count = 10; count < 21; count += 1 ) {
//     console.log(count);
// }

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers
// for (let i = 10; i < 101; i += 10) {
//     console.log(i);
// }

// let cards = [7, 3, 9];

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run
// i++ increments i with 1 - it's the same as before (1 += 1) but it's a nicer and neater way to do it

// for ( let i = 0; i < cards.length; i++ ) {
//     console.log(cards[i]);
// }


// Render the sentence in the greetingEl paragraph (see index.html) using a for loop and .textContent
// let sentence = ["Hello ", "my ", "name ", "is ", "Robin"];
// let greetingEl = document.getElementById("greeting-el");

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i];
// }


// How do you keep the spaces between words, if you remove them from the array?
// let sentence = ["Hello", "my", "name", "is", "Robin"];
// let greetingEl = document.getElementById("greeting-el");

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " ";
// }



// let player1Time = 102;
// let player2Time = 107;

// function getFastesRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time;
//     } else if (player2Time < player1Time) {
//         return player2Time;
//     } else {
//         return player1Time;
//     }
// }

// let fastestRace = getFastesRaceTime();
// console.log(fastestRace);

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log out the variable

// function getTotalRaceTime() {
//     return player1Time + player2Time;
// }

// let totalTime = getTotalRaceTime();
// console.log(totalTime);



// Generate random numbers between 0 and 1
// So any number from 0.0000000000... until 0.999999999999...
// let randomNumber = Math.random();
// console.log(randomNumber);

// In this example the range is between 0.000000... to 5.9999999...
// let randomNumber = Math.random() * 6;
// console.log(randomNumber);

// let randomNumber = Math.random();
// console.log(randomNumber);

// Generate integers by rounding decimal numbers down
// In other words it removes all the decimals
// let flooredNumber = Math.floor(4.05632);
// console.log(flooredNumber);

// You can nnow combine Math.random() and Math.floor()!
// The possible numbers in the next example are 0 - 5
// let randomNumber = Math.floor(Math.random() * 6);
// console.log(randomNumber);

// Now try to make a dice, so with only the numers 1 - 6.
// let randomNumber = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber);

// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1;
//     return randomNumber;
// }

// console.log(rollDice());

// Create an object that represents an airbnb castle listing
// It should contain at least one boolean, one string, one number and one array
// Log out at least two of the keys using the dot notation
// let castle = {
//     title: "Live like a King in my Castle",
//     price: 190,
//     superhost: true,
//     images: ["img/castle1.png", "img/castle2.png"]
// }

// console.log(castle.superhost);
// console.log(castle.price);

// let person = {
//     name: "Robin",
//     age: 29,
//     country: "the Netherlands"
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country); 
// }

// logData();

// let age = 15;

// if (age < 6) {
//     console.log("free");
// } else if (age < 18) {
//     console.log("child discount");
// } else if ( age < 27) {
//     console.log("student discount");
// } else if (age < 67) {
//     console.log("full price");
// } else {
//     console.log("senior citizen discount");
// }

// let largeCountries = ["China","India","USA","Indonesia","Pakistan"];

// console.log("The 5 largest countries in the world:");

// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i]);
// }

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"];

// largeCountries.pop();
// largeCountries.push("Pakistan");

// largeCountries.shift();
// largeCountries.unshift("China");

// console.log(largeCountries);

// let dayOfMonth = 13;
// let weekday = "Friday";

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("👻");
// }

// let hands = ["rock", "paper", "scissor"];

// function getHandPosition() {
//     console.log(hands[Math.floor(Math.random() * 3)]);
// }

// getHandPosition();

// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
// let appleShelf = document.getElementById("apple-shelf");
// let orangeShelf = document.getElementById("orange-shelf");

// function getShelfStorage() {
//     for (let i = 0; i < fruit.length; i++) {
//         if (fruit[i] === "🍎") {
//             appleShelf.textContent += "🍎";
//         } else if (fruit[i] === "🍊") {
//             orangeShelf.textContent += "🍊";
//         }
//     }
// }

// getShelfStorage();

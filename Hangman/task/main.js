const input = require('sync-input');

const words = ["python", "java", "swift", "javascript"];

let gamesWon = 0;
let gamesLost = 0;

console.log("H A N G M A N")

let option = "";
do {
    console.log("Type \"play\" to play the game, \"results\" to show the scoreboard, and \"exit\" to quit:");
    option = input();
    switch (option) {
        case "play":
            play();
            break;
        case "results":
            results();
            break;
        case "exit":
            break;
    }
} while (option !== "exit");

function results() {
    console.log(`You won: ${gamesWon} times.\nYou lost: ${gamesLost} times.`);
}

function play() {
    let randomWord = words[Math.floor(Math.random() * 4)];
    let arr = randomWord.split("");

    let userGuess = Array(randomWord.length).fill("-");
    let usedLetters = new Map;
    let guessed = false;
    let preview = "";

    let attempts = 8;
    do {
        preview = "";
        for (let i = 0; i < userGuess.length; i++) {
            preview += userGuess[i];
        }

        console.log("\n" + preview + "\nInput a letter:")

        let userInput = input();
        if (userInput.match("[a-z]") && userInput.length === 1) {
            let letter = userInput.charAt(0);

            let appears = false;

            if (!usedLetters.get(letter)) {
                for (let i = 0; i < randomWord.length; i++) {
                    if (letter === randomWord.charAt(i) && letter !== userGuess[i]) {
                        userGuess[i] = randomWord.charAt(i);
                        appears = true;
                    }
                }
            } else {
                console.log("You've already guessed this letter.");
            }

            if (appears) {
                usedLetters.set(letter, letter);
            } else {
                console.log("That letter doesn't appear in the word.")
                usedLetters.set(letter, letter);
                attempts--;
            }

            let score = 0;
            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === userGuess[i]) {
                    ++score;
                }
            }

            if (score === arr.length) {
                attempts = 0;
                guessed = true;
            }
        } else if (userInput.length > 1 || userInput.length === 0) {
            console.log("Please, input a single letter")
        } else {
            console.log("Please, enter a lowercase letter from the English alphabet.");
        }
    } while (attempts > 0 && guessed === false);

    if (guessed) {
        console.log(`You guessed the word ${randomWord}!\nYou survived!`);
        gamesWon++;
    } else {
        console.log("\nYou lost!");
        gamesLost++;
    }
}

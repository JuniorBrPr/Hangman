# Hangman Game
This is a JavaScript app that simulates the game of Hangman using the sync-input library. The app allows the user to 
play Hangman and display the score.

## Running the app
To run the app, require the sync-input library and then run the app code. The app will prompt the user to enter an
action (play, results, exit). The user can enter one of these options to perform the corresponding action.

* `play`: starts a new game of Hangman. The app will choose a random word from the words array and display it to the user as
a series of dashes (one dash for each letter in the word). The user can then enter a letter and the app will check if
the letter appears in the word. If the letter appears, it will be revealed in the word. If the letter does not appear,
the user will lose an attempt. The user has a total of 8 attempts to guess the word. If the user guesses the word before
running out of attempts, they win the game and the gamesWon counter is incremented. If the user runs out of attempts,
they lose the game and the gamesLost counter is incremented.
* `results`: displays the current score to the user.
* `exit`: exits the app.

## Properties
* `words`: an array of strings that stores the words that the game can choose from.
* `gamesWon`: an integer that stores the number of games won by the user. It is initialized to 0.
* `gamesLost`: an integer that stores the number of games lost by the user. It is initialized to 0.

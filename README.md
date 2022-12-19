# Hangman
This is a hangman game implemented in JavaScript. The game has a list of words from which the player needs to guess one. The game also keeps track of the number of times the player has won and lost.

The game has a menu that is displayed in a loop until the player chooses to exit. The menu offers the options to play the game, view the scoreboard, and exit the game.

The play function starts by selecting a random word from the list of words and initializing some variables. The player is then prompted to input a letter, and the game checks if the letter appears in the word. If it does, the letter is revealed in the word and the player's score is increased. If the letter does not appear, the player's attempts are decreased. The player has a total of 8 attempts to guess the word. If the player guesses the word or runs out of attempts, the game ends and the player's win or loss count is updated.

The results function simply displays the number of times the player has won and lost.

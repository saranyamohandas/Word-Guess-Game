# Word-Guess-Game
---

Homework #3B - Word Guess Game
___

### This is a interactive game application that has been developed using HTML,CSS,bootstrap and javascript 

### Overview of the application -
* This application requires two player. One player will be the computer and user will be the other player. 
* Start page displays the rules of the game as mentioned below.
* Computer randomly generates a word each time player clicks start button.
* Application shows blanks and user has to guess the word by pressing letters via keyboard.
* Application picks up the key and if the letter is available in the word, it displays at appropriate blanks.
* Maximum 10 attempts are allowed.
* If User guesses correctly, User wins and if User fail to guess the word before after 10 attempts he loses the game.

### Overview of the script -
* Once the player clicks 'Start' button, the game starts.
* Counters are defined to track number of guesses and number of attempts remaining for the user.
* Words are randomly generated using Math function.
* Letters are captured by using dom  keyboard events.
* Blanks are generated dynamically by javascript.
* When correct letter is guessed, blanks are filled with letter dynamically.
* When player wins, Winner image is displayed whereas when player loses, loser image is displayed.
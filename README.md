Live: https://brsyvz.github.io/Tic_Tac_Toe/

### Contents:
1 - [About](#about)\
2 - [Game logic](#gl)\
3 - [Learning outcomes](#la)


<h2 id="about">About</h2>

About

This is a implementation of classic game known as "tic tac toe <a target="_blank" href="https://en.wikipedia.org/wiki/Tic-tac-toe">

The game is player vs player version. A player can play as "x" or "o".

The "x" side makes the first move and the first move starts the game.

You can clear the board any time by reset button.



<h2 id="gl">Game Logic</h2>

1-) Define an array  with 9 null locations --> Example: let boxIndex = Array(9) [ null, null, ....... null]

2-) Get the 9 div box (gameContainer children) as an array. Example: Array(9) [ div.box, div.box, ....... div.box]

3-) When user make a play, for example let's say for example user clicked the first box from the top-left, then: 

    3.1 Insert class to the clicked div depend on a turn, "x" or "o". --> Example: <div class="box x"></div>

    3.2 Inside of for loop, fill all null locations of the "boxIndex" array with the className of the div boxes. Example: boxIndex["x,"box","box","box", ....... "box"]; 

4-) Any time we click on boxes, we also check the gameboard if we have a winner or the game is tie.
    
    4.1 - Example winner check: const horizontal_1 = boxIndex[0] + boxIndex[1] + boxIndex[2]; if (horizontal_1 === "xxx") --> "X wins"
    4.2 - Draw check: if (boxIndex.includes("box") === false) "draw" gameField.style.pointerEvents = "none";
    4.3 - What above line does is, if all nine location of boxIndex filled with "x" or "o" and if we don't have a winner yet, then the game is draw.

<h2 id="la">Learning Outcomes</h2>
  

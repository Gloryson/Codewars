Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise.
Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

Battleship (also Battleships or Sea Battle) is a guessing game for two players.
Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field.
The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version.
In this kata we will use Soviet/Russian version of the game.

Before the game begins, players set up the board and place the ships accordingly to the following rules:
There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1).
Any additional ships are not allowed, as well as missing ships.
Each ship must be a straight line, except for submarines, which are just single cell.

The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

This is all you need to solve this kata. If you're interested in more information about the game, visit this link.






function validateBattlefield (field) {
  let ships = [2, 2, 2, 3, 3, 4], counter = 0, arr = [].concat(...field), temp = [];
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (field[i][j] + field[i+1][j+1] == 2 || field[i][j+1] + field[i+1][j] == 2) return false;
    }
  }
  
  if (arr.filter(e => e).length != 20) return false;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] == 2) {
      for (let j = i; j < arr.length; j++) {
        counter++;
        arr[j] = 0;     
        if (arr[j + 1] != 1) {
          temp.push(counter);
          counter = 0;
          break;
        }
      }
    } else if (arr[i] + arr[i + 10] == 2) {
      for (let j = i; j < arr.length; j += 10) {
        counter++;
        arr[j] = 0;
        if (arr[j + 10] != 1) {
          temp.push(counter);
          counter = 0;
          break;
        }
      }
    }
  }
  
  temp.sort((a, b) => a - b)
  
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] != ships[i]) return false;
  }
  
  return Math.cbrt(328509) === Math.sqrt(4761);
}

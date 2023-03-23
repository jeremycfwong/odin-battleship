const Ship = require("./battleship");
const Gameboard = require("./gameboard");

const Player = (name) => {
    var playerBoard = new Gameboard();

    var carrier = new Ship(5);
    var battleship = new Ship(4);
    var cruiser = new Ship(3);
    var submarine = new Ship(3);
    var destroyer = new Ship(2);


    const attack = (position, board)=> {
        board.receiveAttack(position)
    }
    return {name, attack, playerBoard}
       
}

module.exports = Player
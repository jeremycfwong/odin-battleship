const { Template } = require("webpack");
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

const Computer = () => {
    var computerBoard = new Gameboard();
    var hit = [];
    var locations = [];

    const computerAttack = (board) => {

        var position = Math.floor(Math.random() * 100);

        while(hit.includes(position)){
            position = Math.floor(Math.random() * 100);
        }

        board.receiveAttack(position)
        hit.push(position)
    }

    const placeShip = (ship) => {
        var directionNum = Math.round(Math.random());
        var direction = (directionNum == 0) ? "horizontal": "vertical"
        var position = Math.floor(Math.random() * 100);
        var tempLocation = []


        if (direction == 'horizontal'){
            for(let i = 0; i < ship.length; i++){
                tempLocation.push(position + i)
            }
        } else {
            for(let i = 0; i < ship.length; i++){
                tempLocation.push(position + (i * 10))
            }
        }

        if(checkValid(tempLocation)){
            locations.push(...tempLocation)
            computerBoard.placeShip(ship,position, direction)
            return;
        } else {
            placeShip(ship)
            return;
        };
    }

    const checkValid = (temp) => {
        for(let i = 0; i < temp.length; i ++){
            if(locations.includes(temp[i]) || 0 > temp[i] || temp[i] >= 100){
                return false;
            }
        }
        return true;
    }


    return {computerBoard, computerAttack, placeShip, locations}
}

module.exports = { Player, Computer};
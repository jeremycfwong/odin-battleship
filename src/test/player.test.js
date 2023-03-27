import {Player, Computer} from '../factories/player'
import Ship from '../factories/battleship'

describe('Player Function', () => {
    let player;
    let player2;
    let demoShip;

    beforeEach(() => {
        player = new Player('J');
        player2 = new Player('W');
        demoShip = new Ship(5)
    });

    it('Player name is J', () =>{
        expect(player.name).toBe('J')
    });

    it('Player attack Opponent Board', () =>{
        player.attack(50, player2.playerBoard)

        expect(player2.playerBoard.grid[50].hasHit).toBe(true)
    });
})

describe('Computer Function', () => {
    let computer;
    let demoShip

    beforeEach(() => {
        computer = new Computer();
        demoShip = new Ship(5)
    });

    
    it('Place Ship', () =>{
        computer.placeShip(demoShip)
        computer.placeShip(demoShip)
        computer.placeShip(demoShip)
        computer.placeShip(demoShip)
        computer.placeShip(demoShip)
        
        expect(computer.computerBoard.grid[computer.locations[24]].hasShip).toBe(true)
    });
})


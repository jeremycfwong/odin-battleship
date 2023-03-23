import Player from '../factories/player'
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
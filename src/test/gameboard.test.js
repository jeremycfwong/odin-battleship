
//Gameboards should be able to report whether or not all of their ships have been sunk.

const Ship = require("../factories/battleship");
const Gameboard = require("../factories/gameboard");

describe('Gameboard functions', () =>{
    let testBoard;
    let demoShip;

    beforeEach(() => {
        testBoard = new Gameboard();
        demoShip = new Ship(5)
    });
    
    it('Board Initialised', () => {
        var grid = []
        for(let i = 0; i<100; i++){
            grid.push({"hasHit": false, "hasShip": false})
        }
        
        expect(testBoard.grid).toStrictEqual(grid)
    });

    it('Board can access 13th cell', () => {
        
        expect(testBoard.grid[12]).toStrictEqual({"hasHit": false, "hasShip": false});
    });
    
    it('place a ship at 50th node horizontally', () => {
        testBoard.placeShip(demoShip,50,'horizontal')
        
        expect(testBoard.grid[50]).toStrictEqual({"hasHit": false, "hasShip": true});
        expect(testBoard.grid[51]).toStrictEqual({"hasHit": false, "hasShip": true});
        expect(testBoard.grid[52]).toStrictEqual({"hasHit": false, "hasShip": true});
        expect(testBoard.grid[53]).toStrictEqual({"hasHit": false, "hasShip": true});
        expect(testBoard.grid[54]).toStrictEqual({"hasHit": false, "hasShip": true});
    });

    it('place a ship at 45th node vertically', () => {
        testBoard.placeShip(demoShip,45,'vertically')
        
        expect(testBoard.grid[45]).toStrictEqual({"hasHit": false, "hasShip": true});
        expect(testBoard.grid[55]).toStrictEqual({"hasHit": false, "hasShip": true});
        expect(testBoard.grid[65]).toStrictEqual({"hasHit": false, "hasShip": true});
        expect(testBoard.grid[75]).toStrictEqual({"hasHit": false, "hasShip": true});
        expect(testBoard.grid[85]).toStrictEqual({"hasHit": false, "hasShip": true});
    });

    it('got hit at 50th node with a ship in it', () => {
        testBoard.placeShip(demoShip,50,'horizontal')
        testBoard.receiveAttack(50)

        expect(testBoard.grid[50]).toStrictEqual({"hasHit": true, "hasShip": true});
        expect(demoShip.getHitCount()).toBe(1);        
    });

})


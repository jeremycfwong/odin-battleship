import Ship from "../factories/battleship";


test('Battleship hit function', () => {
    var testShip = new Ship(5)
    
    expect(testShip.hit()).toBe(1);
})

test('Battleship sunk after hit', () => {
    var testShip = new Ship(1)
    testShip.hit()
    expect(testShip.isSunk()).toBe(true);
})

test('Battleship did not sunk after hit', () => {
    var testShip = new Ship(2)
    testShip.hit()
    expect(testShip.isSunk()).toBe(false);
})
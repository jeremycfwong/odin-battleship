const Gameboard = () => {
    var node = {
        hasHit: false,
        hasShip: false
    }

    var shipList = []

    var grid = [];
    for(let i = 0; i<100; i++){
        grid.push(node);
    }

    const placeShip = (ship, position, direction) => {
        var coords = []
        if (direction == 'horizontal'){
            for(let i = 0; i < ship.length; i++){
                grid[position + i].hasShip = true
                coords.push(position + i)
            }
        } else {
            for(let i = 0; i < ship.length; i++){
                grid[position + (i * 10)].hasShip = true
                coords.push(position + (i * 10))
            }
        }

        shipList.push({ship:ship, coords:coords})
    }

    const receiveAttack = (position) => {
        grid[position].hasHit = true

        if (grid[position].hasShip) {
            for(let i = 0; i < shipList.length; i++){
                if(shipList[i].coords.includes(position)){
                    shipList[i].ship.hit()
                    break;
                }
            }
        }
        
    }
    return {grid, placeShip, receiveAttack}
}

module.exports = Gameboard
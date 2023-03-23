const Ship = (length) =>{
    var hitCount = 0

    const hit = () => {
        return hitCount += 1;
    }

    const isSunk = () => {
        return (hitCount == length)
    }

    const getHitCount = () => hitCount
    
    
    return {length, getHitCount, hit, isSunk}
}

module.exports = Ship
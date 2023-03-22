const Ship = (length) =>{
    var hitCount = 0

    const hit = () => {
        hitCount += 1;
        return hitCount;
    }

    const isSunk = () => {
        return (hitCount == length)
    }
    
    return {length, hit, isSunk}
}

module.exports = Ship
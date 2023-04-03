function gameBoard(type){
    let board = document.createElement('div')
    board.setAttribute('class', 'board')
    board.setAttribute('id', type)

    for(let i = 0; i < 10; i++){
        var row = document.createElement('div');
        row.setAttribute('class', 'row')
        
        for(let j = 0; j < 10; j++){
            var node = document.createElement('div');
            node.setAttribute('class', 'node')

            var id = computeID(i,j)
            node.setAttribute('id', id)

            row.appendChild(node)
        }

        board.appendChild(row);
    }

    return board;
}


function computeID(i, j){
    return (i * 10) + j
}

export { gameBoard }




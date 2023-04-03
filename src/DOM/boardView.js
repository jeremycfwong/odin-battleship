import { gameBoard } from "./board"

function renderBoardView(){
    let boardContainer = document.createElement('div')
    boardContainer.setAttribute('class', 'board-container')

    let board = gameBoard('main')
    let board2 = gameBoard('bot')
    boardContainer.replaceChildren(board,board2);

    document.getElementById('content').appendChild(boardContainer)
}

export{renderBoardView}
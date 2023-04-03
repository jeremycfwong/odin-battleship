function renderHeader(){
    let header = document.getElementById('header')

    let headerTitle = document.createElement('h1')
    headerTitle.setAttribute('id', 'headerTitle')
    headerTitle.textContent = 'Battleship'

    let resetButton = document.createElement('button')
    resetButton.textContent = 'Reset Game'
    
    header.replaceChildren(headerTitle,resetButton);
}

export { renderHeader }
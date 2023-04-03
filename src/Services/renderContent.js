import { renderBoardView } from "../DOM/boardView";
import { renderHeader } from "../DOM/header";

function renderContent(){
    renderHeader();

    renderBoardView();
}


export{renderContent}
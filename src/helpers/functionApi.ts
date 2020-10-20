import React from "react";
import {cardsState} from "../redux/reducer/boardsReducer";
export default React.createContext({
    handleAddBoard: (title:string) => {},
    handleAddCard: (card:cardsState) => {}
});




import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";



export interface IBoardsState {
    boards:boardsState[]
}

export type  boardsState = {
    id: string,
    title: string,
    cards:Array<cardsState>
}

export type cardsState = {
    id?: string | number ,
    info:string,
}




 export const initialState:IBoardsState = {
    boards: [
        {
            id: "23",
            title: "I am board",
            cards: [
                {
                    id: "1",
                    info: "This task number one"
                },
                {
                    id: "2",
                    info: "This task number two"
                },
            ]

        },
        {
            id: "21",
            title: "I am board two",
            cards: [
                {
                    id: "12",
                    info: "This task number free"
                },
                {
                    id: "15",
                    info: "This task number four"
                },
            ]

        },
    ]
}


const boardsRedux = createSlice({
    name: "Boards",
    initialState : initialState,
    reducers: {
        addBoard(state:IBoardsState, action:PayloadAction<string>)  {
            let board = {
                id: uuid(),
                title: action.payload,
                cards: []
            }
            state.boards.push(board)
        },
        addCard(state:IBoardsState,action:PayloadAction<cardsState>) {
            const { id, info} = action.payload
            let newCard = {
                id: uuid(),
                info: info
            }
            state.boards.map((card) => {
                if(card.id === id) {
                    card.cards.push(newCard)
                }
            })
        }}
})







export default boardsRedux.reducer
export  const {addBoard, addCard } = boardsRedux.actions
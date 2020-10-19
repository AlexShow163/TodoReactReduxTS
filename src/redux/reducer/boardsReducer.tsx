import {InferActionsTypes} from '../actions/boardsAndTasksAction'
import {ADD_BOARD} from "../actionTypes";


export interface IBoardsState {
    boards:boardsState[]
}

export type  boardsState = {
    id:number,
    title: string,
    cards:Array<cardsState>
}

type cardsState = {
    id: number,
    text:string,
}




 export const initialState:IBoardsState = {
    boards: [
        {
            id: 23,
            title: "I am board",
            cards: [
                {
                    id: 1,
                    text: "This task number one"
                },
                {
                    id: 1,
                    text: "This task number one"
                },
            ]

        },
        {
            id: 21,
            title: "I am board two",
            cards: [
                {
                    id: 12,
                    text: "This task number free"
                },
                {
                    id: 15,
                    text: "This task number four"
                },
            ]

        },
    ]
}

export  function boardsReducer (state:IBoardsState= initialState, action:InferActionsTypes) {
    switch (action.type) {
        case ADD_BOARD:
            const newBoard = {
                id: action.id,
                title: action.title,
                cards: [],
            }
            return {
                ...state,
                boards:  [...state.boards,newBoard]

            }
        default:
            return state
    }
}
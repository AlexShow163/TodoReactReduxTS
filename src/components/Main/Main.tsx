import React from 'react'
import {createStyles, Grid, Theme,  makeStyles} from "@material-ui/core";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {BoardsComponent} from "../BoardsComponent/BoardsComponent"
// @ts-ignore
import {InputContainer} from "../Input/InputContainer";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuid} from "uuid";
import {RootState} from "../../redux/rootReducer";
import FunctionApi from "../../helpers/functionApi";
import {boardsState,
    cardsState, IBoardsState,
    addBoard, addCard} from "../../redux/reducer/boardsReducer";






const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(7)
        },

    }),
);


export const tasksTypes = {
    TASK_ITEM: 'TASK_ITEM'
}





 export const Main: React.FC  = ({children}) => {
     const classes = useStyles();
     const dispatch = useDispatch()
     const addBoards = (title:string) => dispatch(addBoard(title))
     const addCards = (card:cardsState) => dispatch(addCard(card))
     const {boards}:IBoardsState = useSelector((state:RootState) => state.boardsRedux)





     const handleAddBoard = (title:string) => {
         addBoards(title)
     }

     const handleAddCard = (card:cardsState) => {
         addCards(card)
     }




     return (
        <DndProvider backend={HTML5Backend}>
           <FunctionApi.Provider value={{handleAddBoard, handleAddCard}}>
               <Grid
                   container
                   alignItems="flex-start"
                   className={classes.root}
               >
                   {children}
                   {boards.map((board) => {
                      return <BoardsComponent
                           title={board.title}
                           cards={board.cards}
                           id={board.id}
                           key={board.id}
                       />
                   })}

                   <InputContainer  type="board"/>
               </Grid>
           </FunctionApi.Provider>
        </DndProvider>

    )
}
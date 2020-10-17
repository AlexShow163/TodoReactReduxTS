import React from "react";
import { Paper} from "@material-ui/core";
import {Title} from "../Title/Title";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Card} from "../Card/Card";
import {InputContainer} from "../Input/InputContainer";
import {Provider, useDispatch, useSelector} from "react-redux";
import functionApi from "../../helpers/functionApi";

import {RootState} from "../../redux/rootReducer";
import {creators} from "../../redux/actions/boardsAndTasksAction";



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listComponent: {
            backgroundColor: "rgb(3, 155, 229)",
            width: 200,
            marginRight: theme.spacing(5)
        }
    }),
);



export  const BoardsComponent:React.FC = () => {
    const classes = useStyles()
    const boardsData = useSelector((state:RootState) => state.boardsReducer.boards)
    const dispatch = useDispatch()
    const addCards = (title:string,id:string) => dispatch(creators.addCard(title,id))




    function keysToId():string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }


    const handleAddCard = (title:string) => {
        console.log('work buch')
        console.log('BOSS', title)
        // let boardId = keysToId()
        // addCards(title,boardId)
    }


    console.log(boardsData);

    return (
       <functionApi.Provider value={{handleAddCard}}>
           <Paper className={classes.listComponent}>
               <Title/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <InputContainer type='card'/>


           </Paper>
       </functionApi.Provider>
    )
}
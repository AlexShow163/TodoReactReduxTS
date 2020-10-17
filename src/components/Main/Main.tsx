import React from 'react'
import {createStyles, Grid, Theme,  makeStyles} from "@material-ui/core";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {BoardsComponent} from "../BoardsComponent/BoardsComponent"
// @ts-ignore
import {InputContainer} from "../Input/InputContainer";




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




     return (
        <DndProvider backend={HTML5Backend}>
            <Grid
                container
                alignItems="flex-start"
                className={classes.root}
            >
                {children}
                <BoardsComponent/>
                <InputContainer type="board"/>
            </Grid>
        </DndProvider>

    )
}
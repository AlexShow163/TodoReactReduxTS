import React from "react";
import {Paper} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {cardsState} from "../../redux/reducer/boardsReducer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            padding: theme.spacing(1, 1, 1, 2),
            margin: theme.spacing(1)

        }
    }),
);


export const Card:React.FC<cardsState> = ({info,id}) => {
    const classes = useStyles()


    return(
       <div>
           <Paper className={classes.card}>{info}</Paper>
       </div>
    )
}
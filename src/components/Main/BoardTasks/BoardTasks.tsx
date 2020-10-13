import React from "react";
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    title: {
        marginTop: 10,
    },

});

type cardsTasksTypes ={
    title: string,

}



export const BoardTasks: React.FC<cardsTasksTypes> = (props) => {
    const classes = useStyles()
    return (
        <Box
            width="30%"
            className="bg-frame"
        >
            <Typography className={classes.title} variant="h4">{props.title}</Typography>
            {props.children}

        </Box>
    )
}
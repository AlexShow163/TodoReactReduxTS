import React from "react";
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    title: {
        marginTop: 10,
    },

});


export const TasksInProgress: React.FC = () => {
    const classes = useStyles()

    return (
        <Box
            className="bg-frame"
            width="30%">
            <Typography  className={classes.title}  variant="h4">Задачи в процессе</Typography>
        </Box>
    )
}
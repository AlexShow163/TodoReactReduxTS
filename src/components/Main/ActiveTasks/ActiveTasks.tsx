import React from "react";
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    title: {
        marginTop: 10,
    },

});


export const ActiveTasks: React.FC = ({children}) => {
    const classes = useStyles()
    return (
        <Box
            width="30%"
            className="bg-frame"
        >
            <Typography className={classes.title} variant="h4">Активные задачи</Typography>
            <Box>
                {children}
            </Box>
        </Box>
    )
}
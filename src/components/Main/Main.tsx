import React from 'react'
import {Grid} from "@material-ui/core";



 export const Main: React.FC  = ({children}) => {
    return (
        <Grid
            container
            justify="space-between"
            alignItems="flex-start"
            className="wrap-tasks"
        >
            {children}
        </Grid>
    )
}
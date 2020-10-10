import React, {ReactNode} from 'react'
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/rootReducer";


import {Box} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        minWidth: 100,
        marginLeft: 10,
        marginRight: 10,

    },
});


export const Tasks:React.FC  = () => {
    const classes = useStyles();
    const listTasks = useSelector((state:RootState) => state.taskReducer.task)
    // console.log(listTasks)


    const listAddTasks = ():any => {
        listTasks.map((elem:any,index:number) =>{
            return (
                <Box>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h5">

                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            )

        })
    }




    return (
        <div>
            {listTasks.map((elem:any,index:number) =>{
                return (
                    <Box key={elem.id}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5">
                                    {elem.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                )

            })}
        </div>
    )
}
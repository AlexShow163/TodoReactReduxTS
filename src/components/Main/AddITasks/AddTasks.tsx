import React, { useState} from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },

        },
        button: {
            margin: theme.spacing(1),
        },
    }),
);


export const AddTasks: React.FC = () => {
    const [task, setTask] = useState<string>('')
    const classes = useStyles();

    const onChangeTaskHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value)

    }

    const onSubmitTaskHandler = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(task)
        setTask('')
    }

    const onKeyTaskHandler = (event:React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            console.log(task)
            event.preventDefault()
            setTask('')
        }
    }


    return (
        <form
            className={classes.root}
            noValidate autoComplete="off"
            onSubmit={onSubmitTaskHandler}
        >
            <TextField
                id="standard-basic"
                label="Создать задачу"
                onChange={onChangeTaskHandler}
                value={task}
                onKeyPress={onKeyTaskHandler}
            />

            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                type="submit"
            >
                Создать
            </Button>
        </form>


    )
}
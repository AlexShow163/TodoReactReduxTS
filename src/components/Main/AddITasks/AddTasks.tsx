import React, { useState} from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import {useDispatch} from "react-redux";
import {addTaskHandler} from "../../../redux/actions/tasksAction";
import {ITask} from "../../../redux/reducer/taskReducer";


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
    const dispatch = useDispatch()

    const addTaskDispatch = (item:ITask) => dispatch(addTaskHandler(item))

    const sendTaskDispatch = (item:string) => {
        let sendTask = {
            id: 1 - 0.5 + Math.random() * (1000 - 1 + 1),
            title: item,
            isDone: false
        }
        console.log(sendTask)
        addTaskDispatch(sendTask)
    }

    const onChangeTaskHandler = (event:React.ChangeEvent<HTMLInputElement>) => setTask(event.target.value)

    const onSubmitTaskHandler = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        sendTaskDispatch(task)
        setTask('')
    }
    const onKeyTaskHandler = (event:React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            sendTaskDispatch(task)
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
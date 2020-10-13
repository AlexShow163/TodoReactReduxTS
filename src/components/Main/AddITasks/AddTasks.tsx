import React, { useState} from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import {useDispatch} from "react-redux";
import { creators} from "../../../redux/actions/tasksAction";
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

type addTasksType = {
    status: string
}


export const AddTasks: React.FC<addTasksType> = (props) => {
    const [task, setTask] = useState<string>('')
    const classes = useStyles();
    const dispatch = useDispatch()

    const addTaskDispatch = (item:ITask) => dispatch(creators.addTaskHandler(item))

    const sendTaskDispatch = (item:string, status:string) => {
        let sendTask = {
            id: 1 - 0.5 + Math.random() * (1000 - 1 + 1),
            title: item,
            status: status
        }
        console.log(sendTask)
        addTaskDispatch(sendTask)
    }

    const onChangeTaskHandler = (event:React.ChangeEvent<HTMLInputElement>) => setTask(event.target.value)

    const onSubmitTaskHandler = (event:React.FormEvent<HTMLFormElement>) => {
       if(task.length === 0) {
           alert('Введите данные')
       }else {
           event.preventDefault()
           console.log(props.status)
           sendTaskDispatch(task,props.status)
           setTask('')
       }
    }
    const onKeyTaskHandler = (event:React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            if(task.length !== 0){
                sendTaskDispatch(task,props.status)
                event.preventDefault()
                setTask('')
            }
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
import React from 'react'
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/rootReducer";
import {ITask} from "../../../redux/reducer/taskReducer";



import { List, ListItem, ListItemText} from "@material-ui/core";




export const Tasks:React.FC  = () => {
    const listTasks = useSelector((state:RootState) => state.taskReducer.task)


    return (
        <List>
            {listTasks.map((elem: ITask) =>{
                return (
                    <ListItem key={elem.id} button>
                        <ListItemText primary={elem.title} />
                    </ListItem>
                )
            })}
        </List>
    )
}
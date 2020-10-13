import React from "react";

import {tasksTypes} from '../Main'
import {useDrop} from 'react-dnd'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/rootReducer";
import {ListItem, ListItemText} from "@material-ui/core";
import {ITask} from "../../../redux/reducer/taskReducer";
import {creators} from "../../../redux/actions/tasksAction";
import {cardTypeProps} from "./CardTasks";





export const TestDnd:React.FC<cardTypeProps> = (props) => {
    const listTasks = useSelector((state:RootState) => state.taskReducer.task)
    const dispatch = useDispatch()

    const finishTask = (item:ITask) => dispatch(creators.taskFinishedHandler(item))


    const itemsId = (item:any) => {
        const taskDnd = listTasks.filter((task:any) => task.id === item._id )
        taskDnd[0].status = "finish"
        finishTask(taskDnd)
        return console.log('taskDND',taskDnd)




    }



    const [{isOver}, drop] = useDrop({
        accept: tasksTypes.TASK_ITEM,
        drop: (item,monitor) => itemsId(item),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    })


    return (

        <div ref={drop}
             className={"task-finish"}
             style={{
                 backgroundColor: isOver ? "#00699c" : "#039be5"
             }}


        >
            <ListItem  >
                <ListItemText primary={props.title}/>
            </ListItem>
            {props.children}

        </div>

    )
}


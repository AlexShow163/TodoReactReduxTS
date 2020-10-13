import React from 'react'
import {Grid} from "@material-ui/core";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {ITask} from "../../redux/reducer/taskReducer";
import {CardTasks} from "./Tasks/CardTasks";
import {TestDnd} from "./Tasks/TestDnd";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";
import {AddTasks} from "./AddITasks/AddTasks";
import {BoardTasks} from "./BoardTasks/BoardTasks";


export const tasksTypes = {
    TASK_ITEM: 'TASK_ITEM'
}



 export const Main: React.FC  = ({children}) => {
     const listTasks = useSelector((state:RootState) => state.taskReducer.task)

     return (
        <DndProvider backend={HTML5Backend}>
            <Grid
                container
                justify="space-between"
                alignItems="flex-start"
                className="wrap-tasks"
            >
                {children}


                <BoardTasks title="Активные задачи  🤯 ">
                    <AddTasks
                    status={'active'}/>
                    {listTasks.map((elem:ITask) => {
                        if(elem.status === 'active') {
                            return <CardTasks
                                key={elem.id}
                                title={elem.title}
                                _id={elem.id}
                                status={elem.status}

                            />
                        }
                    })}
                </BoardTasks>
                <BoardTasks title="Выполнено 😁 ">
                    <AddTasks
                        status={'finish'}
                    />
                    {listTasks.map((elem:ITask) => {
                        if(elem.status === 'finish') {
                            return <TestDnd
                                key={elem.id}
                                title={elem.title}
                                _id={elem.id}
                                status={elem.status}
                            />
                        }
                    })}
                </BoardTasks>
            </Grid>
        </DndProvider>

    )
}
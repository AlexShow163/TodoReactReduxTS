import {ADD_TASK_HANDLER, TASK_FINISH} from "../actionTypes";
import {InferActionsTypes} from '../actions/tasksAction'

export interface ITask  {
    id: number | string,
    title: string,
    status: string,

}

const initialState =  {
    task: [
        {
            id: 1,
            title: "Task 1",
            status:  "active"
        },
        {
            id: 2,
            title: "Task 2",
            status: "active"
        },
        {
            id: 3,
            title: "Task 3",
            status: "active"},
        {
            id: 4,
            title: "Task 4",
            status:  "finish"
        },


    ]
}


export  default  function (state:any = initialState, action:InferActionsTypes ) {
    switch(action.type) {
        case ADD_TASK_HANDLER:
            return {
               task: [...state.task, action.item]
            }
        case TASK_FINISH:
            return {
                task: [...state.task, action.item]
            }
        default:
            return state

    }

}



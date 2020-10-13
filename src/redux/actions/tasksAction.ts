import {ADD_TASK_HANDLER, TASK_FINISH} from "../actionTypes";
import {ITask} from "../reducer/taskReducer";
import {ActionsTypes} from "../rootReducer";

 export type InferActionsTypes = ActionsTypes<typeof creators>


export const creators = {
     addTaskHandler:  (item:ITask) =>({type: ADD_TASK_HANDLER,item} as const),
    taskFinishedHandler: (item:ITask) => ({type: TASK_FINISH,item} as const),
}


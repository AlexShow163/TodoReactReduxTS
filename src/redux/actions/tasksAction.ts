import {ADD_TASK_HANDLER} from "../actionTypes";
import {ITask} from "../reducer/taskReducer";
import {ActionsTypes} from "../rootReducer";

 export type InferActionsTypes = ActionsTypes<typeof creators>


export const creators = {
     addTaskHandler:  (item:ITask) =>({type: ADD_TASK_HANDLER,item} as const)
}


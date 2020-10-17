import {ITask} from "../reducer/taskReducer";
import {ActionsTypes} from "../rootReducer";
import {ADD_BOARD} from "../actionTypes";

 export type InferActionsTypes = ActionsTypes<typeof creators>


export const creators = {
    //  addTaskHandler:  (item:ITask) =>({type: ADD_TASK_HANDLER,item} as const),
    addCard: (title:string,id:string) =>({type: ADD_BOARD,title,id})
}


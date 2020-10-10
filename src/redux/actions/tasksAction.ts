import {ADD_TASK_HANDLER} from "../actionTypes";
import {ITask} from "../reducer/taskReducer";


interface addTaskHandlerAction  {
    type: typeof ADD_TASK_HANDLER,
    payload: ITask,
    }

export const addTaskHandler = (item:ITask):any => {
    return {
        type: ADD_TASK_HANDLER,
        item


    }
}
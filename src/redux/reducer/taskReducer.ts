import {InferActionsTypes} from '../actions/boardsAndTasksAction'

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
        },
        {
            id: 2,
            title: "Task 2",
        },
        {
            id: 3,
            title: "Task 3",
        },
        {
            id: 4,
            title: "Task 4",
        },


    ]
}


export  default  function (state:any = initialState, action:InferActionsTypes ) {
    switch(action.type) {

        default:
            return state

    }

}



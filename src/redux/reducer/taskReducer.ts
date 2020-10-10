export interface ITask  {
    id: number,
    title: string,
    isDone: boolean

}

const initialState =  {
    task: [
        {
            id: 1,
            title: "Task 1",
            isDone: false
        },
        {
            id: 2,
            title: "Task 2",
            isDone: false
        }

    ]
}


export  default  function (state:any = initialState, action:any ) {
    switch(action.type) {
        default:
            return state

    }

}



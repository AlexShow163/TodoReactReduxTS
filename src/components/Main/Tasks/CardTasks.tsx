import React from 'react'




import { useDrag } from 'react-dnd'
import {tasksTypes} from '../Main'



import {ListItem, ListItemText} from "@material-ui/core";

 export interface cardTypeProps  {
    title:string,
    _id:number | string,
    status: string

}


export const CardTasks:React.FC<cardTypeProps>  = (props) => {





    const [{isDragging}, drag] = useDrag({
        item: {
            type: tasksTypes.TASK_ITEM,
            _id: props._id

        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })


    return (
          <ListItem ref={drag}>
              <ListItemText primary={props.title}/>
          </ListItem>



    )
}
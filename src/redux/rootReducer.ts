import {combineReducers} from "redux";
import taskReducer from './reducer/taskReducer'
import menuReducer from './reducer/menuReducer'


export const rootReducer =  combineReducers({
    taskReducer,menuReducer
})

export type RootState = ReturnType<typeof rootReducer>
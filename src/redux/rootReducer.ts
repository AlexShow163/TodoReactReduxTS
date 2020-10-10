import {combineReducers} from "redux";
import taskReducer from './reducer/taskReducer'
import menuReducer from './reducer/menuReducer'


export const rootReducer =  combineReducers({
    taskReducer,menuReducer
})

export type RootState = ReturnType<typeof rootReducer>

type PropTypes<T> = T extends {[key:string] : infer U} ? U : never

export type ActionsTypes<T extends {[key:string] : (...args:any[] ) => any}> = ReturnType<PropTypes<T>>
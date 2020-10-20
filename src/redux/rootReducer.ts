import {combineReducers} from "redux";
import menuReducer from './reducer/menuReducer'
import boardsRedux from './reducer/boardsReducer'



export const rootReducer =  combineReducers({
    menuReducer,boardsRedux,
})

export type RootState = ReturnType<typeof rootReducer>


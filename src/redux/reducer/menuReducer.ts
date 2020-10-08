import {MENU_HIDE, MENU_SHOW} from "../actionTypes";

interface menuState {
    isMenu: boolean
}

const initialMenu = {
    isMenu: false
  }



  export default function (state:menuState = initialMenu,action:any) {
    switch (action.type) {
        case  MENU_SHOW:
            return {
                ...state,
                isMenu: true

            }
        case MENU_HIDE:
            return {
                ...state,
                isMenu: false
            }
        default:
            return state
    }
  }
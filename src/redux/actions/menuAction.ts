import {MENU_HIDE, MENU_SHOW} from "../actionTypes";



type showMenuActions = {
    type: typeof MENU_SHOW
}

export const showMenu = ():showMenuActions => {
    return {
        type: MENU_SHOW,
    }
}

type hideMenuActions = {
    type: typeof MENU_HIDE
}
export const hideMenu = ():hideMenuActions => {
    return {
        type: MENU_HIDE
    }
}
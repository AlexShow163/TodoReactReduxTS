import React, {SyntheticEvent, useContext, useState} from "react";
import {Button, fade, IconButton, InputBase, Paper} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import functionApi from "../../helpers/functionApi";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";
import {log} from "util";
import {creators} from "../../redux/actions/boardsAndTasksAction";



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            margin: theme.spacing(0,1,1,1),
            padding: theme.spacing(1,1,4,1,)
        },
        btnBlock: {
            margin: theme.spacing(0,1,1,1),
        },
        btnSetting: {
            background: '#10e858',
            color: '#fff',
            "&:hover": {
                background: fade('#10e858', 0.65),
            }
        }

    }),
);


 export interface inputOpenType  {
    setOpen: (value:boolean) => void,
     type: string

}



export const InputCard:React.FC<inputOpenType> = ({setOpen,type}) => {
    const classes = useStyles()
    const [title,setTitle] = useState<string>('')
    const {handleAddCard} = useContext(functionApi)
    const boardsData = useSelector((state:RootState) => state.boardsReducer.boards)

    // const dispatch = useDispatch()
    // const addCards = (title:string,id:string) => dispatch(creators.addCard(title,id))


    const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)


    }

    const handleBtnAddBoard = (event:SyntheticEvent) => {
        event.preventDefault()
        if(type === 'card') {
            console.log('card')
        }else {
            console.log(handleAddCard);
        }


    }

    return (
        <div>
            <div >
                <Paper className={classes.card} >
                    <InputBase
                        onBlur={() => setOpen(false)}
                        onChange={handleOnChange}
                        multiline
                        fullWidth
                        placeholder={'Добавить'}
                    />
                </Paper>
            </div>
            <div className={classes.btnBlock}>
                <Button
                    className={classes.btnSetting}
                    onClick={handleBtnAddBoard}
                >Добавить</Button>
                <IconButton onClick={() => setOpen(false)}>
                    <ClearIcon  />
                </IconButton>
            </div>
        </div>
    )
}
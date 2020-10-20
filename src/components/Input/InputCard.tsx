import React, {SyntheticEvent, useContext, useState} from "react";
import {Button, fade, IconButton, InputBase, Paper} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import functionApi from "../../helpers/functionApi";



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
     boardId: string | number | undefined

}



export const InputCard:React.FC<inputOpenType > = ({setOpen,type,boardId}) => {
    const classes = useStyles()
    const [title,setTitle] = useState<string>('')
    const {handleAddBoard, handleAddCard} = useContext(functionApi)






    const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const handleBtnAddBoard = (event:SyntheticEvent) => {
        event.preventDefault()
        if(type === 'board') {
            handleAddBoard(title)
            setTitle('')
        }else if(type === 'card') {
            let card = {
                info: title,
                id:boardId
            }
            handleAddCard(card)
            setTitle('')
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
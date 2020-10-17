import React, {useState} from "react";
import {Collapse, fade, Paper, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {InputCard} from "./InputCard";



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        addCard: {
            padding: theme.spacing(1,1,1,2),
            margin: theme.spacing(0,1,1,1,),
            background: "rgb(3, 155, 229)",
            "&:hover": {
                backgroundColor: fade("#52c7ff", 0.25)
            }
        },
        root: {
            cursor: "pointer",


        }
    }),
);

interface InputContainerInterface {
    type: string
}


export const InputContainer:React.FC<InputContainerInterface> = ({type}) => {
    const classes = useStyles()
    const[open,setOpen] = useState<boolean>(false)

    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <InputCard setOpen={setOpen} type={type}/>
            </Collapse>
            <Collapse in={!open}>
                <Paper
                    className={classes.addCard}
                    elevation={0}
                >
                    <Typography
                        onClick={() => setOpen(!open)}
                    > {type === "card" ?"+ Добавить задачу": "Добавить доску"}</Typography>
                </Paper>
            </Collapse>

        </div>
    )
}
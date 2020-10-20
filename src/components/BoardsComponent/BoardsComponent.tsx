import React from "react";
import {Paper} from "@material-ui/core";
import {Title} from "../Title/Title";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Card} from "../Card/Card";
import {InputContainer} from "../Input/InputContainer";
import {boardsState, cardsState} from "../../redux/reducer/boardsReducer";





const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listComponent: {
            backgroundColor: "rgb(3, 155, 229)",
            minWidth: 300,
            marginRight: theme.spacing(5)
        }
    }),
);





export  const BoardsComponent:React.FC<boardsState> = ({title,cards,id}) => {
    const classes = useStyles()




    return (
        <Paper className={classes.listComponent}>
            <Title title={title} />
            {cards.map((elem:cardsState) => {
               return <Card
                   key={elem.id}
                   id={elem.id}
                   info={elem.info}
               />
            })}
            <InputContainer boardId={id} type='card'/>
        </Paper>
    )
}
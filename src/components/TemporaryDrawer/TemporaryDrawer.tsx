import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";
import {hideMenu} from "../../redux/actions/menuAction";

const useStyles = makeStyles({
    list: {
        width: 250,
    },

});

type Anchor = 'left';

export const TemporaryDrawer:React.FC = () => {
    const isMenu = useSelector((state:RootState) => {
        return state.menuReducer.isMenu})

    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });
    const dispatch = useDispatch()
    const isMenuHide = () => dispatch(hideMenu())

    useEffect(() =>{
        setState({ ...state, left: isMenu });
    }, [isMenu])//Пофиксить

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }else if(!open ) {
            isMenuHide()
        }

        setState({ ...state, left: open });
    };

    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {

            })}
            role="presentation"
            onClick={toggleDrawer( false)}
            onKeyDown={toggleDrawer( false)}
        >
            <List>
                {['Авторизация', 'Задачи', 'Прогресс', ].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />

        </div>
    );

    return (
        <div>
            {(['left'] as Anchor[]).map((anchor) => (
                <React.Fragment key={anchor}>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer( false)}
                        onOpen={toggleDrawer( true)}
                    >
                        {list("left")}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}

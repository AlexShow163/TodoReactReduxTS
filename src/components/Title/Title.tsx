import React, { useState} from "react";


import {Typography} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        titleComponent: {
            flexGrow: 1,
            color: '#fff',
            fontSize: "1.4rem",
            fontWeight: "bold"

        },
        titleComponentContainer: {
            margin: theme.spacing(1),
            display: "flex"
        },
        input: {
            margin: theme.spacing(1),
            fontSize: "1.4rem",
            fontWeight: "bold",
            color: '#fff',

            "&:focus":{
                background: "#07abfa",
                borderRadius: 20
            }
        }
    }),
);






export const Title:React.FC = () => {
    const classes = useStyles()

   

    const[open, setOpen] = useState<boolean>(false)
    return (
      <div>
          {open ?
              (<div>
                  <InputBase
                      autoFocus={true}
                      value="I am Title"
                      inputProps={{
                          className: classes.input,
                      }}
                      fullWidth
                      onBlur={() => setOpen(!open)}

                  />
              </div>)
              :
              ( <div className={classes.titleComponentContainer}>
                  <Typography
                      onClick={() => setOpen(!open)}
                      className={classes.titleComponent}
                  >
                      I am Title
                  </Typography>
                  <MoreHorizRoundedIcon
                      fontSize={"large"}

                  />
              </div>)
          }

      </div>
    )
}
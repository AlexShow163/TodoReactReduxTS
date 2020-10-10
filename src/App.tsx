import React from 'react';
import {Header} from "./components/Header/Header";
import {TemporaryDrawer} from "./components/TemporaryDrawer/TemporaryDrawer";
import {Main} from "./components/Main/Main"
import {Box, Container,} from "@material-ui/core";


import {ActiveTasks} from "./components/Main/ActiveTasks/ActiveTasks";
import {TasksInProgress} from "./components/Main/TaskInProgress/TasksInProgress";
import {CompletedTasks} from "./components/Main/CompletedTasks/ComplitedTasks";
import {AddTasks} from "./components/Main/AddITasks/AddTasks";
import {Tasks} from "./components/Main/Tasks/Tasks";



const App: React.FC = () => {


  return (
    <>
        <Box className="wrap">
            <Header />
            <TemporaryDrawer />
            <Container>
                <Main>
                   <ActiveTasks>
                       <AddTasks/>
                       <Tasks/>
                   </ActiveTasks>
                    <TasksInProgress/>
                    <CompletedTasks/>
                </Main>
            </Container>
        </Box>
    </>
  );
}

export default App;

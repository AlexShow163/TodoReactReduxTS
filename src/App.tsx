import React from 'react';
import {Header} from "./components/Header/Header";
import {TemporaryDrawer} from "./components/TemporaryDrawer/TemporaryDrawer";
import {Main} from "./components/Main/Main"
import {Box, Container,} from "@material-ui/core";


import {CardsTasks} from "./components/Main/CardsTasks/CardsTasks";
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
                   <CardsTasks title="Активные задачи">
                       <AddTasks/>
                       <Tasks/>
                   </CardsTasks>
                    <CardsTasks title="Задачи в процессе"/>
                    <CardsTasks title="Выполнено"/>
                </Main>
            </Container>
        </Box>
    </>
  );
}

export default App;

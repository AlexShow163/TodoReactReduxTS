import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {TemporaryDrawer} from "./components/TemporaryDrawer/TemporaryDrawer";
import {Main} from "./components/Main/Main"
import {Box, Container} from "@material-ui/core";



const App: React.FC = () => {


  return (
    <>
        <Box>
            <Header />
            <TemporaryDrawer />
            <Container>
                <Main/>
            </Container>
        </Box>
    </>
  );
}

export default App;

import React from 'react';
import {Header} from "./components/Header/Header";
import {TemporaryDrawer} from "./components/TemporaryDrawer/TemporaryDrawer";
import {Main} from "./components/Main/Main"
import {Box, Container,} from "@material-ui/core";





const App: React.FC = () => {


  return (
    <>
        <Box className="wrap">
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

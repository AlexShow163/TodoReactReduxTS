import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {TemporaryDrawer} from "./components/TemporaryDrawer/TemporaryDrawer";
import {Box} from "@material-ui/core";



const App: React.FC = () => {


  return (
    <>
        <Box>
            <Header />
            <TemporaryDrawer />
        </Box>
    </>
  );
}

export default App;

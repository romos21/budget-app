import React from 'react';
import Header from "../Header/Header";
import TabsNavbar from "../TabsNavbar/TabsNavbar";
import Box from "@mui/material/Box";
import {styled} from "@mui/styles";

const App = () => {

    const AppStyled = styled(Box)((theme) => ({
        width: "95vw",
        margin: "auto"
    }));

    return (
        <AppStyled>
            <Header/>
            <TabsNavbar/>
        </AppStyled>
    );
};
export default App;


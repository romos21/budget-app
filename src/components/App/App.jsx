import React from 'react';
import Header from "../Header/Header";
import TabsNavbar from "../TabsNavbar/TabsNavbar";
import Box from "@mui/material/Box";
import {styled} from "@mui/styles";
import store from "../../redux/store";
import {Provider} from "react-redux";

const App = () => {

    const AppStyled = styled(Box)((theme) => ({
        width: "95vw",
        margin: "auto",
    }));

    return (
        <Provider store={store}>
            <AppStyled>
                <Header/>
                <TabsNavbar/>
            </AppStyled>
        </Provider>
    );
};
export default App;


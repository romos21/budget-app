import React from 'react';
import Header from "../Header/Header";
import TabsNavbar from "../TabsNavbar/TabsNavbar";
import Box from "@mui/material/Box";
import {styled} from "@mui/styles";
import store from "../../redux/store";
import {Provider} from "react-redux";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const App = () => {

    const AppStyled = styled(Box)((theme) => ({
        width: "95vw",
        margin: "auto",
    }));

    const [value, setValue] = React.useState(0);

    return (
        <Provider store={store}>
            <AppStyled>
                <Header/>
                <TabsNavbar/>
                <Box sx={{display: "flex"}}>
                    <Typography variant="h2">Send your feedback:</Typography>
                    <Rating
                        name="rating-container"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Box>
            </AppStyled>
        </Provider>
    );
};
export default App;


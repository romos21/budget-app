import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import StyledAddBtn from "../AddChannelBtn/AddChannelBtn";
import {Box} from "@mui/material";
import ChannelPopup from "../../containers/ChannelPopup/ChannelPopup";
import useStyles from "./style";

const Header = props => {

    const classes = useStyles();

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <Box className={classes.HeaderBox}>
            <ChannelPopup openModal={openModal} handleClose={handleCloseModal} isNewChannel={true}/>
            <Typography variant="h1">Build your budget plan</Typography>
            <Typography color="#182033" variant="h3" >Setup channels</Typography>
            <Box className={classes.HeaderActionBox}>
                <Typography variant="h5" >
                    Setup your added channels by adding baseline budgets out of your total budget. See the forecast
                    impact
                    with the help of tips and insights.
                </Typography>
                <StyledAddBtn onClick={handleOpenModal} text='Add Channel'/>
            </Box>
        </Box>
    );
};

export default Header;

import React, {useState} from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {useDispatch} from "react-redux";

import budgetsActions from "../../../redux/actions/budgets";
import ChannelPopup from "../../ChannelPopup/ChannelPopup";
import useStyles from "./style";

const AccordionMenuBar = ({channelName}) => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        handleClose();
        setOpenModal(true);
    }
    const handleCloseModal = () => setOpenModal(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRemove = () => {
        dispatch(budgetsActions.removeBudget(channelName));
    }

    return (
        <Box className={classes.MenuBox}>
            <ChannelPopup channelName={channelName} openModal={openModal} handleClose={handleCloseModal}/>
            <MoreHorizIcon onClick={handleClick}/>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                className={classes.MenuBar}
            >
                <MenuItem className={classes.MenuItem} onClick={handleOpenModal}>
                    Edit
                </MenuItem>
                <MenuItem className={`${classes.MenuItem} ${classes.RemoveItem}`} onClick={handleRemove}>
                    Remove
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default AccordionMenuBar;

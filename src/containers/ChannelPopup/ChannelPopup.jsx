import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import budgetsActions from "../../redux/actions/budgets";
import {useRef, useState} from "react";
import {styled} from "@mui/styles";

const ChannelPopup = ({channelName='New Channel', openModal, handleClose, isNewChannel = false}) => {

    const dispatch = useDispatch();
    const budgetsList = useSelector(state => state.budgetsList);
    const [inputVal, setInputVal] = useState(channelName);
    const [alreadyExisted, setAlreadyExisted] = useState(!!budgetsList.find(channel => channel.channelName === inputVal));

    const onChange = (event) => {
        setInputVal(event.target.value);
        const channel = budgetsList.find(channel => channel.channelName === event.target.value);
        setAlreadyExisted(!!channel);
    }

    const onChangeChannelName = () => {
        if(isNewChannel) {
            dispatch(budgetsActions.addBudget({value: inputVal}));
        } else {
            dispatch(budgetsActions.editBudgetChannelName({channelName, value: inputVal}));
        }
        handleClose();
    }

    const StyledBox = styled(Box)(theme => ({
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: "#fff",
        border: '2px solid #000',
        boxShadow: 24,
        padding: "4em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        rowGap: "2em",
    }));

    return (
        <Modal
            keepMounted
            open={openModal}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <StyledBox>
                <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                    Enter New Channel Name
                </Typography>
                <TextField
                    value={inputVal}
                    onChange={onChange}
                    autoFocus
                />
                { alreadyExisted && <Typography variant='h6'>This channel already existed.</Typography> }
                <Button disabled={alreadyExisted} onClick={onChangeChannelName} variant='outlined' color='primary'>
                    {isNewChannel? "Create" : "Change"}
                </Button>
            </StyledBox>
        </Modal>
    );
}

export default ChannelPopup;

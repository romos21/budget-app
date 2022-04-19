import React, {useRef} from 'react';
import useStyles from './style';
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SvgIcon from '@mui/material/SvgIcon';
import AccordionMenuBar from "../../containers/Accordion/AccordionMenuBar/AccordionMenuBar";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import AccordionItemDetails from "../../containers/Accordion/AccordionItemDetails/AccordionItemDetails";
import Box from '@mui/material/Box';
import ChannelTitle from "../ChannelTitle/ChannelTitle";

const AccordionItem = ({budgetItem, expanded, handleChange}) => {

    const classes = useStyles();
    const {channelName} = budgetItem;
    const handleOnExpandedChange = () => {
        handleChange(expanded !== channelName ? channelName : false);
    }

    return (
        <Accordion expanded={expanded === channelName}>
            <AccordionSummary
                className={classes.AccordionSummary}
                expandIcon={<ArrowDropDownIcon onClick={handleOnExpandedChange}/>}
            >
                <Box className={classes.Box} onClick={handleOnExpandedChange}>
                    <ChannelTitle channelName={channelName}/>
                </Box>
                <AccordionMenuBar channelName={channelName}/>
            </AccordionSummary>
            <AccordionDetails>
                <AccordionItemDetails budgetItem={budgetItem}/>
            </AccordionDetails>
        </Accordion>
    );
};

export default AccordionItem;

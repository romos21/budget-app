import React, {useState} from 'react';
import AccordionItem from "../../components/AccordionItem/AccordionItem";
import {useSelector} from "react-redux";
import {styled} from "@mui/styles";
import {Box} from "@mui/material";

const FirstTab = props => {

    const budgetsList = useSelector(state => state.budgetsList);
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => {
        setExpanded(panel);
    };

    const BoxStyled = styled(Box)((theme) => ({
        margin: "40px 0",
    }))

    return (
        <BoxStyled>
            {
                budgetsList.map(budgetItem =>
                    <AccordionItem
                        key={budgetItem.channelName}
                        budgetItem={budgetItem}
                        expanded={expanded}
                        handleChange={handleChange}
                    />)
            }
        </BoxStyled>
    );
};

export default FirstTab;

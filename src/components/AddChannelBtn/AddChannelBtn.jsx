import {styled} from '@mui/material/styles';
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import React from "react";


const StyledBtn = styled(Button)(({theme}) => ({
    color: "#707EA7",
    borderColor: "#707EA7",
}));

export default function StyledAddBtn({onClick, text}) {
    return (
        <StyledBtn onClick={onClick} variant='outlined' color='primary'>
            <AddIcon/>
            {text}
        </StyledBtn>
    );
}

import {styled} from '@mui/material/styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FormHelperText from '@mui/material/FormHelperText';
import React from "react";

const FormHelperTextStyled = styled(FormHelperText)(({theme}) => ({
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    columnGap: "8px",
    color: "#2F3B66"
}));

const InfoOutlinedIconStyled = styled(InfoOutlinedIcon)(({theme}) => ({
    fontSize: "14px",
    color: "#99A4C2"
}));

export default function InfoLabel({text}) {
    return (
        <FormHelperTextStyled>
            {text}
            <InfoOutlinedIconStyled/>
        </FormHelperTextStyled>
    );
}

import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    AccordionItemDetailsBox: {
        display: "flex",
        columnGap: "55px",
        alignItems: "stretch"
    },
    SelectField: {
        minWidth: "230px",
        "& .MuiInputBase-input": {
            fontSize: "14px",
            padding: "10px 15px",
            borderRadius: "2px",
            color: "#2A3558",
        }
    },
    TextField: {
        fontSize: "14px",
        minWidth: "245px",
        borderRadius: "2px",
        backgroundColor: "none",
        border: "1px solid #B2BBD580",
        outline: "none",
        padding: "10px 15px",
        color: "#2A3558",
    },
    BtnGroup: {
        minWidth: "184px",
        borderRadius: "2px",
        backgroundColor: "#F5F6FA",
        '& .MuiButton-root': {
            fontSize: "14px",
            padding: "10px 15px",
            width: "50%",
            background: "none",
            border: "none!important",
            color: "#707EA7",
        },
        '& .Mui-disabled': {
            backgroundColor: "#fff",
            color: "#2A3558!important",
            border: "1px solid #B2BBD580!important",
            borderRadius: "2px!important",
        }
    },
}));

export default useStyles;

import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    TableCellBox: {
        display: "flex",
        alignItems: "center",
        position: "relative",
    },
    TextField: {
        width: "80px",
        height: "auto",
        fontSize: "14px",
        boxSizing: "border-box",
        border: "none",
        color: "#222A41",
        "&:disabled": {
           background: "none"
        }
    },
    ActiveTextField: {
        border: "1px solid #B2BBD5",
        borderRadius: "4px",
        padding: "5px 10px",
        outline: "none",
        color: "#B2BBD5"
    },
    EditIconHover: {
        color: "#B2BBD5",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        alignSelf: "center",
    },
    EditIconFocusBox: {
        display: "flex",
        alignItems: "center",
    },
    CheckIcon: {
        color: "#2FCF5F",

    },
    CancelIcon: {
        color: "#EE2032",
    }
}));

export default useStyles;

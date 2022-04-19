import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    GridBreakdown : {
        backgroundColor: "#F5F6FA",
        border: "1px solid #B2BBD580",
        borderRadius: "4px",
        padding: "24px",
        margin: "50px 140px 145px 0",
        '& .MuiTypography-h3': {
            marginBottom: "8px"
        },
        '& .MuiTypography-h5': {
            marginBottom: "24px"
        }
    },
}));

export default useStyles;

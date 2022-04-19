import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    HeaderBox: {
        margin: "50px 0",
        '& .MuiTypography-h1': {
            marginBottom: "16px"
        },
        '& .MuiTypography-h3': {
            marginBottom: "8px"
        }
    },
    HeaderActionBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center",
        '& .MuiTypography-h5': {
            maxWidth: "675px"
        }
    },
}));

export default useStyles;

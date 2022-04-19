import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    AccordionSummary: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row-reverse",
        backgroundColor: "#F5F6FA!important",
        '& .MuiAccordionSummary-content': {
            display: "flex",
            justifyContent: "space-between",
        }
    },
    Box: {
        display: "flex",
        alignItems: "center",
        columnGap: "10px",
        padding: "0 30px"
    },

    ChannelIconWrapper: {
        backgroundColor: "#FF9602",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px",
        borderRadius: "3px",
    },
    ChannelIcon: {
        fill: "#fff",
        height: "20px",
        width: "20px"
    }
}));

export default useStyles;

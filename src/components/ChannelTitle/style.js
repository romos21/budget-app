import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    ChannelNameTableCell: {
        display: "flex",
        alignItems: "center",
        columnGap: "16px",
        color: "#222A41",
        fontWeight: 500,
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

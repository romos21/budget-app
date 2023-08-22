import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    TableBoxWrapper: {
        position: "relative",
        display: "flex",
        columnGap: "28px",
        overflowX: "hidden",
        '& .collapsed': {
            overflowX: 'scroll'
        }
    },
    TableCollapsed: {
        position: "absolute",
        right: "0",
    },
    CollapsedTableIconWrapper: {
        width: '64px',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "25px",
        right: "-20px",
        backgroundColor: "#fff",
        '& .MuiSvgIcon-root': {
            color: "#98A4C6",
            fontSize: "1em",
        }
    },
    ChannelNameTable: {
        minWidth: "300px",
        maxWidth: "300px",
        borderRight: "1px solid #B2BBD5",
        boxShadow: "inset -80px 0 30px -25px #707EA722",
        zIndex: 100,
        background: "#fff",
    },
    ChannelNameTableCell: {
        display: "flex",
        alignItems: "center",
    },
    ChannelIconWrapper: {
        backgroundColor: "#FF9602",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px",
        borderRadius: "3px",
        zIndex: 1000,
    },
    ChannelIcon: {
        fill: "#fff",
        height: "20px",
        width: "20px"
    }
}));

export default useStyles;

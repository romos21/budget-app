import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    MenuBox: {
        alignSelf: "center",
    },
    MenuBar: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch",
        alignItems: "stretch",
        '& .MuiMenu-list': {
            padding: "8px",
        }
    },
    MenuItem: {
        minWidth: "145px",
        borderRadius: "4px!important"
    },
    RemoveItem: {
        backgroundColor: "#FDE8EA!important",
        color: "#EE2032!important"
    }
}));

export default useStyles;

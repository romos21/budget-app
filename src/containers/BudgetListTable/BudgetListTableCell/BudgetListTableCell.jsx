import React, {useState} from "react";
import TableCell from "@mui/material/TableCell";
import Box from "@mui/material/Box";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useDispatch} from "react-redux";
import budgetActions from "../../../redux/actions/budgets";
import useStyles from "./style";
import {styled} from "@mui/material/styles";
import NumberFormat from "react-number-format";

export default function BudgetListTableCell({
    item,
    editVisibleItem,
    setEditVisibleItem,
    index,
    channelName,
    disabled,
    editClicked,
    setEditClicked
}) {

    const classes = useStyles();

    const [inputVal, setInputVal] = useState(item);
    const dispatch = useDispatch();

    const onHandleEditVisible = () => {
        setEditVisibleItem(disabled ? null : index);
    }

    const onHandleEditClick = () => {
        setEditClicked(disabled || editClicked === index ? null : index);
    }

    const onHandleInputChange = (values) => {
        const value = Number(values.value);
        setInputVal(value);
    }

    const updateValue = () => {
        dispatch(budgetActions.editBudgetBreakdownField({channelName, index, value: inputVal}));
        onHandleEditClick();
    }

    const cancelEdit = () => {
        setInputVal(item);
        onHandleEditClick();
    }

    const StyledTableCell = styled(TableCell)({
        borderRight: 1,
        borderBottom: 0,
        minWidth: "max-content",
        lineHeight: "20px",
        padding: 0,
        margin: "0 28px",
        height: "64px",
    });

    return (
        <StyledTableCell
            component="th"
            scope="row"
        >
            <Box
                onMouseEnter={onHandleEditVisible}
                onMouseLeave={onHandleEditVisible}
                className={classes.TableCellBox}
            >
                <NumberFormat
                    className={`${classes.TextField} ${editClicked === index && classes.ActiveTextField}`}
                    thousandSeparator={true}
                    prefix={'$'}
                    disabled={disabled}
                    onValueChange={onHandleInputChange}
                    displayType='number'
                    value={inputVal}
                    autoFocus={editClicked === index}
                />
                {
                    editClicked === index &&
                    <Box className={classes.EditIconFocusBox}>
                        <CheckCircleIcon className={classes.CheckIcon} onClick={updateValue}/>
                        <CancelIcon className={classes.CancelIcon} onClick={cancelEdit}/>
                    </Box>
                }
                {
                    editClicked !== index && editVisibleItem === index &&
                    <EditOutlinedIcon
                        onClick={onHandleEditClick}
                        className={classes.EditIconHover}
                    />
                }
            </Box>
        </StyledTableCell>
    );
}

import React, {useState} from 'react';
import useStyles from './style';
import {styled} from '@mui/material/styles';
import {useSelector} from "react-redux";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import BudgetsListTableRow from "../../components/BudgetsListTableRow/BudgetsListTableRow";
import ChannelTitle from "../../components/ChannelTitle/ChannelTitle";
import Box from "@mui/material/Box";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import {columns} from "../../utils/monthColumns";

const BudgetListTable = props => {

    const classes = useStyles();
    const budgetsList = useSelector(state => state.budgetsList);

    const [styleCollapsed, setStyleCollapsed] = useState(false);

    const onHandleCollapsed = () => {
        setStyleCollapsed(!styleCollapsed);
    }

    const StyledTableCell = styled(TableCell)({
        borderRight: 1,
        borderBottom: 0,
        width: "80px",
        lineHeight: "20px",
        padding: 0,
        margin: "0 28px",
        height: "64px",
    });

    const StyledTableHeaderCell = styled(TableCell)({
        borderRight: 1,
        borderBottom: 0,
        minWidth: "max-content",
        lineHeight: "20px",
        padding: 0,
        margin: "0 28px",
        height: "64px",
        color: "#99A4C2",
        fontWeight: 700,
    });

    return (
        <Box className={classes.TableBoxWrapper}>
            <Table className={classes.ChannelNameTable}>
                <TableHead>
                    <TableRow>
                        <StyledTableHeaderCell component="th" scope="row">CHANNEL</StyledTableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {budgetsList.map(({channelName}) =>
                        <TableRow key={channelName}>
                            <StyledTableCell component="th" scope="row">
                                <ChannelTitle channelName={channelName}/>
                            </StyledTableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <Table
                className={`${styleCollapsed ? classes.TableCollapsed : ''}`}
            >
                <TableHead>
                    <TableRow>
                        {columns.map((el, index) =>
                            <StyledTableHeaderCell component="th" scope="row" key={index}>{el}</StyledTableHeaderCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {budgetsList.map(({channelName, monthBudgets, allocation}) =>
                        <BudgetsListTableRow
                            key={channelName}
                            channelName={channelName}
                            monthBudgets={monthBudgets}
                            allocation={allocation}
                        />
                    )}
                </TableBody>
            </Table>
            <Box
                className={classes.CollapsedTableIconWrapper}
                onClick={onHandleCollapsed}
            >
                {
                    styleCollapsed ?
                        <ArrowBackIosNewIcon/>
                        : <ArrowForwardIosOutlinedIcon/>
                }
            </Box>
        </Box>
    );
};

export default BudgetListTable;

import React from 'react';
import useStyles from './style';

import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BudgetBreakdownItem from "../../containers/BudgetBreakdownItem/BudgetBreakdownItem";

import {columns} from "../../utils/monthColumns";

const BudgetBreakdown = ({disabled, channelName}) => {

    const classes = useStyles();

    return (
        <Box className={classes.GridBreakdown}>
            <Typography variant="h3">Budget Breakdown</Typography>
            <Typography variant="h5">By default, your budget will be equally divided
                throughout the year. You can
                manually change the budget allocation, either now or later.</Typography>
            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 2, sm: 9, md: 12}}>
                {columns.map((el, index) => (
                    <BudgetBreakdownItem
                        key={index}
                        index={index}
                        channelName={channelName}
                        disabled={disabled}
                        helperText={el}
                    />
                ))}
            </Grid>
        </Box>
    );
};

export default BudgetBreakdown;

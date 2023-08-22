import React, {useRef, useState} from 'react';
import {Box, TextField} from "@mui/material";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import BudgetBreakdown from "../../../components/BudgetBreakdown/BudgetBreakdown";
import InfoLabel from "../../../components/InfoLabel/InfoLabel";
import {useDispatch} from "react-redux";
import budgetsActions from "../../../redux/actions/budgets";
import useStyles from "./style";

import {budgetFrequencyValues, budgetAllocationValues} from "../../../utils/budgetFilterValues";
import NumberFormat from "react-number-format";

const AccordionItemDetails = ({budgetItem: {channelName, frequency, allocation, baseline, monthBudgets} }) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [baselineInput, setBaselineInput] = useState(baseline);

    const onChangeFrequency = (event) => {
        const value = Number(event.target.value);
        dispatch(budgetsActions.editBudgetFrequency({channelName, value}))
    }

    const onChangeBaselineInput = (values) => {
        const value = Number(values.value);
        setBaselineInput(value);
    }

    const updateBaseline = () => {
        dispatch(budgetsActions.editBudgetBaseline({channelName, value: baselineInput}))
    }

    const onChangeAllocationToEqual = () => {
        dispatch(budgetsActions.editBudgetAllocation({channelName, value: budgetAllocationValues.equal}))
    }

    const onChangeAllocationToManual = () => {
        dispatch(budgetsActions.editBudgetAllocation({channelName, value: budgetAllocationValues.manual}))
    }

    return (
        <>
            <Box className={classes.AccordionItemDetailsBox}>
                <FormControl>
                    <InfoLabel text='Budget Frequency'/>
                    <Select
                        onChange={onChangeFrequency}
                        disabled={allocation === budgetAllocationValues.equal}
                        value={frequency}
                        className={classes.SelectField}
                    >
                        {budgetFrequencyValues.map( ({title, value}) =>
                            <MenuItem key={value} value={value}>{title}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <FormControl>
                    <InfoLabel
                        text={`Baseline [${budgetFrequencyValues.find(({value}) => value === frequency).title}] Budget`}
                    />
                    <NumberFormat
                        thousandSeparator={true}
                        prefix={'$'}
                        disabled={allocation === budgetAllocationValues.manual}
                        className={classes.TextField}
                        onValueChange={onChangeBaselineInput}
                        onBlur={updateBaseline}
                        displayType='number'
                        value={baselineInput}
                    />
                </FormControl>
                <FormControl>
                    <InfoLabel text='Budget Allocation'/>
                    <ButtonGroup className={classes.BtnGroup}>
                        <Button
                            onClick={onChangeAllocationToEqual}
                            disabled={allocation === budgetAllocationValues.equal}
                        >
                            {budgetAllocationValues.equal}
                        </Button>
                        <Button
                            onClick={onChangeAllocationToManual}
                            disabled={allocation === budgetAllocationValues.manual}
                        >
                            {budgetAllocationValues.manual}
                        </Button>
                    </ButtonGroup>
                </FormControl>
            </Box>
            <BudgetBreakdown
                disabled={allocation === budgetAllocationValues.equal}
                channelName={channelName}
                monthBudgets={monthBudgets}
            />
        </>
    );
};

export default AccordionItemDetails;

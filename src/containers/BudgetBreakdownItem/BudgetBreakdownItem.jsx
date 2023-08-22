import React, {useState} from 'react';
import useStyles from './style';
import Grid from '@mui/material/Grid';
import NumberFormat from 'react-number-format';
import FormHelperText from "@mui/material/FormHelperText";
import budgetActions from "../../redux/actions/budgets";
import {useDispatch, useSelector} from "react-redux";

const BudgetBreakdownItem = ({channelName, index, disabled, helperText}) => {

    const classes = useStyles();

    const monthBudgetsItem = useSelector(state => state.budgetsList)
        .find(el => el.channelName === channelName).monthBudgets[index];
    const [value, setValue] = useState(monthBudgetsItem);
    const dispatch = useDispatch();

    const onChangeInput = (values) => {
        const value  = Number(values.value);
        setValue(value);
    }

    const updateValue = () => {
        dispatch(budgetActions.editBudgetBreakdownField({channelName, index, value}));
    }

    return (
        <Grid item xs={1} sm={3} md={2}>
            <FormHelperText className={classes.TextHelper}>
                {helperText}
            </FormHelperText>
            <NumberFormat
                thousandSeparator={true}
                prefix={'$'}
                disabled={disabled}
                className={classes.BreakdownItemField}
                onValueChange={onChangeInput}
                onBlur={updateValue}
                displayType='number'
                value={value}
            />
        </Grid>

    );
};

export default BudgetBreakdownItem;

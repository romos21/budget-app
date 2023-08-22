import {createReducer, current} from '@reduxjs/toolkit';
import actions from '../actions/budgets';
import {budgetAllocationValues, budgetFrequencyValues} from "../../utils/budgetFilterValues";

const initialState = [
    {
        channelName: "Paid reviews",
        frequency: 12,
        baseline: 12000,
        allocation: 'equal',
        monthBudgets: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]
    },
    {
        channelName: "Paid reviews 2",
        frequency: 12,
        baseline: 24000,
        allocation: 'equal',
        monthBudgets: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000]
    },
    {
        channelName: "Paid reviews 3",
        frequency: 12,
        baseline: 36000,
        allocation: 'equal',
        monthBudgets: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000]
    }
];

const budgetsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actions.getBudgetsList, (state, {payload}) => state)
        .addCase(actions.addBudget, (state, {payload: {value}}) => {
            return [
                ...state, {
                    channelName: value,
                    frequency: 12,
                    baseline: 12000,
                    allocation: 'equal',
                    monthBudgets: Array(12).fill(1000)
                }
            ]
        })
        .addCase(actions.editBudgetChannelName, (state, {payload : {channelName, value}}) =>
            state.map(el =>
                el.channelName === channelName ?
                    {
                        ...el,
                        channelName: value,
                    }
                    : el
            )
        )
        .addCase(actions.removeBudget, (state, {payload}) =>
            state.filter(el => el.channelName !== payload)
        )
        .addCase(actions.editBudgetBreakdownField, (state, {payload: {channelName, index, value}}) =>
            state.map(el =>
                el.channelName === channelName ?
                    {
                        ...el,
                        baseline: el.allocation === 'manual' ? el.baseline - el.monthBudgets[index] + value : el.baseline,
                        monthBudgets: [...el.monthBudgets.slice(0, index), value, ...el.monthBudgets.slice(index + 1)]
                    }
                    : el
            )
        )
        .addCase(actions.editBudgetFrequency, (state, {payload: {channelName, value}}) =>
            state.map(el =>
                el.channelName === channelName ?
                    {
                        ...el,
                        frequency: value,
                        monthBudgets: Array(12).fill(el.baseline / value)
                    }
                    : el
            )
        )
        .addCase(actions.editBudgetBaseline, (state, {payload: {channelName, value}}) =>
            state.map(el =>
                el.channelName === channelName ?
                    {
                        ...el,
                        baseline: value,
                        monthBudgets: Array(12).fill(value/el.frequency)
                    }
                    : el
            )
        )
        .addCase(actions.editBudgetAllocation, (state, {payload: {channelName, value}}) =>
            state.map(el =>
                el.channelName === channelName ?
                    {
                        ...el,
                        frequency: 12,
                        monthBudgets: value === budgetAllocationValues.equal ?
                            Array(12).fill(el.baseline/12)
                            : el.monthBudgets,
                        allocation: value,
                    }
                    : el
            )
        )
        .addDefaultCase((state) => state)
})

export default budgetsReducer;

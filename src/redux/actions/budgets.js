import {createAction} from '@reduxjs/toolkit';

const getBudgetsList = createAction('GET_BUDGETS_LIST');
const addBudget = createAction('ADD_BUDGET');
const removeBudget = createAction('REMOVE_BUDGET');
const editBudgetChannelName = createAction('EDIT_BUDGET_CHANNEL_NAME');
const editBudgetBreakdownField = createAction('EDIT_BUDGET_BREAKDOWN_FIELD');
const editBudgetBreakdownAll = createAction('EDIT_BUDGET_BREAKDOWN_ALL');
const editBudgetAllocation = createAction('EDIT_BUDGET_ALLOCATION');
const editBudgetBaseline = createAction('EDIT_BUDGET_BASELINE');
const editBudgetFrequency = createAction('EDIT_BUDGET_FREQUENCY');

export default {
    getBudgetsList,
    addBudget,
    removeBudget,
    editBudgetChannelName,
    editBudgetBreakdownField,
    editBudgetBreakdownAll,
    editBudgetFrequency,
    editBudgetBaseline,
    editBudgetAllocation,
}

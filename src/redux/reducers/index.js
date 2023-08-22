import { combineReducers } from "@reduxjs/toolkit";
import budgetsReducer from './budgets';


const rootReducer = combineReducers({
    budgetsList: budgetsReducer,
});

export default rootReducer;

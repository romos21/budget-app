import React, {useState} from "react";
import BudgetListTableCell from "../../containers/BudgetListTable/BudgetListTableCell/BudgetListTableCell";
import TableRow from "@mui/material/TableRow";

import {budgetAllocationValues} from "../../utils/budgetFilterValues";

const BudgetsListTableRow = ({channelName, monthBudgets, allocation}) => {

    const [editVisibleItem, setEditVisibleItem] = useState(null);
    const [editClicked, setEditClicked] = useState(null);

    return (
        <TableRow>
            {monthBudgets.map((el, index) =>
                <BudgetListTableCell
                    key={Math.random()}
                    index={index}
                    item={el}
                    channelName={channelName}
                    disabled={allocation === budgetAllocationValues.equal}
                    editVisibleItem={editVisibleItem}
                    setEditVisibleItem={setEditVisibleItem}
                    editClicked={editClicked}
                    setEditClicked={setEditClicked}
                />
            )}
        </TableRow>
    );
}

export default BudgetsListTableRow

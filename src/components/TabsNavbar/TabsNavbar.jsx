import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from "@mui/lab/TabPanel";
import FirstTab from "../../containers/FirstTab/FirstTab";
import BudgetListTable from "../../containers/BudgetListTable/BudgetListTable";
import useStyles from "./style";

import {tabs} from "../../utils/tabs";

const TabsNavbar = () => {

    const classes = useStyles();

    const [value, setValue] = useState('tab1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <Tabs className={classes.Tabs} value={value} onChange={handleChange}>
                <Tab className={classes.Tab} {...tabs.tab1}/>
                <Tab className={classes.Tab} {...tabs.tab2}/>
            </Tabs>
            <TabPanel value={tabs.tab1.value}>
                <FirstTab/>
            </TabPanel>
            <TabPanel value={tabs.tab2.value}>
                <BudgetListTable/>
            </TabPanel>
        </TabContext>
    );
};

export default TabsNavbar;

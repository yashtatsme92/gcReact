import React from 'react';

import Sidebar from './Sidebar/Sidebar';
import MainPanel from './MainPanel/MainPanel';

import classes from './Content.module.css';

const Content = props => (
    <div className={classes.Content}>
        <Sidebar 
            SelectedDate={(date) => props.SelectedDate(date)}
            showSidePanel={props.showSidePanel} 
            currentDate={props.currentDate} 
            todayDate={props.todayDate}
        />
        <MainPanel 
            currentDate={props.currentDate} 
            todayDate={props.todayDate}
        />
    </div>
)


export default Content;
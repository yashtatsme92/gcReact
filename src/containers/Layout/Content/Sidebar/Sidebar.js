import React from 'react';

import BoxCalendar from './../../../Misc/BoxCalendar/BoxCalendar';
import CalendarTypes from './../../../Misc/CalendarTypes/CalendarTypes';

import classes from './Sidebar.module.css';



const Sidebar = props => (
    <div style={{
        display: props.showSidePanel ? 'flex' : 'none'
    }} className={classes.SidebarContainer}>
        <div className={classes.SidebarRow}>
            <div className={classes.Sidebar}>
                <BoxCalendar todayDate={props.todayDate}/>
                <CalendarTypes/>
                <div className={classes.TermsAndCondtions}>
                    <a className={classes.TnC}  href="//www.google.com/intl/en/policies/terms/"  tabIndex="-1">Terms</a>
                    -
                    <a className={classes.TnC}  href="//www.google.com/intl/en/policies/privacy/" tabIndex="-1">Privacy</a>
                </div>
            </div>
        </div>
        
    </div>
);

export default Sidebar;
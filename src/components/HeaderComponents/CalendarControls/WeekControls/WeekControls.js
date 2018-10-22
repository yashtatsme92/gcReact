import React from 'react';

import classes from './WeekControls.module.css';

const WeekControls = props => {
    let monthArr = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]
    return (
        <div className={classes.WeekSwitchControllerContainer}>
            <div className={classes.WeekSwitchController}>
                <div className={classes.TodayButtonDiv}>
                    <content className={classes.TodayButtonContent}>
                        <span onClick={() => props.resetCurrentDate()} className={classes.TodayButtonSpan}>
                        TODAY
                        </span>
                    </content>
                </div>
                <div className={classes.CalendarControlsWeekChangeContainer}>
                    <div onClick={() => props.shiftWeek("PREV")} className={classes.CalendarControlsWeekChange}>
                        Prev
                    </div>
                </div>
                <div className={classes.CalendarControlsWeekChangeContainer}>
                    <div onClick={() => props.shiftWeek("NEXT")} className={classes.CalendarControlsWeekChange}>
                        Next
                    </div>
                </div>
                <div className={classes.DateDisplayContainer}>
                    <div className={classes.DateDisplay}>
                        {monthArr[props.currentDate.getMonth()] + " " + props.currentDate.getFullYear()}  
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default WeekControls;
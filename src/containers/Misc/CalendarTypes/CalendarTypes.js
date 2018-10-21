import React, { Component } from "react";

import classes from './CalendarTypes.module.css';

class CalendarTypes extends Component {

    render(){
        return (
            <div className={classes.CalendarTypesContainer}>
                <div className={classes.CalendarTypes}>
                    
                    <div className={classes.AddCalendar}>
                        <div className={classes.Input}>
                            <input type="text"></input>
                            <div className={classes.Add}>
                                Add
                            </div>
                        </div>
                        
                    </div>
                    <div className={classes.SavedCalendarContainer}>
                        <div className={classes.SavedCalendarBox}>
                            <div>
                                <div className={classes.SavedCalendarHeader}>
                                    <content className={classes.SavedCalendarHeaderContent}>
                                        <span className={classes.SavedCalendarHeaderContentSpan}>
                                            <div className={classes.SavedCalendarHeaderContentDiv}>
                                                <div className={classes.SavedCalendarHeaderContentTitle}>
                                                    My calendars
                                                </div>
                                            </div>
                                        </span> 
                                    </content>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.HorizontalSeparator}>
                    </div>

                    <div className={classes.SavedCalendarContainer}>
                        <div className={classes.SavedCalendarBox}>
                            <div>
                                <div className={classes.SavedCalendarHeader}>
                                    <content className={classes.SavedCalendarHeaderContent}>
                                        <span className={classes.SavedCalendarHeaderContentSpan}>
                                            <div className={classes.SavedCalendarHeaderContentDiv}>
                                                <div className={classes.SavedCalendarHeaderContentTitle}>
                                                    Other calendars
                                                </div>
                                            </div>
                                        </span> 
                                    </content>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CalendarTypes;
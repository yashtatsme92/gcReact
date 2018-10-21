import React, { Component } from "react";

import classes from './BoxCalendar.module.css';

class BoxCalendar extends Component {

    state = {
        WDays : ["S","M","T","W","T","F","S"],
        Dates : [
            ["30","1","2","3","4","5","6"],
            ["7","8","9","10","11","12","13"],
            ["14","15","16","17","18","19","20"],
            ["21","22","23","24","25","26","27"],
            ["28","29","30","31","1","2","3"],
            ["4","5","6","7","8","9","10"],
        ]
    }

    render() {
        return (
            <div className={classes.BoxCalendarContainer}>
                <div className={classes.BoxCalendar}>
                    <div className={classes.BoxCalendarHeader}>
                        <span className={classes.MonthYear}>October 2018</span>
                        <div className={classes.Left}>
                            Left
                        </div>
                        <div className={classes.Right}>
                            Right
                        </div>
                    </div>
                    <div className={classes.Grid}>
                        <div className={classes.Row}>
                            {
                                this.state.WDays.map((Day) => (
                                    <span className={classes.ColumnHeader}> {Day}</span>
                                ))
                            }
                        </div>
                        <div className={classes.RowGroup}>
                            {
                                this.state.Dates.map((Row) => (
                                    <div className={classes.Row}>
                                        {
                                            Row.map((Dates)=> (
                                                <span className={classes.Dates}>
                                                    {Dates}
                                                </span>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default BoxCalendar;
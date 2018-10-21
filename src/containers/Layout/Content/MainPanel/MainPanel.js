import React, {Component} from 'react';

import classes from './MainPanel.module.css';

class MainPanel extends Component {

    state = {
        Days : [
            {
                Day: "Sun",
                Date: "21",
                Today : false
            },
            {
                Day: "Mon",
                Date: "22",
                Today : false
            },
            {
                Day: "Tue",
                Date: "23",
                Today : false
            },
            {
                Day: "Wed",
                Date: "24",
                Today : false
            },
            {
                Day: "Thu",
                Date: "25",
                Today : false
            },
            {
                Day: "Fri",
                Date: "26",
                Today : false
            },
            {
                Day: "Sat",
                Date: "27",
                Today : false
            },
        ],
        Time: ["12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm"]
    }
    render() {
        return (
            <div className={classes.MainPanelContainer}>
                <div className={classes.MainPanel}>
                    <div className={classes.MainPanelRow}>
                        <div className={classes.Grid}>
                            <div className={classes.GridHeader}>
                                <div className={classes.BlankCell}>
                                {/* Blank Cell */}
                                </div>
                                <div className={classes.GridHeaderDatesContainer}>
                                    <div className={classes.GridHeaderDatesBox}>
                                        <div className={classes.GridHeaderDatesRow}>
                                            {
                                                this.state.Days.map(Day => (
                                                    <div className={classes.GridHeaderDatesRowCol}>
                                                        <h2 className={classes.HeaderTitle}>
                                                            <div className={classes.HeaderTitleDay}>
                                                                {Day.Day}
                                                            </div>
                                                            <div className={classes.HeaderTitleDate}>
                                                                {Day.Date}
                                                            </div>

                                                        </h2>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.GridBody}>
                                <div className={classes.GridBodyContent}>
                                    <div className={classes.TimeContentContainer}>
                                        <div className={classes.TimeContent}>
                                        {
                                            this.state.Time.map(Time => (
                                                <div className={classes.TimeDiv}>
                                                    <span className={classes.TimeSpan}>
                                                        {Time}
                                                    </span>
                                                </div>
                                            ))
                                        }
                                        </div>
                                    </div>
                                    <div className={classes.EventContentContainer}>
                                        <div className={classes.EventContent}>

                                            {
                                                this.state.Days.map(Day => (
                                                    <div className={classes.ColumnContainer}>
                                                        <div className={classes.Column}>
                                                        {
                                                            this.state.Time.map(Time => (
                                                                <div className={classes.TimeBox}>
                                                                </div>
                                                            ))
                                                        }
                                                            <div>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.GMT}>
                                    <span className={classes.GMTSpan}>GMT+05:30</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default MainPanel;
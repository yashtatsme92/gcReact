import React, {Component} from 'react';

import WeekControls from './WeekControls/WeekControls';

import classes from './CalendarControls.module.css';

class CalendarControls extends Component {
    render(){
        return (
            <div className={classes.CalendarControls}>
                <div className={classes.CalendarControlsLeftContainer}>
                    <div className={classes.CalendarControlsLeftDiv}>
                        <div className={classes.CalendarControlsLeftInnerDiv}>
                            <WeekControls 
                                shiftWeek={(shiftType) => this.props.shiftWeek(shiftType)} 
                                resetCurrentDate={() => this.props.resetCurrentDate()}
                                currentDate={this.props.currentDate}
                            />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default CalendarControls
import React from 'react';

import classes from './EventList.module.css';

const EventList = props => {
    return (
        <div className={classes.EventsContainer}>
            {
                props.EventList.map((event,index) => (
                    <div className={classes.EventContainer}>
                        <div className={[classes.EventName].join(" ")}>
                            {event.title}
                        </div>
                        <div className={classes.DivClass} onClick={() => props.EditEvent(index)}>
                            EDIT
                        </div>
                        <div className={classes.DivClass} onClick={() => props.DeleteEvent(index)}>
                            DELETE
                        </div>
                    </div>
            ))
        }
        </div>
    )  
}

export default EventList;
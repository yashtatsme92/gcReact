import React, {Component} from 'react';

import classes from './AddWidget.module.css';

class AddWidget extends Component {
    render() {
        return (
            <div className={classes.AddWidgetContainer}>
                <div onClick={() => this.props.AddEventTrigger()} className={classes.AddWidget}>
                </div>
            </div>
        )
    }
}

export default AddWidget;
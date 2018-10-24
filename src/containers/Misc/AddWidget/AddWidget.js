import React, {Component} from 'react';

import classes from './AddWidget.module.css';

class AddWidget extends Component {
    render() {
        return (
            <div className={classes.AddWidgetContainer}>
                <div onClick={() => this.props.EventTrigger()} className={classes.AddWidget}>
                    <span className={classes.TextClass}>{this.props.Text}</span>
                </div>
            </div>
        )
    }
}

export default AddWidget;
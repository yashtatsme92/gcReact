import React, {Component} from 'react';

import Aux from './../../../hoc/Auxiliary/Auxiliary';

import classes from './EventDisplay.module.css';

class EventDisplay extends Component {
    
    render() {
        let type;

        for(let i = 0 ; i < this.props.Events.length; i++){
            console.log(this.props.Events[i]);
        }


        let firstBoxClass = [classes.TimeBox];
        let secondBoxClass = [classes.TimeBoxUnder];
        
        if(type === 1)
            firstBoxClass.push(classes.Selected)
        
        if(type === 2)
            secondBoxClass.push(classes.Selected)

        if(type === 3){
            firstBoxClass.push(classes.Selected)
            secondBoxClass.push(classes.Selected)
        }
        
        return (
            <Aux>
                <div id={this.props.Day.Date + "_" + (this.props.Day.Month + 1) + "_" + this.props.Day.Year + "_" + this.props.index + "_0"} className={firstBoxClass.join(" ")} >
                </div>
                <div id={this.props.Day.Date + "_" + (this.props.Day.Month + 1) + "_" + this.props.Day.Year + "_" + this.props.index + "_30"} className={secondBoxClass.join(" ")}>
                </div>
            </Aux>    
        )
    }
}

export default EventDisplay;
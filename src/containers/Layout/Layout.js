import React, {Component} from 'react';

import Header from './Header/Header';
import Content from './Content/Content';

import classes from './Layout.module.css';

class Layout extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            showSidePanel : true,
            currentDate : new Date(),
            todayDate: new Date()
        }
    }

    SelectedDate(date){
        this.setState({
            currentDate: date
        })
    }

    resetCurrentDate() {
        this.setState({
            currentDate: this.state.todayDate
        })
    }

    shiftWeek(shiftType){
        let shift;
        if(shiftType === "PREV")
            shift = -7
        else
            shift = 7
        let newDate = new Date(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth(), this.state.currentDate.getDate() + shift ) 
        this.setState({
            currentDate: newDate
        })
    }

    toggleSidePanel(){
        this.setState({
            showSidePanel: !this.state.showSidePanel
        })
    }

    render() {
        return (
            <div className={classes.Layout}>
                <Header  
                    shiftWeek={(shiftType)=> this.shiftWeek(shiftType)} 
                    resetCurrentDate={() => this.resetCurrentDate()}
                    currentDate={this.state.currentDate} 
                    toggleSidePanel={() => this.toggleSidePanel()}
                />
                <Content
                    SelectedDate={(date) => this.SelectedDate(date)}
                    todayDate={this.state.todayDate} 
                    currentDate={this.state.currentDate} 
                    showSidePanel={this.state.showSidePanel} 
                />
            </div>
        )
    }
}

export default Layout;
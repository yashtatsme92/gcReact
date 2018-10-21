import React, { Component } from "react";

import classes from './BoxCalendar.module.css';

class BoxCalendar extends Component {
    constructor(props){
        super(props);
        let currentMonth = props.todayDate.getMonth() + 1;
        let currentYear = props.todayDate.getFullYear();
        this.state = {
            WDays : ["S","M","T","W","T","F","S"],
            currentMonth: currentMonth,
            currentYear: currentYear,
            currentDateFull : props.todayDate,
            monthNames : ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]
        }
        this.state.GridArr = this.createCalendar(currentYear,currentMonth)
    }

    createCalendar(year,month) {
        let BoxCalendarArr = [];       
        let startDay = new Date(year,month -1, 1).getDay();
        let startDate = -startDay + 1;
        for(let i = 0 ; i < 6; i++){
            let inArr = [];
            for(let j = 0 ; j < 7; j++){
                let newDate = new Date(year,month -1,startDate);
                inArr.push({
                    year: newDate.getFullYear(),
                    month: newDate.getMonth() + 1,
                    day: newDate.getDate()
                })
                startDate++;
            }   
            BoxCalendarArr.push(inArr);
        }
        return BoxCalendarArr;
    }

    prevMonth() {
       let prevMonth =  this.state.currentMonth - 1;
       let prevYear = this.state.currentYear;
       if(prevMonth <= 0) {
            prevMonth = 12;
            prevYear = prevYear - 1
       }
       let gridArr = this.createCalendar(this.state.currentYear,prevMonth,1);
       this.setState({
            GridArr : gridArr,
            currentMonth : prevMonth,
            currentYear: prevYear
       })
    }

    nextMonth() {
        let nextMonth = this.state.currentMonth + 1;
        let nextYear = this.state.currentYear;
        if(nextMonth > 12) {
            nextMonth = 1;
            nextYear = nextYear + 1
        }
        let gridArr = this.createCalendar(this.state.currentYear,nextMonth,1);
        this.setState({
            GridArr : gridArr,
            currentMonth : nextMonth,
            currentYear: nextYear
        })
    }
    

    render() {
        return (
            <div className={classes.BoxCalendarContainer}>
                <div className={classes.BoxCalendar}>
                    <div className={classes.BoxCalendarHeader}>
                        <span className={classes.MonthYear}>{this.state.monthNames[this.state.currentMonth - 1]} {this.state.currentYear}</span>
                        <div onClick={() => this.prevMonth()} className={classes.Left}>
                            Prev
                        </div>
                        <div onClick={() => this.nextMonth()} className={classes.Right}>
                            Next
                        </div>
                    </div>
                    <div className={classes.Grid}>
                        <div className={classes.Row}>
                            {
                                this.state.WDays.map((Day,index) => (
                                    <span className={classes.ColumnHeader} key={index}> {Day}</span>
                                ))
                            }
                        </div>
                        <div className={classes.RowGroup}>
                            {
                                this.state.GridArr.map((Row,indexOut) => (
                                    <div key={indexOut} className={classes.Row}>
                                        {
                                            
                                            Row.map((Dates,index)=> (
                                                <span key={indexOut+ "_"+index} className={classes.Dates}>
                                                    {
                                                        this.state.currentMonth === Dates.month ? (
                                                            <span className={classes.DatesMarked}>
                                                                {Dates.day}
                                                           </span>
                                                        ) : 
                                                        Dates.day
                                                    }
                                                    
                                                    
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
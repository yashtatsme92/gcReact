import React, {Component} from 'react';

import Modal from './../../../Misc/Modal/Modal';
import Aux from './../../../../hoc/Auxiliary/Auxiliary';
import AddEvent from './../../../Misc/AddEvent/AddEvent';
import Addwidget from './../../../Misc/AddWidget/AddWidget';

import classes from './MainPanel.module.css';


class MainPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
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
            Time: ["12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm"],
            Events : [
                {
                    fromDate: "2018-10-16",
                    fromTime: "04:41",
                    toDate: "2018-10-24",
                    toTime: "11:11",
                }
            ],
            showModal: false,
            todayDate: props.todayDate
        }
    }



    AddEventSubmitHandler(eventData){
        console.log("From MainPanel");
        console.log(eventData);
        let eventsArr = this.state.Events;
        eventsArr.push(eventData);
        this.setState({
            ...this.state,
            Events: eventsArr,
            
        })

        console.log(this.state);
    }

    AddEventHandler(){
        this.setState({
            showModal: !this.state.showModal
        })
    }

    CloseModal() {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <Aux>
                <Modal 
                    CloseModal={() => this.CloseModal()}
                    show={this.state.showModal}
                >
                    <AddEvent AddEventHandler={(eventData) => this.AddEventSubmitHandler(eventData)}/>
                </Modal>
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
                                                    this.state.Days.map((Day,index) => (
                                                        <div key={index} className={classes.GridHeaderDatesRowCol}>
                                                            <h2 className={classes.HeaderTitle} >
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
                                                this.state.Time.map((Time,index) => (
                                                    <div key={index} className={classes.TimeDiv}>
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
                                                    this.state.Days.map((Day,indexOut) => (
                                                        <div key={indexOut} className={classes.ColumnContainer}>
                                                            <div className={classes.Column}>
                                                            {
                                                                this.state.Time.map((Time,index) => (
                                                                    <div className={classes.TimeBox} key={indexOut + "_" + index}>
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
                <Addwidget 
                    AddEventTrigger={ () => this.AddEventHandler()} 
                />
            </Aux>
        )
    }
} 

export default MainPanel;
import React, {Component} from 'react';

import Modal from './../../../Misc/Modal/Modal';
import Aux from './../../../../hoc/Auxiliary/Auxiliary';
import AddEvent from './../../../Misc/AddEvent/AddEvent';
import EventDisplay from './../../../Misc/EventDisplay/EventDisplay';
import EventList from './../../../Misc/EventList/EventList';
import Addwidget from './../../../Misc/AddWidget/AddWidget';

import classes from './MainPanel.module.css';


class MainPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            DateContent: this.DatesContentInitializer(props.currentDate),
            Time: ["12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm"],
            Events : [
                {   
                    title: "SOME Event",
                    fromDate: "2018-10-21",
                    fromTime: "11:30am",
                    toDate: "2018-10-21",
                    toTime: "12:00pm",
                },{   
                    title: "SOME Other Event",
                    fromDate: "2018-10-21",
                    fromTime: "11:30am",
                    toDate: "2018-10-21",
                    toTime: "12:00pm",
                },{   
                    title: "SOME Very Other Event",
                    fromDate: "2018-10-24",
                    fromTime: "11:30am",
                    toDate: "2018-10-24",
                    toTime: "12:00pm",
                }
            ],
            showModal: false,
            showModalList: true,
            modalType: "A",
            todayDate: props.todayDate,
            currentDate: props.currentDate
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            DateContent: this.DatesContentInitializer(nextProps.currentDate),
        })
    }

    DatesContentInitializer(currentDate) {
        let weekStart = new Date(currentDate.getFullYear(),currentDate.getMonth(), currentDate.getDate() - currentDate.getDay())
        let DayArr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        let weekArr = [];
        for(let i = 0; i < 7; i++) {
            let nextdate = new Date(weekStart.getFullYear(),weekStart.getMonth(), weekStart.getDate() + i);
            let DateObj = {
                Date : nextdate.getDate(),
                Day : DayArr[i],
                Month: nextdate.getMonth(),
                Year: nextdate.getFullYear(),
            }
            weekArr.push(DateObj);
        }
        return weekArr;
    }

    AddEventSubmitHandler(eventData) {
        let eventsArr = this.state.Events;
        if(eventData.eventPos)
            eventsArr[eventData.eventPos] = eventData
        else
            eventsArr.push(eventData);
        this.setState({
            ...this.state,
            Events: eventsArr,
            showModal: false
        })
    }

    AddEventHandler() {
        this.setState({
            showModal: !this.state.showModal,
            modalType: "A",
        })
    }

    EditDeleteEventHandler(){
        this.setState({
            showModalList: !this.state.showModalList
        })
    }

    EditEventHandler(eventPos) {
        this.setState({
            modalType: "E",
        })
        this.setState({
            showModal: !this.state.showModal,
            showModalList: !this.state.showModalList,
            EventsData : this.state.Events[eventPos],
            eventPos: eventPos
        })
    }

    DeleteEvent(eventPos) {
        let eventsArr = this.state.Events;
        eventsArr.splice(eventPos,1);

        this.setState({
            modalType: "A",
            Events : eventsArr,
            showModal: false
        })
    }

    CloseModal() {
        this.setState({
            showModal: false
        })
    }

    CloseModalList() {
        this.setState({
            showModalList: false
        })
    }

    render() {
        return (
            <Aux>
                <Modal 
                    CloseModal={() => this.CloseModal()}
                    show={this.state.showModal}
                >
                    {this.state.modalType === "A" ?
                    <AddEvent EditDeleteEvent={this.state.modalType} AddEventHandler={(eventData) => this.AddEventSubmitHandler(eventData)}/> 
                    : <AddEvent eventPos={this.state.eventPos} EditDeleteEvent={this.state.modalType} EventData={this.state.Events.length ? this.state.EventsData : null} AddEventHandler={(eventData) => this.AddEventSubmitHandler(eventData)}/> }
                </Modal>
                <Modal
                    CloseModal={() => this.CloseModalList()}
                    show ={this.state.showModalList}
                >
                    <EventList EditEvent={(eventPos) => this.EditEventHandler(eventPos)} DeleteEvent={(eventPos) => this.DeleteEvent(eventPos)} EventList={this.state.Events}/>
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
                                                    this.state.DateContent.map((Day,index) => (
                                                        <div key={index} className={classes.GridHeaderDatesRowCol}>
                                                            <h2 className={classes.HeaderTitle} >
                                                                <div className={classes.HeaderTitleDay}>
                                                                    { Day.Date === this.state.currentDate.getDate() &&  Day.Month === this.state.currentDate.getMonth() && Day.Year === this.state.currentDate.getFullYear() 
                                                                    ? (<span className={classes.SelectedDate}>
                                                                        {Day.Day}
                                                                    </span>) : Day.Day}
                                                                </div>
                                                                <div className={classes.HeaderTitleDate}>
                                                                    { Day.Date === this.state.currentDate.getDate() &&  Day.Month === this.state.currentDate.getMonth() && Day.Year === this.state.currentDate.getFullYear() 
                                                                    ? (<span className={classes.SelectedDate}>
                                                                        {Day.Date}
                                                                    </span>) : Day.Date}
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
                                                    this.state.DateContent.map((Day,indexOut) => (
                                                        <div key={indexOut} className={classes.ColumnContainer}>
                                                            <div className={classes.Column}>
                                                            {
                                                                this.state.Time.map((Time,index) => (
                                                                    
                                                                    <EventDisplay Events={this.state.Events} key={index} type={0} Day={Day} index={index}/>                                                                 
                                                                ))
                                                            }
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
                <div className={classes.WidgetArea}>
                <Addwidget 
                    Text={"Add"}
                    EventTrigger={ () => this.AddEventHandler()} 
                />
                <Addwidget 
                    Text={"Edit"}
                    EventTrigger={ () => this.EditDeleteEventHandler()} 
                />
                </div>
                
            </Aux>
        )
    }
} 

export default MainPanel;
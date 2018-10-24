import React, {Component} from 'react';

import classes from './AddEvent.module.css';

class AddEvent extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: this.props.EditDeleteEvent !== "A" ? this.props.EventData.title : "",
            fromDate: this.props.EditDeleteEvent !== "A"  ? this.props.EventData.fromDate : this.defaultDate(),
            toDate:this.props.EditDeleteEvent !== "A"  ? this.props.EventData.toDate : this.defaultDate(),
            fromTime: this.props.EditDeleteEvent !== "A"  ? this.props.EventData.fromTime : this.defaultTime(0),
            toTime: this.props.EditDeleteEvent !== "A"  ? this.props.EventData.toTime : this.defaultTime(1),
            timeArray : ["12:00am","12:30am","1:00am","1:30am","2:00am","2:30am","3:00am","3:30am","4:00am","4:30am","5:00am","5:30am","6:00am","6:30am","7:00am","7:30am","8:00am","8:30am","9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","12:00pm","12:30pm","1:00pm","1:30pm","2:00pm","2:30pm","3:00pm","3:30pm","4:00pm","4:30pm","5:00pm","5:30pm","6:00pm","6:30pm","7:00pm","7:30pm","8:00pm","8:30pm","9:00pm","9:30pm","10:00pm","10:30pm","11:00pm","11:30pm"],
            eventPos: this.props.EditDeleteEvent !== "A" ? this.props.eventPos : null
        };
        this.SubmitHandler = this.SubmitHandler.bind(this);
        this.fromDateChangeHandler = this.fromDateChangeHandler.bind(this);
        this.toDateChangeHandler = this.toDateChangeHandler.bind(this);
        this.fromTimeChangeHandler = this.fromTimeChangeHandler.bind(this);
        this.toTimeChangeHandler = this.toTimeChangeHandler.bind(this);
        this.titleChangeHandler = this.titleChangeHandler.bind(this)

    }

    componentWillReceiveProps(nextProps){

        this.setState({
            title: nextProps.EditDeleteEvent !== "A" ? nextProps.EventData.title : "",
            fromDate: nextProps.EditDeleteEvent !== "A"  ? nextProps.EventData.fromDate : this.defaultDate(),
            toDate: nextProps.EditDeleteEvent !== "A"  ? nextProps.EventData.toDate : this.defaultDate(),
            fromTime: nextProps.EditDeleteEvent !== "A"  ? nextProps.EventData.fromTime : this.defaultTime(0),
            toTime: nextProps.EditDeleteEvent !== "A"  ? nextProps.EventData.toTime : this.defaultTime(1),
            eventPos: nextProps.EditDeleteEvent !== "A" ? nextProps.eventPos : null
        })
    }

    defaultDate(){
        let todayDate= new Date();
        return todayDate.getFullYear() + "-" + (todayDate.getMonth() + 1) + "-" + todayDate.getDate();
    }

    defaultTime(diff){
        let todayDate = new Date();
        let hours = todayDate.getHours() !== 23 ? todayDate.getHours() + diff : diff;
        let mins = todayDate.getMinutes();
        let H = mins > 30 ? hours + 1 : hours;
        let M = mins > 30 ? "00" : "30";
        let meridies = H < 12 ? "am" : "pm";
        H = H === 0 ? 12 : H < 12 ? H : H - 12;
        return H + ":" + M + ""+ meridies;
    }

    titleChangeHandler(e) {
        this.setState({
            ...this.state,
            title: e.target.value
        })
    }

    fromDateChangeHandler(e) {
        this.setState({
            ...this.state,
            fromDate : e.target.value
        });
    }

    toDateChangeHandler(e) {
        this.setState({
            ...this.state,
            toDate : e.target.value
        });
    }

    fromTimeChangeHandler(e) {
        this.setState({
            ...this.state,
            fromTime : e.target.value
        });
    }

    toTimeChangeHandler(e) {
        this.setState({
            ...this.state,
            toTime : e.target.value
        });
    }

    SubmitHandler(e) {
        let dataToPost = {
            title: this.state.title,
            fromDate: this.state.fromDate,
            toDate: this.state.toDate,
            fromTime: this.state.fromTime,
            toTime: this.state.toTime,
        }
        if(this.state.eventPos)
            dataToPost.eventPos = this.state.eventPos
        this.props.AddEventHandler(dataToPost);
        this.setState({
            title: "",
            fromDate: this.defaultDate(),
            toDate: this.defaultDate(),
            fromTime: this.defaultTime(0),
            toTime: this.defaultTime(1)
        });
        e.preventDefault();
    }


    render() {
        return (
            <div>
                <div className={classes.HeaderContainer}>
                    <div className={classes.divFloat}>
                    {
                        this.props.EditDeleteEvent !== "A"  ? (<span>Edit Event</span>) : (<span>Add Event?</span>) 
                    }
                    </div>
                    
                        {this.props.EditDeleteEvent !== "A"  ? 
                            <div onClick={() => this.props.DeleteEvent()} className={[classes.divFloat,classes.cursor].join(" ")}>
                                <span>DELETE</span> 
                            </div>
                            : null}
                    </div>
                
                
                
                <form method="POST" onSubmit={this.SubmitHandler}>
                    <label className={classes.InputLabel}>
                        <div className={classes.InputDiv}>
                            <div className={classes.InnerInputDiv}>
                                <input className={classes.Input} autoComplete="off" required name="title" value={this.state.title} onChange={this.titleChangeHandler} placeholder="Add Title"></input>
                            </div>
                        </div>
                    </label>
                    <div className={classes.OtherInputContainers}>
                        <div className={classes.InputGroup}>
                            <div className={classes.InputRow}>
                                <div className={classes.InnerInputRow}>
                                    <div className={classes.TwoGroup}>
                                        
                                        <label className={classes.InputLabel}>
                                            <div className={classes.InputDiv}>
                                                <div className={classes.InnerInputDiv}>
                                                    <input className={classes.Input} required value={this.state.fromDate} type="date" onChange={this.fromDateChangeHandler} name="fromDate" placeholder="From Date"></input>
                                                </div>
                                            </div>
                                        </label>
                                        
                                        
                                        <label className={classes.InputLabel}>
                                            <div className={classes.InputDiv}>
                                                <div className={classes.InnerInputDiv}>
                                                    <select defaultValue={this.state.fromTime} className={classes.Input}>
                                                        {
                                                            this.state.timeArray.map((time,index) => (
                                                                <option  key={"from_"+index}>{time}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                        <div>

                                            to
                                        </div>
                                    <div className={classes.TwoGroup}>
                                        <label className={classes.InputLabel}>
                                            <div className={classes.InputDiv}>
                                                <div className={classes.InnerInputDiv}>
                                                <input className={classes.Input} required type="date" value={this.state.toDate} onChange={this.toDateChangeHandler} name="toDate" placeholder="From Date"></input>
                                                </div>
                                            </div>
                                        </label>
                                        <label className={classes.InputLabel}>
                                            <div className={classes.InputDiv}>
                                                <div className={classes.InnerInputDiv}>
                                                    <select defaultValue={this.state.toTime} className={classes.Input}>
                                                        {
                                                            this.state.timeArray.map((time,index) => (
                                                                <option key={"to_"+index}>{time}</option>
                                                            ))
                                                        }
                                                    </select>
                                                    {/* <input className={classes.Input} required type="time" value={this.state.toTime} onChange={this.toTimeChangeHandler} name="toTime" placeholder="From Date"></input> */}
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input className={classes.Submit} required type="submit" value="Save"></input>
                </form>
                
                
            </div>
        )
    }
}

export default AddEvent;
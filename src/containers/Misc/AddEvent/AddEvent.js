import React, {Component} from 'react';

import classes from './AddEvent.module.css';

class AddEvent extends Component {

    constructor(props){
        super(props);
        this.state = {
            fromDate:"",
            toDate:"",
            fromTime:"",
            toTime:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fromDateChangeHandler = this.fromDateChangeHandler.bind(this);
        this.toDateChangeHandler = this.toDateChangeHandler.bind(this);
        this.fromTimeChangeHandler = this.fromTimeChangeHandler.bind(this);
        this.toTimeChangeHandler = this.toTimeChangeHandler.bind(this);

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

    handleSubmit(e) {
        console.log(this.state);
        this.props.AddEventHandler(this.state);
        this.setState({
            fromDate:"",
            toDate:"",
            fromTime:"",
            toTime:""
        });
        e.preventDefault();
    }


    render() {
        return (
            <div>
                <span>Add Event?</span>
                <form method="POST" onSubmit={this.handleSubmit}>
                    <label className={classes.InputLabel}>
                        <div className={classes.InputDiv}>
                            <div className={classes.InnerInputDiv}>
                                <input className={classes.Input} autoComplete="off" required name="title" placeholder="Add Title"></input>
                            </div>
                        </div>
                    </label>
                    <div className={classes.OtherInputContainers}>
                        <div className={classes.InputGroup}>
                            <div className={classes.InputRow}>
                                <div className={classes.InnerInputRow}>
                                    <div className={classes.TwoGroup}>
                                        <div className={classes.paddingFive}>
                                            <label className={classes.InputLabel}>
                                                <div className={classes.InputDiv}>
                                                    <div className={classes.InnerInputDiv}>
                                                        <input className={classes.Input} required value={this.state.fromDate} type="date" onChange={this.fromDateChangeHandler} name="fromDate" placeholder="From Date"></input>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        
                                        <label className={classes.InputLabel}>
                                            <div className={classes.InputDiv}>
                                                <div className={classes.InnerInputDiv}>
                                                    <input className={classes.Input} required type="time" value={this.state.fromTime} onChange={this.fromTimeChangeHandler} name="fromTime" placeholder="From Date"></input>
                                                </div>
                                            </div>
                                        </label>
                                        <div>
                                            to
                                        </div>
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
                                                <input className={classes.Input} required type="time" value={this.state.toTime} onChange={this.toTimeChangeHandler} name="toTime" placeholder="From Date"></input>
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
import React, {Component} from 'react';

import Sidebar from './Sidebar/Sidebar';
import MainPanel from './MainPanel/MainPanel';

import classes from './Content.module.css';

class Content extends Component {

    constructor(props){
        super(props)
        this.state = {
            todayDate : new Date()
        }
    }
    render() {
        return (
            <div className={classes.Content}>
                <Sidebar showSidePanel={this.props.showSidePanel} todayDate={this.state.todayDate}/>
                <MainPanel todayDate={this.state.todayDate}/>
            </div>
        )
    }
} 


export default Content;
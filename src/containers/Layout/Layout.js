import React, {Component} from 'react';

import Header from './Header/Header';
import Content from './Content/Content';

import classes from './Layout.module.css';

class Layout extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            showSidePanel : true
        }
    }

    toggleSidePanel(){
        this.setState({
            showSidePanel: !this.state.showSidePanel
        })
    }

    render() {
        return (
            <div className={classes.Layout}>
                <Header toggleSidePanel={() => this.toggleSidePanel()}/>
                <Content showSidePanel={this.state.showSidePanel} />
            </div>
        )
    }
}

export default Layout;
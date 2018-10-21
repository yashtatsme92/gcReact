import React from 'react';

import Sidebar from './Sidebar/Sidebar';
import MainPanel from './MainPanel/MainPanel';

import classes from './Content.module.css';

const Content = props => (
    <div className={classes.Content}>
        <Sidebar/>
        <MainPanel/>
    </div>
);


export default Content;
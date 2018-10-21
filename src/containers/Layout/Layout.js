import React from 'react';

import Header from './Header/Header';
import Content from './Content/Content';
import Addwidget from './../Misc/AddWidget/AddWidget';

import classes from './Layout.module.css';

const Layout = props => (
    <div className={classes.Layout}>
        <Header/>
        <Content/>
        <Addwidget/>
    </div>
);

export default Layout;
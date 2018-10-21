import React from 'react';

import Header from './Header/Header';
import Content from './Content/Content';

import classes from './Layout.module.css';

const Layout = props => (
    <div className={classes.Layout}>
        <Header/>
        <Content/>
    </div>
);

export default Layout;
import React from 'react';

import classes from './HeaderIcon.module.css';

const HeaderIcon = props => (
    <div className={classes.HeaderIcon}>
        <div onClick={() => props.toggleSidePanel()} className={classes.Icon}>
            <div className={classes.Hamburger}></div>
            <div className={classes.Hamburger}></div>
            <div className={classes.Hamburger}></div>
        </div>
    </div>
);

export default HeaderIcon;
import React from 'react';

import HeaderIcon from './../../../components/HeaderComponents/HeaderIcon/HeaderIcon';
import CalendarControls from './../../../components/HeaderComponents/CalendarControls/CalendarControls';
import AccountSettings from './../../../components/HeaderComponents/AccountSettings/AccountSettings';


import classes from './Header.module.css';

const Header = props => (
    <div className={classes.Header}>
        <HeaderIcon toggleSidePanel={() => props.toggleSidePanel()}/>
        <CalendarControls/>
        <AccountSettings/>
    </div>
);

export default Header;
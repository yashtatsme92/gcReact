import React from 'react';

import classes from './MainPanel.module.css';

const MainPanel = props => (
    <div className={classes.MainPanelContainer}>
        <div className={classes.MainPanel}>
            <div className={classes.MainPanelRow}>
                <div className={classes.Grid}>
                    <div className={classes.GridHeader}>
                        <div className={classes.BlankCell}>
                            BlankCell   
                        </div>
                        <div className={classes.GridHeaderDatesContainer}>
                            <div className={classes.GridHeaderDatesBox}>

                            </div>
                            Dates
                        </div>
                        Header
                    </div>
                    <div className={classes.GridBody}>
                    GridBody
                    </div>
                
                </div>
            
            </div>
        
        </div>
        
    </div>
);

export default MainPanel;
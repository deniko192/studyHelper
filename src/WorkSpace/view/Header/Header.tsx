import { useAction } from '@reatom/react';
import React from 'react';
import { addDayAction } from '../Main/view/Days/model/daysAtom';
import styles from './Header.module.css';

function Header(){
    const addDay = useAction(addDayAction);

    return(
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    Study Helper
                </div>
                <div className={styles.logout}>
                    Logout
                </div>
                <div className={styles.toolBar}>
                    <div 
                        className={styles.toolBarItem}
                        onClick={() => {addDay()}} 
                    >
                        add
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
import React from 'react';
import styles from './Header.module.css';

function Header(){
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
                    <div className={styles.toolBarItem}>
                        add
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
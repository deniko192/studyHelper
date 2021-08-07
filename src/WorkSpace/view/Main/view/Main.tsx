import React from 'react';
import Days from './Days/view/Days';
import styles from './Main.module.css';

function Main() {
    return(
        <div className={styles.block}>
            <Days />            
        </div>
    );
}

export default Main;
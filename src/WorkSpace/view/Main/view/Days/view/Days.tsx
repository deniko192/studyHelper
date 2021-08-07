import { useAtom } from '@reatom/react';
import React from 'react';
import Day from '../Day/Day';
import daysAtom from '../model/daysAtom';
import styles from './Days.module.css';

function Days() {
    const days = useAtom(daysAtom);

    return (
        !days ? <div>empty...</div> :
        <div className={styles.block}>
            {days.map(day => 
            <Day
                date={day.date}
                subjects={day.subjects}
                input={day.input}
            />)}
        </div>
    );
}

export default Days;
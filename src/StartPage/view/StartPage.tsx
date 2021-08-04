import React from 'react';
import { setUserAction } from '../model/userAtom';
import styles from './StartPage.module.css';
import { useAction } from '@reatom/react'; 
import { useState } from 'react';
import Cookies from 'js-cookie';

function StartPage() {
    const setUser = useAction(setUserAction);
    const [val, setValue] = useState('');
    return (
        <div className={styles.startPage}>
            <div className={styles.wrapper}>
                <div className={styles.title}>Study Helper</div> 
                <div className={styles.form}>
                    <div>
                        <div>Login</div>
                        <input
                            value={val} 
                            onChange={e => {
                                setValue(e.currentTarget.value)
                            }}
                            onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    setUser(val);
                                    Cookies.set('name', val);
                                }
                            }}
                            type="text" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );        
}

export default StartPage;
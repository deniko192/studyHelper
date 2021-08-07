import { useAction, useAtom } from '@reatom/react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { removeUserAction, userAtom } from '../../StartPage/model/userAtom';
import styles from './WorkSpace.module.css';
import Header from './Header/Header';
import Main from './Main/view/Main';

function WorkSpace() {
    const user = useAtom(userAtom);
    const removeUser = useAction(removeUserAction);

    const logout = () => {
        Cookies.remove('name');
        removeUser();
    }

    const LogoutBtn = () => (
        <button 
                onClick={() => logout()}
            ><Link to="/">logout</Link></button>
    );

    return(
        <div className={styles.WorkSpace}>
            <Header />
            <Main />
        </div>
    );
}

export default WorkSpace;
import { useAction } from '@reatom/react';
import { taskToggleAction } from '../../../model/daysAtom';
import styles from './Task.module.css';

type TProps = {
    name: string;
    completed: boolean;
    subjectName: string;
    date: string;
}

function Task({name, completed, subjectName, date}: TProps) {
    const taskToggle = useAction(taskToggleAction);
    return(
        <div 
            className={completed ? styles.taskCompleted : styles.task }
            onClick={() => {
                taskToggle({date, subjectName, taskName: name});
            }}
        >
            {name}
        </div> 
    );
}

export default Task;
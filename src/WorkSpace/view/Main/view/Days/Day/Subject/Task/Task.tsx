import styles from './Task.module.css';

type TProps = {
    name: string;
    completed: boolean;
}



function Task({name, completed}: TProps) {
    return(
        <div className={completed ? styles.taskCompleted : styles.task }>
            {name}
        </div> 
    );
}

export default Task;
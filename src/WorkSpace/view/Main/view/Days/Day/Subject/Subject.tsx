import styles from './Subject.module.css';
import Task from './Task/Task';

interface ITask {
    name: string;
    completed: boolean;
}

type SProps = {
    name: string;
    input: boolean;
    tasks: Array<ITask>|null;
}

function Subject({ name, tasks, input }: SProps) {
    return (
        <div className={styles.subject}>
            <div>
                {name}
                <div className={styles.addTaskBtn}></div>
            </div>
            <div className={styles.tasks}>
                {
                    !tasks
                    ? <div>Пока нет задач...</div>
                    :  tasks.map((task) => <Task 
                        name={task.name} 
                        completed={task.completed}
                    />)
                }
            </div>
            {
                !input ? null:
                    <div className={styles.taskInput}>
                        <input 
                            type="text" 
                            placeholder="Ex.57, p.32" 
                        />
                    </div>
            }

        </div>    
    );
}

export default Subject;
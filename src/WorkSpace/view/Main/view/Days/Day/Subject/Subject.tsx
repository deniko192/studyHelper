import { useAction } from '@reatom/react';
import { useState } from 'react';
import { addTaskAction, taskInputDisplayAction } from '../../model/daysAtom';
import styles from './Subject.module.css';
import Task from './Task/Task';

interface ITask {
    name: string;
    completed: boolean;
}

type SProps = {
    date: string;
    name: string;
    input: boolean;
    tasks: Array<ITask>|null;
}

function Subject({date, name, tasks, input }: SProps) {
    const inputDisplay = useAction(taskInputDisplayAction);
    const addTask = useAction(addTaskAction);

    const [inputValue, setInputValue] = useState('');
    return (
        <div className={styles.subject}>
            <div>
                {name}
                <div className={styles.addTaskBtn} onClick={() => {inputDisplay({date, subjectName: name, display: true})}}></div>
            </div>
            <div className={styles.tasks}>
                {
                    !tasks?.length
                    ? <div>Пока нет задач...</div>
                    :  tasks.map((task) => <Task 
                        name={task.name} 
                        completed={task.completed}
                        date={date}
                        subjectName={name}
                    />)
                }
            </div>
            {
                !input ? null:
                    <div className={styles.taskInput}>
                        <input 
                            type="text" 
                            placeholder="Ex.57, p.32"
                            value={inputValue}
                            onChange={e => {
                                if (e.currentTarget.value.length < 36) {
                                    setInputValue(e.currentTarget.value);
                                }
                            }}
                            onKeyPress={e => {
                                if (e.key === 'Enter') {
                                    if (inputValue &&   !tasks?.some(t => t.name === inputValue) ) {
                                        addTask({date, subjectName: name, taskName: inputValue});
                                        setInputValue('');
                                        inputDisplay({date, subjectName: name, display: false});  
                                    } 
                                }
                            }}
                            onBlur={() => {
                                setInputValue('');
                                inputDisplay({date, subjectName: name, display: false});
                            }}
                        />
                    </div>
            }

        </div>    
    );
}

export default Subject;
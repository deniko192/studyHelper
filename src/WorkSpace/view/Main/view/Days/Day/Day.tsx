import { useAction } from '@reatom/react';
import { useState } from 'react';
import { addSubjectAction, deleteDayAction, subjectInputDisplayAction } from '../model/daysAtom';
import { DayType } from '../model/dType';
import styles from './Day.module.css';
import Subject from './Subject/Subject';

function Day({ date, subjects, input }: DayType) {
    const deleteDay = useAction(deleteDayAction);
    const addSubject = useAction(addSubjectAction);
    const inputDisplay = useAction(subjectInputDisplayAction);

    const [inputValue, setInputValue] = useState('');
    return(
        <div className={styles.day}>
                <div className={styles.date}>
                    {date}
                    <div className={styles.addSubjectBtn} onClick={() => {inputDisplay({date, display: true})}}></div>
                    <div className={styles.deleteDayBtn} onClick={() => {deleteDay(date)}}></div>
                </div>

                <div className={styles.subjects}>
                    {
                        !subjects.length
                            ? <div className={styles.noDataText}>Добавьте предметы...</div>
                            : subjects.map((subject) => 
                                <Subject 
                                    name={subject.name}
                                    tasks={subject.tasks}
                                    input={subject.input}
                                    date={date}
                                />)             
                    }
                </div>
                {   
                    !input ? null:
                    <div className={styles.subjectInput}>
                        <input 
                            type="text" 
                            placeholder="Англ. яз" 
                            value={inputValue}
                            onChange={(e) => {
                                if (e.currentTarget.value.length < 36) {
                                    setInputValue(e.currentTarget.value)
                                }
                            }}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    if (inputValue && !subjects.some(s => s.name === inputValue)  ) {
                                        addSubject({date, subjectName: inputValue});
                                        setInputValue('');
                                        inputDisplay({date, display: false});   
                                    }
                                }   
                            }}
                            onBlur={() => {
                                setInputValue('');
                                inputDisplay({date, display: false});
                            }}
                        />
                    </div>
                }   
            </div>
    );
}

export default Day;
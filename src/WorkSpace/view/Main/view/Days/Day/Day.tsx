import { DayType } from '../model/dType';
import styles from './Day.module.css';
import Subject from './Subject/Subject';

function Day({ date, subjects, input }: DayType) {
    return(
        <div className={styles.day}>
                <div className={styles.date}>
                    {date}
                    <div className={styles.addSubjectBtn}></div>
                    <div className={styles.deleteDayBtn}></div>
                </div>

                <div className={styles.subjects}>
                    {
                        !subjects
                            ? <div className={styles.noDataText}>Добавьте предметы...</div>
                            : subjects.map((subject) => 
                                <Subject 
                                    name={subject.name}
                                    tasks={subject.tasks}
                                    input={subject.input}
                                />)             
                    }
                </div>
                {   
                    !input ? null:
                    <div className={styles.subjectInput}>
                        <input 
                            type="text" 
                            placeholder="Англ. яз" 
                        />
                    </div>
                }   
            </div>
    );
}

export default Day;
import { declareAction } from '@reatom/core';
import { 
    DayType, 
    DaySubjectPayload, 
    DaySubjectTaskPayload, 
    SubjInputDisplayPayload, 
    TaskInputDisplayPayload, 
    TaskTogglePayload } from './dType';
import { declareAtom } from '@reatom/core';

const dayMock = [
    {
        date: '21.33.2222',
        subjects: [
            {
                name: 'Math',
                tasks: [
                    {
                        name: 'p.23, ex-12',
                        completed: false
                    }
                ],
                input: false,
            }
        ],
        input: false
    },
];

const addDayAction = declareAction();
const deleteDayAction = declareAction<string>();
const addSubjectAction = declareAction<DaySubjectPayload>();
const addTaskAction = declareAction<DaySubjectTaskPayload>();
const subjectInputDisplayAction = declareAction<SubjInputDisplayPayload>();
const taskInputDisplayAction = declareAction<TaskInputDisplayPayload>();
const taskToggleAction = declareAction<TaskTogglePayload>();

const daysAtom = declareAtom<Array<DayType>|Array<any>>(dayMock, (on) => [
    on(addDayAction, (state) => {
        const date = new Date();
        if (state.some(day => day.date === date.toLocaleDateString())) {
            return state;
        }
        return [...state, {date: date.toLocaleDateString(), subjects: [], input: false}]
    }),
    on(deleteDayAction, (state, payload) => {
        return [...state.filter(day => day.date !== payload)];
    }),
    on(subjectInputDisplayAction, (state, payload) => {
        return state.map(day => {
            if (day.date === payload.date) {
                return {...day, input: payload.display}
            }
            return day;
        })
    }),
    on(taskInputDisplayAction, (state, payload) => {
        return state.map(day => {
            if (day.date === payload.date) {
                return {...day, subjects: day.subjects.map((subject:any) => {
                    if (subject.name === payload.subjectName) {
                        return {...subject, input: payload.display}
                    }
                    return subject;
                })}
            }   
            return day;
        });
    }),
    on(addSubjectAction, (state, payload) => {
        return state.map(day => {
            if (day.date === payload.date) {
                return {...day, subjects: [...day.subjects, {name: payload.subjectName, tasks: [], input: false}]}
            }
            return day;
        });
    }),
    on(addTaskAction, (state, payload) => {
        return state.map(day => {
            if (day.date === payload.date) {
                return {...day, subjects: day.subjects.map((subject:any) => {
                    if (subject.name === payload.subjectName) {
                        return {...subject, tasks: [...subject.tasks, {name: payload.taskName, completed: false}]}
                    }
                    return subject;
                })}
            }
            return day;
        });
    }),
    on(taskToggleAction, (state, payload) => {
        return state.map(day => {
            if (day.date === payload.date) {
                return {...day, subjects: day.subjects.map((subject: any) => {
                    if (subject.name === payload.subjectName) {
                        return {...subject, tasks: subject.tasks.map((task: any) => {
                            if (task.name === payload.taskName) {
                                return {...task, completed: !task.completed}
                            }
                            return task;
                        })};
                    }
                    return subject;
                })}
            }
            return day;
        });
    }),
  ]);

export {
    daysAtom,
    addDayAction,
    deleteDayAction,
    addSubjectAction,
    addTaskAction,
    subjectInputDisplayAction,
    taskInputDisplayAction,
    taskToggleAction
}
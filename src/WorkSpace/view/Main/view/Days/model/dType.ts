interface ITask {
    name: string;
    completed: boolean;
}

interface ISubject   {
    name: string;
    tasks: Array<ITask>|Array<any>;
    input: boolean;
}

type DayType = {
    date: string;
    subjects: Array<ISubject> | Array<any>;
    input: boolean;
}

interface DaySubjectPayload {
    date: string;
    subjectName: string;
}

interface DaySubjectTaskPayload {
    date: string;
    subjectName: string;
    taskName: string;
}

interface SubjInputDisplayPayload {
    date: string;
    display: boolean;
}

interface TaskInputDisplayPayload {
    date: string;
    subjectName: string; 
    display: boolean;
}

interface TaskTogglePayload {
    date: string;
    subjectName: string;
    taskName: string;
}

export type {
    DayType,
    DaySubjectPayload,
    DaySubjectTaskPayload,
    SubjInputDisplayPayload,
    TaskInputDisplayPayload,
    TaskTogglePayload
}

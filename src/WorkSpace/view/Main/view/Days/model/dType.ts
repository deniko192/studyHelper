interface ITask {
    name: string;
    completed: boolean;
}

interface ISubject   {
    name: string;
    tasks: Array<ITask> | null;
    input: boolean;
}

export type DayType = {
    date: string;
    subjects: Array<ISubject> | null;
    input: boolean;
}


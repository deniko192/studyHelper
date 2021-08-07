import { DayType } from './dType';
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
    {
        date: '21.33.222222',
        subjects: [
            {
                name: 'Eng',
                tasks: [
                    {
                        name: 'p.23, ex-12',
                        completed: false
                    },
                    {
                        name: 'p.2223, ex-1223',
                        completed: true
                    }
                ],
                input: true,
            }
        ],
        input: true
    }
];

const daysAtom = declareAtom<Array<DayType>|null>(dayMock, (on) => {
    
});

export default daysAtom;
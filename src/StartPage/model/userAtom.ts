import { declareAction, declareAtom } from "@reatom/core";

const setUserAction = declareAction<string|null>();
const removeUserAction = declareAction();

const userAtom = declareAtom<string|null>(null, (on) => [
    on(setUserAction, (_, payload) => payload),
    on(removeUserAction, () => null),
]); 

export {
    userAtom,
    setUserAction,
    removeUserAction
}
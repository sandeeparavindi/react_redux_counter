export const initiantiate = 0;

export function countReducer(state: number = initiantiate, action: {type: string, payload: number}) {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
}
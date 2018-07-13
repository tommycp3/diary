import { NOTE_STATUS, USER_STATUS } from '../actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case NOTE_STATUS:
            // ...state means keep carring on the old state as well.
            // here we are giving the action.payload a name so that later on we can reference .notes or .user for the payload
            return { ...state, notes: action.payload }
        case USER_STATUS:
            return { ...state, user: action.payload }
        default:
            return state;    
    }
}
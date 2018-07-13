import { GET_NOTES, NOTE_STATUS } from '../actionTypes';
import { database } from '../firebase';


export function getNotes() {
    return dispatch => {
        // as soon as this funtion fires show loading to true
        dispatch({
            type: NOTE_STATUS,
            payload: true
        });

        database.on('value', snapshot => {
            dispatch({
                type: GET_NOTES,
                payload: snapshot.val()
            })
        });

        // as soon as notes are recieved show loading to false
        dispatch({
            type: NOTE_STATUS,
            payload: false
        },
            // wait some time and try again if there is an issue
            () => {
                dispatch({
                    type: NOTE_STATUS,
                    payload: -1
                })
            });

        
    }

}


export function saveNote(note) {
    return dispatch => database.push(note)

}

export function deleteNote(id) {
    return dispatch => database.child(id).remove();
}


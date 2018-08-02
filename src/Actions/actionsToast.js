
const actions = {};

let id = 1;

const defaultOptions = {
    color: "#6796e6"
};


const createToast = (type, text, id) => {
    return {
        type,
        text,
        id
    }
}


const removeToast = (dispatch, currentId) => {
    setTimeout(() => {
        dispatch({
            type: 'REMOVE_TOAST',
            payload: currentId
        });
    }, 3000);
}

actions.setToast = (dispatch, text ,type='') => {
    id++;

    dispatch({
        type: 'SET_MEASSAGES',
        payload: createToast(type, text, id)
    });

    removeToast(dispatch, id);

}

export default actions;

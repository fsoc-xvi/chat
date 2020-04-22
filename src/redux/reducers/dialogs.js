const initialState = {
    items: [],
    currentDialogId:null,
    isLoading:false,
};

export default (state=initialState, {type, payload}) => {
    switch (type) {
        case 'DIALOGS:SET_ITEMS':
            return {
                ...state, items:payload
            };
        case 'DIALOGS:SET_CURRENT_DIALOG_ID':
            return {
                ...state, currentDialogId:payload
            };
        case 'DIALOGS:SET_IS_LOADING':
            return {
                ...state, isLoading:payload
            };
        default:
            return state
    }
}
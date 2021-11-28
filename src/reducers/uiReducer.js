import  * as uiConstants from '../constants/uiConstants';


const initialState = {
    showLoading : false,
}

const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case uiConstants.SHOW_LOADING : {
            const { value } = action.payload;
           return {
               ...state,
               showLoading: value,
           }
        }   
        default : {
            return {
                ...state,
            }
        }
    }
}

export default uiReducer;
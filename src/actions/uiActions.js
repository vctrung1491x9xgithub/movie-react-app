import * as uiConstants from '../constants/uiConstants';

export const showLoading = (value) => {
    return {
        type : uiConstants.SHOW_LOADING,
        payload : {
            value,
        }
    }
}
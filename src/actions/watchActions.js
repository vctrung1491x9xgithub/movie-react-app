import * as watchConstants from '../constants/watchConstants';

export const fetchInfo = (mediaType, id) => {
    return {
        type: watchConstants.FETCH_INFO,
        payload: {
            mediaType,
            id
        }
    }
}

export const fetchInfoSuccess = data => {
    return {
        type: watchConstants.FETCH_INFO_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchInfoFailed = error => {
    return {
        type: watchConstants.FETCH_INFO_FAILED,
        payload: {
            error
        }
    }
}

export const fetchCast = (mediaType, id) => {
    return {
        type: watchConstants.FETCH_CAST,
        payload: {
            mediaType,
            id
        }
    }
}

export const fetchCastSuccess = data => {
    return {
        type: watchConstants.FETCH_CAST_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchCastFailed = error => {
    return {
        type: watchConstants.FETCH_CAST_FAILED,
        payload: {
            error
        }
    }
}


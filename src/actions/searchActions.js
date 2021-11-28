import * as searchConstants from '../constants/searchConstants';

export const setKeyword = (keyword) => {
    return {
        type: searchConstants.SET_KEYWORD,
        payload: {
            keyword
        }
    }
}

export const setType = (type) => {
    return {
        type: searchConstants.SET_TYPE,
        payload: {
            type
        }
    }
}

export const fetchSearch = (type, params = {}) => {
    return {
        type: searchConstants.FETCH_SEARCH,
        payload: {
            type,
            params
        }
    }
}

export const fetchSearchSuccess = (data) => {
    return {
        type: searchConstants.FETCH_SEARCH_SUCCESS,
        payload: {
            data
        }
    }
}
export const fetchSearchFailed = (error) => {
    return {
        type: searchConstants.FETCH_SEARCH_FAILED,
        payload: {
            error
        }
    }
}

export const setCurrentPage = (page) => {
    return {
        type: searchConstants.SET_CURRENT_PAGE_SEARCH,
        payload: {
            page
        }
    }
}
import * as searchConstants from '../constants/searchConstants';
import { MESSAGES } from '../constants';
const initialState = {
    type: 0,
    keyword: '',
    listData: [],
    currentPage: 1,
    totalPages: 1,
    totalResults: 0,
    message:  MESSAGES.title,
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case searchConstants.SET_KEYWORD:
            const { txtSearch } = action.payload.keyword; 
            return {
                ...state,
                keyword: txtSearch, 
            }
        case searchConstants.SET_TYPE:
            const { type } = action.payload; 
            return {
                ...state,
                type, 
                currentPage: 1,
            }
        case searchConstants.FETCH_SEARCH:
            return {
                ...state
            }
        case searchConstants.FETCH_SEARCH_SUCCESS:
            const { results, total_pages, total_results } = action.payload.data;
            return {
                ...state,
                listData: results,
                totalPages: total_pages,
                totalResults: total_results,
                message: results ? MESSAGES.null : null,
            }
        case searchConstants.FETCH_SEARCH_FAILED:
            const { error } = action.payload;
            const errorMessage = error.toString();
            return {
                ...state,
                message: errorMessage,
            }
        case searchConstants.SET_CURRENT_PAGE_SEARCH: 
            const { page } = action.payload;
            return {
                ...state,
                currentPage: page,
            }
        default:
            return {
                ...state
            }
    }
}

export default searchReducer;
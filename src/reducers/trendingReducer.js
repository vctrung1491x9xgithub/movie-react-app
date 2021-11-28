import * as trendingConstants from '../constants/trendingConstants';

const initialState = {
    listTrending: [],
    totalPages: 1,
    currentPage: 1,
    error: ''
};

const trendingReducer = (state = initialState, action) => {
    switch (action.type) {
        case trendingConstants.FECTH_TRENDING: {
            return {
                ...state,
                listTrending: [],
            }
        }
        case trendingConstants.FECTH_TRENDING_SUCCESS: {
            const { results, total_pages } = action.payload.data;
            return {
                ...state,
                listTrending: results,
                totalPages: total_pages
            };
        }
        case trendingConstants.FECTH_TRENDING_FAILED: {
            const { error } = action.payload;
            const errorMessage = error.toString();
            return {
                ...state,
                error: errorMessage
            };
        }
        case trendingConstants.SET_TRENDING_CURRENT_PAGE: {
            const { number } = action.payload; 
            return {
                ...state,
                currentPage: number
            };
        }

        default:
            return {
                ...state
            };
    }
}
export default trendingReducer;
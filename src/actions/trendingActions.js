import * as trendingConstants from '../constants/trendingConstants';

export const fecthTrending = (params = {}) => {
    return {
        type: trendingConstants.FECTH_TRENDING,
        payload: {
            params,
        }
    }
}

export const fecthTrendingSuccess = (data) => {
    return {
        type: trendingConstants.FECTH_TRENDING_SUCCESS,
        payload: {
            data
        }
    }
}

export const fecthTrendingFailed = (error) => {
    return {
        type: trendingConstants.FECTH_TRENDING_FAILED,
        payload: {
            error
        }
    }
}

export const setTrendingCurrentPage = (number) => {
    return {
        type: trendingConstants.SET_TRENDING_CURRENT_PAGE,
        payload: {
            number
        }
    }
}
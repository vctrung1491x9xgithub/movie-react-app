import * as tvSeriesTypes from '../constants/tvSeriesConstants';

export const fetchTvSeries = (params = {}) => {
    return {
        type: tvSeriesTypes.FETCH_TVSERIES,
        payload: {
            params,
        }
    }
}

export const fetchTvSeriesSuccess = (data) => {
    return {
        type: tvSeriesTypes.FETCH_TVSERIES_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchTvSeriesFailed = (error) => {
    return {
        type: tvSeriesTypes.FETCH_TVSERIES_FAILED,
        payload: {
            error
        }
    }
}

export const setTvSeriesCurrentPage = (number) => {
    return {
        type: tvSeriesTypes.SET_TVSERIES_CURRENT_PAGE,
        payload: {
            number
        }
    }
}


export const fetchTvSeriesGenres = (type) => {
    return {
        type: tvSeriesTypes.FETCH_TVSERIES_GENRES,
        payload: {
            type
        }
    }
}

export const fetchTvSeriesGenresSuccess = (data) => {
    return {
        type: tvSeriesTypes.FETCH_TVSERIES_GENRES_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchTvSeriesGenresFailed = (error) => {
    return {
        type: tvSeriesTypes.FETCH_TVSERIES_GENRES_FAILED,
        payload: {
            error
        }
    }
}

export const setTvSeriesSelectedGenres = (genres) => {
    return {
        type: tvSeriesTypes.SET_TVSERIES_SELECTED_GENRES,
        payload: {
            genres
        }
    }
}

export const updateTvSeriesGenres = (data) => {
    return {
        type: tvSeriesTypes.UPDATE_TVSERIES_GENRES,
        payload: {
            data
        }
    }
}


export const setTvSeriesSelectedGenresId = (genres) => {
    return {
        type: tvSeriesTypes.SET_TVSERIES_SELECTED_GENRES_ID,
        payload: {
            genres
        }
    }
}
import * as genresConstant from '../constants/genresConstants';

export const fetchGenres = (type) => {
    return {
        type: genresConstant.FETCH_GENRES,
        payload: {
            type
        }
    }
}

export const fetchGenresSuccess = (data) => {
    return {
        type: genresConstant.FETCH_GENRES_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchGenresFailed = (error) => {
    return {
        type: genresConstant.FETCH_GENRES_FAILED,
        payload: {
            error
        }
    }
}

export const setSelectedGenres = (genres) => {
    return {
        type: genresConstant.SET_SELECTED_GENRES,
        payload: {
            genres
        }
    }
}

export const setSelectedGenresID = (id, type) => {
    return {
        type: genresConstant.SET_SELECTED_GENRES_ID,
        payload: {
            id,
            type
        }
    }
}

export const updateGenres = (genres) => {
    return {
        type: genresConstant.UPDATE_GENRES,
        payload: {
            genres
        }
    }
}
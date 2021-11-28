import * as moviesConstants from '../constants/moviesConstants';

export const fetchMovies = (params = {}) => {
    return {
        type: moviesConstants.FETCH_MOVIES,
        payload: {
            params
        },
    };
};

export const fetchMoviesSuccess = (data) => {
    return {
        type: moviesConstants.FETCH_MOVIES_SUCCESS,
        payload: {
            data
        },
    };
};

export const fetchMoviesFailed = (error) => {
    return {
        type: moviesConstants.FETCH_MOVIES_FAILED,
        payload: {
            error
        },
    };
};

export const setMoviesCurrentPage = (number) => {
    return {
        type: moviesConstants.SET_CURRENT_PAGE_MOVIES,
        payload: {
            number
        }
    }
}

export const fetchMoviesGenres = (type) => {
    return {
        type: moviesConstants.FETCH_MOVIES_GENRES,
        payload: {
            type
        }
    }
}

export const fetchMoviesGenresSuccess = (data) => {
    return {
        type: moviesConstants.FETCH_MOVIES_GENRES_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchMoviesGenresFailed = (error) => {
    return {
        type: moviesConstants.FETCH_MOVIES_GENRES_FAILED,
        payload: {
            error
        }
    }
}

export const setMoviesSelectedGenres = (genres) => {
    return {
        type: moviesConstants.SET_MOVIES_SELECTED_GENRES,
        payload: {
            genres
        }
    }
}

export const updateMoviesGenres = (data) => {
    return {
        type: moviesConstants.UPDATE_MOVIES_GENRES,
        payload: {
            data
        }
    }
}


export const setMoviesSelectedGenresId = (genres) => {
    return {
        type: moviesConstants.SET_MOVIES_SELECTED_GENRES_ID,
        payload: {
            genres
        }
    }
}
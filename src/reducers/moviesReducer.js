import * as moviesConstants from '../constants/moviesConstants';

const initialState = {
    listMovies: [],
    totalPages: 1,
    currentPage: 1,
    listGenres: [],
    listSelectedGenres: [],
    genresID: [],
    error: '',
    fetchGenreError: ''
}

const moivesReducer = (state = initialState, action) => {
    switch (action.type) {
        case moviesConstants.FETCH_MOVIES: {
            return {
                ...state,
                listMovies: [],
            }
        }
        case moviesConstants.FETCH_MOVIES_SUCCESS: {
            const { results, total_pages } = action.payload.data; 
            return {
                ...state,
                listMovies: results,
                totalPages: total_pages, 
            }
        }
        case moviesConstants.FETCH_MOVIES_FAILED: { 
            const { error } = action.payload;  
            const errorMessage = error.toString();
            return {
                ...state,
                error: errorMessage
            }
        }
        case moviesConstants.SET_CURRENT_PAGE_MOVIES: {
            const { number } = action.payload;
            return {
                ...state,
                currentPage: number,
            }
        }
        case moviesConstants.FETCH_MOVIES_GENRES: {
            return {
                ...state,
                listGenres: [],
            }
        }
        case moviesConstants.FETCH_MOVIES_GENRES_SUCCESS: {
            const { genres } = action.payload.data; 
            return {
                ...state,
                listGenres: genres,
            }
        }
        case moviesConstants.FETCH_MOVIES_GENRES_FAILED: {
            const { error } = action.payload;
            const errorMessage = error.toString();
            return {
                ...state,
                fetchGenreError: errorMessage,
            }
        }

        case moviesConstants.SET_MOVIES_SELECTED_GENRES: {
            const { genres } = action.payload;  
            let newSelectedGenres = null;
            if (Array.isArray(genres)) {
                newSelectedGenres = genres;
            } else {
                newSelectedGenres = state.listSelectedGenres.filter((g) => {
                    return g.id !== genres.id;
                });
            }
            console.log(newSelectedGenres);
            return {
                ...state,
                listSelectedGenres: newSelectedGenres
            }
        }

        case moviesConstants.SET_MOVIES_SELECTED_GENRES_ID: {
            const { genres } = action.payload;
            return {
                ...state,
                currentPage: 1,
                genresID: genres,
            }
        }

        case moviesConstants.UPDATE_MOVIES_GENRES: {
            const { data } = action.payload;
            let newGenres = null;
            if (Array.isArray(data)) {
                newGenres = data;
            } else {
                newGenres = state.listGenres.filter((g) => {
                    return g.id !== data.id;
                });
            }
            return {
                ...state,
                listGenres: newGenres,
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default moivesReducer;

import * as genresConstants from '../constants/genresConstants';

const initialState = {
    listGenres: [],
    listSelectedGenres: [],
    genresID: [],
    fetchGenreError: ''
}

const genresReducer = (state = initialState, action) => {
    switch (action.type) {

        case genresConstants.FETCH_GENRES: {
            return {
                ...state,
                listGenres: [],
                listSelectedGenres: [],
                genresID: [],
                fetchGenreError: ''
            }
        }
        case genresConstants.FETCH_GENRES_SUCCESS: {
            console.log('listSelectedGenres ',state.listSelectedGenres);
            const { genres } = action.payload.data;
            return {
                ...state,
                listGenres: genres,
                
            }
        }
        case genresConstants.FETCH_GENRES_FAILED: {
            const { error } = action.payload;
            const errorMessage = error.toString();
            return {
                ...state,
                fetchGenreError: errorMessage,
            }
        }

        case genresConstants.SET_SELECTED_GENRES: {
            const { genres } = action.payload;
            let newSelectedGenres = null;
            if (Array.isArray(genres)) {
                newSelectedGenres = genres;
            } else {
                newSelectedGenres = state.listSelectedGenres.filter((g) => {
                    return g.id !== genres.id;
                });
            }
            return {
                ...state,
                listSelectedGenres: newSelectedGenres
            }
        }

        case genresConstants.SET_SELECTED_GENRES_ID: {
            const { id } = action.payload;
            return {
                ...state,
                // currentPage: 1,
                genresID: id,
            }
        }

        case genresConstants.UPDATE_GENRES: {
            const { genres } = action.payload;
            let newGenres = null;
            if (Array.isArray(genres)) {
                newGenres = genres;
            } else {
                newGenres = state.listGenres.filter((g) => {
                    return g.id !== genres.id;
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

export default genresReducer;

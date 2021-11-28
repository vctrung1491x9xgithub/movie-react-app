import * as tvSeriesTypes from '../constants/tvSeriesConstants';

const initialState = {
    listTvSeries: [],
    totalPages: 1,
    currentPage: 1,
    listGenres: [],
    listSelectedGenres: [],
    genresID: [],
    fetchTvSeriesError: '',
    fetchGenreError: ''
};

const tvSeriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case tvSeriesTypes.FETCH_TVSERIES: {
            return {
                ...state,
                listTvSeries: [],
            }
        }
        case tvSeriesTypes.FETCH_TVSERIES_SUCCESS: {
            const { results, total_pages } = action.payload.data;
            return {
                ...state,
                listTvSeries: results,
                totalPages: total_pages
            }
        }
        case tvSeriesTypes.FETCH_TVSERIES_FAILED: {
            const { error } = action.payload;
            const errorMessage = error.toString();
            return {
                ...state,
                error: errorMessage
            }
        }
        case tvSeriesTypes.SET_TVSERIES_CURRENT_PAGE: {
            const { number } = action.payload;
            return {
                ...state,
                currentPage: number,
            }
        }

        case tvSeriesTypes.FETCH_TVSERIES_GENRES: {
            return {
                ...state,
                listGenres: [],
                // currentPage: 1, 
                // listSelectedGenres: [],
                // genresID: [],
            }
        }
        case tvSeriesTypes.FETCH_TVSERIES_GENRES_SUCCESS: {
            const { genres } = action.payload.data;
            return {
                ...state,
                listGenres: genres,
            }
        }
        case tvSeriesTypes.FETCH_TVSERIES_GENRES_FAILED: {
            const { error } = action.payload;
            const errorMessage = error.toString();
            return {
                ...state,
                fetchGenreError: errorMessage,
            }
        }

        case tvSeriesTypes.SET_TVSERIES_SELECTED_GENRES: {
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

        case tvSeriesTypes.SET_TVSERIES_SELECTED_GENRES_ID: {
            const { genres } = action.payload;
            return {
                ...state,
                currentPage: 1,
                genresID: genres,
            }
        }

        case tvSeriesTypes.UPDATE_TVSERIES_GENRES: {
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

export default tvSeriesReducer;
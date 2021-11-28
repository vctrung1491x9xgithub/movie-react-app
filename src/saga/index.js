import { call, delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchMovies, fetchMoviesFailed, fetchMoviesGenresFailed, fetchMoviesGenresSuccess, fetchMoviesSuccess } from '../actions/moviesActions';
import { fetchSearch, fetchSearchFailed, fetchSearchSuccess } from '../actions/searchActions';
import { fecthTrending, fecthTrendingFailed, fecthTrendingSuccess } from '../actions/trendingActions';
import { fetchTvSeries, fetchTvSeriesFailed, fetchTvSeriesGenresFailed, fetchTvSeriesGenresSuccess, fetchTvSeriesSuccess } from '../actions/tvSeriesActions';
import { showLoading } from '../actions/uiActions';
import { fetchCastFailed, fetchCastSuccess, fetchInfoFailed, fetchInfoSuccess } from '../actions/watchActions';
import { getGenres } from '../apis/genresApi';
import { getMovies } from '../apis/moviesAPI';
import { getSearchData } from '../apis/searchApi';
import { getTrending } from '../apis/trendingAPI';
import { getTvSeries } from '../apis/tvSeriesApi';
import { getActorInfo } from '../apis/actorApi';
import { getCast, getInfo } from '../apis/watchApi';
import * as moviesConstants from '../constants/moviesConstants';
import * as searchConstants from '../constants/searchConstants';
import * as trendingConstants from '../constants/trendingConstants';
import * as tvSeriesConstants from '../constants/tvSeriesConstants';
import * as watchConstants from '../constants/watchConstants';
import * as actorConstants from '../constants/actorConstants';
import { fetchActorInfoFailed, fetchActorInfoSuccess } from '../actions/actorActions';

// GET TRENDING DATA
function* fetchTrendingSaga({ payload }) {
    const { params } = payload;
    yield put(showLoading(true));
    yield delay(500);
    try {
        const resp = yield call(getTrending, params);
        yield put(fecthTrendingSuccess(resp.data));
    } catch (error) {
        yield put(fecthTrendingFailed(error));
    }
    yield put(showLoading(false));
}
function* setCurrentPageTrendingSaga({ payload }) {
    const { number } = payload;
    yield put(fecthTrending({
        page: number,
    }),
    );
}

// GET MOVIES DATA
function* fetchMoviesSaga({ payload }) {
    const { params } = payload;
    yield put(showLoading(true));
    yield delay(500);
    try {
        const resp = yield call(getMovies, params);
        yield put(fetchMoviesSuccess(resp.data));
    } catch (error) {
        yield put(fetchMoviesFailed(error));
    }
    yield put(showLoading(false));

}
function* setCurrentPageMoviesSaga({ payload }) {
    const { number: page } = payload;
    const genres = yield select(state => state.movies.genresID);
    yield put(fetchMovies({
        with_genres: genres,
        page
    }),
    );
}
function* fetchMoviesGenresSaga({ payload }) {
    const { type } = payload;
    yield delay(500);
    try {
        const resp = yield call(getGenres, type);
        yield put(fetchMoviesGenresSuccess(resp.data))
    } catch (error) {
        yield put(fetchMoviesGenresFailed(error));
    }
}
function* setMoviesSelectedGenresIDSaga({ payload }) {
    const { genres } = payload;
    const page = yield select(state => state.movies.currentPage);
    yield put(fetchMovies({
        with_genres: genres,
        page,
    }),
    );
}
// GET GENRES DATA
// function* fetchGenresSaga({ payload }) {
//     const { type } = payload;
//     yield delay(500);
//     try {
//         const resp = yield call(getGenres, type);
//         yield put(fetchGenresSuccess(resp.data))
//     } catch (error) {
//         yield put(fetchGenresFailed(error));
//     }
// }
// function* setSelectedGenresIDSaga({ payload }) {
//     const { id, type } = payload; 
//     if (type === 'tv') {
//         const page = yield select(state => state.tvSeries.currentPage);
//         yield put(fetchTvSeries({
//                 with_genres: id,
//                 page,
//             }),
//         );
//     } else if(type === 'movie'){

//     }

// }

// GET TVSERIES DATA

function* fetchTvSeriesSaga({ payload }) {
    const { params } = payload;
    yield put(showLoading(true));
    yield delay(500);
    try {
        const resp = yield call(getTvSeries, params);
        yield put(fetchTvSeriesSuccess(resp.data));
    } catch (error) {
        yield put(fetchTvSeriesFailed(error));
    }
    yield put(showLoading(false));
}

function* setTvSeriesCurrentPage({ payload }) {
    const { number } = payload;
    const genresID = yield select(state => state.tvSeries.genresID);
    yield put(fetchTvSeries({
        with_genres: genresID,
        page: number,
    }))
}

function* fetchTvSeriesGenresSaga({ payload }) {
    const { type } = payload;
    yield delay(500);
    try {
        const resp = yield call(getGenres, type);
        yield put(fetchTvSeriesGenresSuccess(resp.data))
    } catch (error) {
        yield put(fetchTvSeriesGenresFailed(error));
    }
}

function* setTvSeriesSelectedGenresIDSaga({ payload }) {
    const { genres } = payload;
    const page = yield select(state => state.tvSeries.currentPage);
    yield put(fetchTvSeries({
        with_genres: genres,
        page,
    }),
    );
}
// GET SEARCH DATA
function* fetchSearchSaga({ payload }) {
    const { type, params } = payload;
    const { keyword, page } = params;
    let param = {
        query: keyword,
    };
    if (page) {
        param = {
            query: keyword,
            page
        };
    }
    yield put(showLoading(true));
    yield delay(500);
    try {
        const resp = yield call(getSearchData, type, param);
        yield put(fetchSearchSuccess(resp.data));
        console.log(resp);
    } catch (error) {
        yield put(fetchSearchFailed(error));
    }
    yield put(showLoading(false));
}
function* setCurrentPageSearchSaga({ payload }) {
    const { page } = payload;
    const keyword = yield select(state => state.search.keyword);
    const type = yield select(state => state.search.type);
    const params = {
        keyword,
        page,
    }
    yield put(fetchSearch(type, params));
}

// GET INFO MOVIE
function* fetchInfoMovieSaga({ payload }) {
    const { id, mediaType } = payload; 
    if (id && mediaType !== null) {

        yield put(showLoading(true));
        yield delay(500);
        try {
            const resp = yield call(getInfo, mediaType, id);
            yield put(fetchInfoSuccess(resp.data));
        } catch (error) {
            yield put(fetchInfoFailed(error));
        }
        yield put(showLoading(false));
    }
   
}

function* fetchCastMovieSaga({ payload }) {
    const { id, mediaType } = payload;
    // yield put(showLoading(true));
    yield delay(500);
    try {
        const resp = yield call(getCast, mediaType, id);
        yield put(fetchCastSuccess(resp.data));
    } catch (error) {
        yield put(fetchCastFailed(error));
    }
    // yield put(showLoading(false));  
}

function* fetchActorInfoSaga({ payload }) {
    const { id } = payload;
    yield put(showLoading(true));
    try {
        const respActor = yield call(getActorInfo, id);
        yield put(fetchActorInfoSuccess(respActor.data));
    } catch (error) {
        yield put(fetchActorInfoFailed(error));
    }
    yield put(showLoading(false));

}

function* rootSaga() {
    // GET TRENDING DATA
    yield takeEvery(trendingConstants.FECTH_TRENDING, fetchTrendingSaga);
    yield takeLatest(trendingConstants.SET_TRENDING_CURRENT_PAGE, setCurrentPageTrendingSaga);
    // GET MOVIES DATA
    yield takeEvery(moviesConstants.FETCH_MOVIES, fetchMoviesSaga);
    yield takeEvery(moviesConstants.FETCH_MOVIES_GENRES, fetchMoviesGenresSaga);
    yield takeLatest(moviesConstants.SET_MOVIES_SELECTED_GENRES_ID, setMoviesSelectedGenresIDSaga);
    yield takeLatest(moviesConstants.SET_CURRENT_PAGE_MOVIES, setCurrentPageMoviesSaga);
    // GET GENRES DATA
    // yield takeEvery(genresConstants.FETCH_GENRES, fetchGenresSaga);
    // yield takeEvery(genresConstants.SET_SELECTED_GENRES_ID, setSelectedGenresIDSaga);

    // GET TVSERIES DATA
    yield takeEvery(tvSeriesConstants.FETCH_TVSERIES, fetchTvSeriesSaga);
    yield takeLatest(tvSeriesConstants.SET_TVSERIES_CURRENT_PAGE, setTvSeriesCurrentPage);
    yield takeEvery(tvSeriesConstants.FETCH_TVSERIES_GENRES, fetchTvSeriesGenresSaga);
    yield takeLatest(tvSeriesConstants.SET_TVSERIES_SELECTED_GENRES_ID, setTvSeriesSelectedGenresIDSaga);

    // GET SEACH DATA
    yield takeEvery(searchConstants.FETCH_SEARCH, fetchSearchSaga);
    yield takeLatest(searchConstants.SET_CURRENT_PAGE_SEARCH, setCurrentPageSearchSaga);

    // GET INFO MOVIE
    yield takeLatest(watchConstants.FETCH_INFO, fetchInfoMovieSaga);
    yield takeLatest(watchConstants.FETCH_CAST, fetchCastMovieSaga);
    // GET ACTOR INFO
    yield takeEvery(actorConstants.FETCH_ACTOR_INFO, fetchActorInfoSaga);

}

export default rootSaga;
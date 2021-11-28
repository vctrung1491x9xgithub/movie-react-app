import { combineReducers } from "redux";
import trendingReducer from "./trendingReducer";
import moviesReducer from "./moviesReducer";
import uiReducer from "./uiReducer";
import tvSeriesReducer from "./tvSeriesReducer";
import genresReducer from "./genresReducer";
import searchReducer from "./searchReducer";
import watchReducer from "./watchReducer";
import actorReducer from "./actorReducer";
import collectionReducer from "./collectionReducer";

const rootReducer = combineReducers({
    trending: trendingReducer,
    movies: moviesReducer,
    ui: uiReducer,
    tvSeries: tvSeriesReducer,
    genres: genresReducer,
    search: searchReducer,
    watch: watchReducer,
    actor: actorReducer,
    collections: collectionReducer,
});

export default rootReducer;
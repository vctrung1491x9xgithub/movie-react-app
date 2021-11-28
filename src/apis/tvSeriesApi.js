import qs from 'query-string';
import axiosServices from '../commons/axiosServices';

const API_ENDPOINT = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;
// &with_genres=${genreforURL}

export const getTvSeries = (params = {}) => {
    let queryParams = '';
    if(Object.keys(params).length > 0) {
        queryParams = `&${qs.stringify(params)}`;
    }
    return axiosServices.get(`${API_ENDPOINT}${queryParams}`);
};
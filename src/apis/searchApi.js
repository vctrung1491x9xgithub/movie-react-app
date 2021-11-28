import axiosServices from '../commons/axiosServices';
import qs from 'query-string';

export const getSearchData = (type, params = {}) => {
    const TypeString = type === 0 ? "movie" : "tv";
    const API_ENDPOINT = `https://api.themoviedb.org/3/search/${TypeString}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;
   
    // &query=${searchText}&page=${page}
    let queryParams = '';
    if (Object.keys(params).length > 0) {
        queryParams = `&${qs.stringify(params)}`;  
    }
    // console.log(`${API_ENDPOINT}${queryParams}&include_adult=false`);

    return axiosServices.get(`${API_ENDPOINT}${queryParams}&include_adult=false`);
};

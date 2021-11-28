import axiosServices from "../commons/axiosServices";
import qs from 'query-string';

const API_ENDPOINT = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false`;
// &with_genres=${genreforURL}
export const getMovies = (params = {}) => {
      let queryParams = '';  
      if(Object.keys(params).length > 0) {
          queryParams = `&${qs.stringify(params)}`;
      } 
      return axiosServices.get(`${API_ENDPOINT}${queryParams}`);
};

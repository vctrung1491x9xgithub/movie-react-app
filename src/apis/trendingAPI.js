import axiosServices from "../commons/axiosServices";
import qs from 'query-string';

const API_ENDPOINT = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;

export const getTrending = (params = {}) => {
      let queryParams = '';
      if(Object.keys(params).length > 0) {
          queryParams = `&${qs.stringify(params)}`;
      } 
      return axiosServices.get(`${API_ENDPOINT}${queryParams}`);
};

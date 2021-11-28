import axiosServices from "../commons/axiosServices";
 
export const getGenres = (type) => { 
    const API_ENDPOINT = `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;

    return axiosServices.get(`${API_ENDPOINT}`);
};

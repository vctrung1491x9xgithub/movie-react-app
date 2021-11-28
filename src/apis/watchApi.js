import axiosServices from "../commons/axiosServices";


export const getInfo = (mediaType, id) => {
    
    const API_ENDPOINT = `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;
  
    return axiosServices.get(`${API_ENDPOINT}`);
}

export const getCast = (mediaType, id) => {
    const API_ENDPOINT = `https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;
 
    return axiosServices.get(`${API_ENDPOINT}`);
}

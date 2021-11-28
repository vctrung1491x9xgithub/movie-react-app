import axiosServices from "../commons/axiosServices";


export const getActorInfo = async (actorID) => {
    const API_ENDPOINT = `https://api.themoviedb.org/3/person/${actorID}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;

    return await axiosServices.get(`${API_ENDPOINT}`);
};
  
import React, { Fragment, useEffect } from 'react'
import { Content, Title } from '../../globalStyles'
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import { useDispatch, useSelector } from 'react-redux';
import * as moviesActions from '../../actions/moviesActions';
import Genres from '../../components/Genres/Genres';
import useGenres from '../../hooks/useGenre';
import Error from '../../components/Error/Error';

const Movies = ({ name }) => {

    const dispatch = useDispatch();
    const listMovies = useSelector(state => state.movies.listMovies);
    const totalPages = useSelector(state => state.movies.totalPages);
    const listSelectedGenres = useSelector(state => state.movies.listSelectedGenres);
    const listGenres = useSelector(state => state.movies.listGenres);
    const currentPage = useSelector(state => state.movies.currentPage);
    const error = useSelector(state => state.movies.error);
    const genreErrorMessage = useSelector(state => state.movies.fetchGenreError);
    const genreforURL = useGenres(listSelectedGenres);

    const setSelectedGenres = genres => {
        dispatch(moviesActions.setMoviesSelectedGenres(genres));
    }
    const updateGenres = (genres) => {
        dispatch(moviesActions.updateMoviesGenres(genres));
    }
    const setCurrentPage = page => {
        dispatch(moviesActions.setMoviesCurrentPage(page));
    }
    useEffect(() => {
        if (genreforURL) {
            dispatch(moviesActions.setMoviesSelectedGenresId(genreforURL));
        } else {
            dispatch(moviesActions.fetchMovies());
        }
    }, [dispatch, genreforURL]);

    // useEffect(() => {
    //     dispatch(moviesActions.fetchMovies());
    // }, [dispatch]);

    return (
        <Fragment>
            <Title>{name}</Title>
            {
                listMovies && error === "" &&
                <Genres
                    type="movie"
                    selectedGenres={listSelectedGenres}
                    setSelectedGenres={setSelectedGenres}
                    genres={listGenres}
                    updateGenres={updateGenres}
                    setPage={setCurrentPage}
                    errorMessage={genreErrorMessage}
                /> 
            }
            <Content>
                {
                    listMovies && error === "" ?
                        listMovies.map(item => {
                            return (
                                <SingleContent
                                    key={item.id}
                                    item={item}
                                    media_type={'Movie'} 
                                />
                            );
                        })
                        :
                        <Error errorMessage={error} />
                }
            </Content>
            {
                listMovies && error === "" &&
                <CustomPagination
                    setPage={setCurrentPage}
                    numberOfPages={totalPages}
                    currentPage={currentPage}
                />
            }
        </Fragment>
    )
}

export default Movies

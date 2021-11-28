import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as tvSeriesActions from '../../actions/tvSeriesActions';
import Error from '../../components/Error/Error';
import Genres from '../../components/Genres/Genres';
import CustomPagination from '../../components/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';
import { Content, Title } from '../../globalStyles';
import useGenres from '../../hooks/useGenre';

const Series = ({ name }) => {

    const dispatch = useDispatch();
    const listTvSeries = useSelector(state => state.tvSeries.listTvSeries);
    const totalPages = useSelector(state => state.tvSeries.totalPages);
    const listSelectedGenres = useSelector(state => state.tvSeries.listSelectedGenres);
    const listGenres = useSelector(state => state.tvSeries.listGenres);
    const currentPage = useSelector(state => state.tvSeries.currentPage);
    const tvSeriesError = useSelector(state => state.tvSeries.fetchTvSeriesError);
    const genresError = useSelector(state => state.tvSeries.fetchGenreError);
    const genreforURL = useGenres(listSelectedGenres);

    const setSelectedGenres = genres => {
        dispatch(tvSeriesActions.setTvSeriesSelectedGenres(genres));
    }
    const updateGenres = (genres) => {
        dispatch(tvSeriesActions.updateTvSeriesGenres(genres));
    }
    const setCurrentPage = page => {
        dispatch(tvSeriesActions.setTvSeriesCurrentPage(page));
    }

    useEffect(() => {
        if (genreforURL) {
            dispatch(tvSeriesActions.setTvSeriesSelectedGenresId(genreforURL));
        } else {
            dispatch(tvSeriesActions.fetchTvSeries());
        }
    }, [dispatch, genreforURL]);
    // set lai state
    useEffect(() => {
        return () => {
            dispatch(tvSeriesActions.setTvSeriesSelectedGenres([])); 
        };
    },[dispatch]);
    return (
        <Fragment>
            <Title>{name}</Title>
            <Genres
                type="tv"
                genres={listGenres}
                errorMessage={genresError}
                selectedGenres={listSelectedGenres}
                setSelectedGenres={setSelectedGenres}
                updateGenres={updateGenres}
            />
            <Content>
                {
                    listTvSeries && tvSeriesError === "" ?
                        listTvSeries.map(item => {
                            return (
                                <SingleContent
                                    key={item.id}
                                    item={item}
                                    media_type={'Tv Series'}
                                />
                            );
                        })
                        :
                        <Error errorMessage={tvSeriesError} />
                }
            </Content>
            {
                listTvSeries && tvSeriesError === "" &&
                <CustomPagination
                    setPage={setCurrentPage}
                    numberOfPages={totalPages}
                    currentPage={currentPage}
                />
            }
        </Fragment>
    )
}

export default Series


import React, { Fragment, useEffect } from 'react';
import { Title, Content } from '../../globalStyles';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import { useDispatch, useSelector } from 'react-redux';
import * as trendingActions from '../../actions/trendingActions';
import Error from '../../components/Error/Error';
const Trending = ({ name }) => {

    const dispatch = useDispatch();
    const listTrending = useSelector(state => state.trending.listTrending);
    const numberOfPages = useSelector(state => state.trending.totalPages);
    const currentPage = useSelector(state => state.trending.currentPage);
    const error = useSelector(state => state.trending.error); 
    
    const setCurrentPage = (page) => {
        dispatch(trendingActions.setTrendingCurrentPage(page));
    }
    useEffect(() => {
        dispatch(trendingActions.fecthTrending());
    }, [dispatch])

    return (
        <Fragment>
            <Title>{name}</Title>
            <Content>
                {
                    listTrending && error === "" ?
                        listTrending.map(item => {
                            return (
                                <SingleContent
                                    key={item.id}
                                    item={item}
                                    media_type={item.media_type === 'tv' ? 'Tv Series' : 'Movie'}
                                />
                            );
                        })
                        : <Error errorMessage={error} />
                }
            </Content>
            {
                listTrending && error === "" &&
                <CustomPagination
                    setPage={setCurrentPage}
                    numberOfPages={numberOfPages}
                    currentPage={currentPage}
                />
            }

        </Fragment>
    )
}

export default Trending

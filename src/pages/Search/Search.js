import { createTheme, Tab, Tabs, ThemeProvider } from '@material-ui/core'

import React, { Fragment, useEffect } from 'react'
import SearchControl from '../../components/SearchControl/SearchControl';
import { Content, Title } from '../../globalStyles'
import * as searchActions from '../../actions/searchActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SingleContent from '../../components/SingleContent/SingleContent';
import Error from '../../components/Error/Error';
import CustomPagination from '../../components/Pagination/CustomPagination';

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: "#FFF",
        },
    },
});

const Search = ({ name }) => {

    

    const dispatch = useDispatch();
    const value =  useSelector(state => state.search.type);
    const keyword = useSelector(state => state.search.keyword);   
    const listDataSearch = useSelector(state => state.search.listData);
    const message = useSelector(state => state.search.message);
    const totalPages = useSelector(state => state.search.totalPages);
    const currentPage = useSelector(state => state.search.currentPage);

    //   
    const handleChange = (event, newValue) => { 
       dispatch(searchActions.setType(newValue));
    };
    // 
    const onSearchChange = value => {
        dispatch(searchActions.setKeyword(value));
    }
    // 
    const setCurrentPage = page => {
        dispatch(searchActions.setCurrentPage(page));
    }
    // 
    useEffect(() => {
        if (keyword !== "") { 
            const params = {
                keyword: keyword, 
            }
            dispatch(searchActions.fetchSearch(value, params));
        }
    }, [value, keyword, dispatch]);
    // 
    return (
        <Fragment>
            <Title>{name}</Title>
            <ThemeProvider theme={darkTheme}>
                <SearchControl searchChange={onSearchChange} />
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered={true}
                    aria-label="full width tabs" 
                >
                    <Tab label="Movies" />
                    <Tab label="Tv Series" />
                </Tabs>
            </ThemeProvider>
            <Content>
                {
                    listDataSearch.length > 0 ?
                        listDataSearch.map(item => {
                            return (
                                <SingleContent
                                    key={item.id}
                                    item={item}
                                    media_type={value === 0 ? 'Movie' : 'Tv Series'}
                                />
                            );
                        })
                        :
                        <Error errorMessage={message} />
                }
            </Content>
            {
                 listDataSearch.length > 0 &&
                <CustomPagination
                    setPage={setCurrentPage}
                    numberOfPages={totalPages}
                    currentPage={currentPage}
                />
            }
        </Fragment>
    )
}

export default Search

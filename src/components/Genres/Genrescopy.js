
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import * as genresActions from '../../actions/genresActions';
import { ChipElement, ErrorMessage, GenresContainer, GenresTitle } from './Genres.styles';

const Genres = ({
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    updateGenres,
    errorMessage
}) => {
    const dispatch = useDispatch(); 
    useEffect(() => {
        dispatch(genresActions.fetchGenres(type));
    }, [dispatch, type]);

    const handleAdd = (genre) => { 
        setSelectedGenres([...selectedGenres, genre]);
        updateGenres(genre);
        // setPage(1);
    }
    const handleRemove = (genre) => { 
        setSelectedGenres(genre);
        updateGenres([...genres, genre]);
        // setPage(1);
    }
    const renderGenres = () => {
        let xhtml = null;
        if (genres && genres.length > 0) {
            xhtml = genres.map(genre => {
                return (
                    <ChipElement
                        label={genre.name}
                        key={genre.id}
                        clickable
                        color="primary"
                        size="small"
                        onClick={() => handleAdd(genre)}
                    />
                );
            });
        }
        return xhtml;
    }
    const renderGenresSelected = () => {
        let xhtml = null;
        if (selectedGenres && selectedGenres.length > 0) {
            xhtml = selectedGenres.map((genre) => {
                return (
                    <ChipElement
                        label={genre.name}
                        key={genre.id}
                        color="secondary"
                        clickable
                        size="small"
                        onDelete={() => handleRemove(genre)}
                    />
                )
            });
        }
        return xhtml;
    }
    return (
        <GenresContainer>
            <GenresTitle>Genres: </GenresTitle>
            {
                errorMessage !== "" &&
                <ErrorMessage>{errorMessage +  " (｡>﹏<｡)"}</ErrorMessage>
            }
            {
                renderGenresSelected()
            }
            {
                renderGenres()
            }
        </GenresContainer>
    )
}

export default Genres

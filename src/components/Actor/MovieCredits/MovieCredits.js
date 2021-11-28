
import React, { Fragment, useEffect, useState } from 'react';
import { ButtonShowAll, Content, Title } from './MovieCredits.styles';
import SingleContent from '../../SingleContent/SingleContent';
const MovieCredits = ({ ActorID }) => {
    const [credits, setCredits] = useState([]);
    const [showAll, setShowAll] = useState(false)
    const getCredits = async () => {
        const url = `https://api.themoviedb.org/3/person/${ActorID}/movie_credits?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;
        const response = await fetch(url);
        const data = await response.json();
        setCredits(data.cast);
    };

    useEffect(() => {
        if (ActorID) {
            getCredits();
        }
        return () => {
            setCredits([]);
        }
    }, [ActorID]);

    const onSetShowAll = () => {
        setShowAll(!showAll);
    }
    return (
        <Fragment>
            <Title>Movies participated: </Title>
            <Content showAll={showAll}>
                {
                    credits && credits.map(item => {
                        return (
                            <SingleContent
                                key={item.id}
                                item={item}
                                media_type={item.media_type === 'tv' ? 'Tv Series' : 'Movie'}
                            />
                        );
                    })
                }
            </Content>
            {
                credits && credits.length > 0 && (
                    <ButtonShowAll onClick={onSetShowAll}>
                        {showAll === false ? 'Show All' : 'Show less'}
                    </ButtonShowAll>
                )
            } 
        </Fragment>
    )
}

export default MovieCredits

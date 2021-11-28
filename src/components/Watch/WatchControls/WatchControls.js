import React, { useState, useEffect } from 'react';
import { Button, WatchControl } from './WatchControl.styles';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import ShareIcon from '@material-ui/icons/Share';
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import * as collectionActions from '../../../actions/collectionActions';
import { useDispatch, useSelector } from 'react-redux';

const WatchControls = ({ playMovie, data, type, keyList }) => {
    const [collected, setCollected] = useState(false);
    const dispatch = useDispatch();
    const collection = useSelector(state => state.collections.collectionData);

    useEffect(() => {
        if (localStorage && localStorage.getItem('collection')) {
            dispatch(collectionActions.addCollection(JSON.parse(localStorage.getItem('collection'))));
        }
    }, [localStorage.getItem('collection')]);

    const onPlayMovie = (e) => {
        e.preventDefault();
        playMovie(true);
    }
    const onAddCollection = (e) => {
        e.preventDefault();
        const newCollection = [...collection];
        const currentMovie = {
            id: data.id,
            media_type: type,
            poster_path: data.poster_path,
            title: data.title || null,
            name: data.name || null,
            vote_average: data.vote_average,
            popularity: data.popularity,
            release_date: data.release_date || null,
            first_air_date: data.first_air_date || null
        }
        newCollection.push(currentMovie);
        localStorage.setItem('collection', JSON.stringify(newCollection));
        setCollected(true);
    }


    const renderButtonAddCollection = () => {
        let xhtml = null;
        if (collection || collection.length > 0) {
            let curentMovie = collection.filter(x => x.id === data.id);
            if (curentMovie.length > 0 || collected) {
                xhtml = (
                    <Button to='/' color={'#52ce69'} onClick={(e) => { e.preventDefault() }} >
                        <DoneIcon /> &nbsp;collected
                    </Button>
                )
            } else if (!collected) {
                xhtml = (
                    <Button to='/' color={'#52ce69'} onClick={onAddCollection} >
                        <AddIcon /> &nbsp;Add collection
                    </Button >
                )
            }
        } else {
            xhtml = (
                <Button href='/' color={'#52ce69'} onClick={onAddCollection} >
                    <AddIcon /> &nbsp;Add collection
                </Button >
            )
        }
        return xhtml;
    }

    return (
        <WatchControl>
            <Button href='/' color={'#febb13'} onClick={onPlayMovie}>
                <PlayCircleFilledRoundedIcon /> &nbsp;Watch
            </Button>
            {renderButtonAddCollection()}
            <Button
                href={`https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=${keyList[0]}`}
                target="_blank"
                color={'#0bc6c0'}
            >
                <ShareIcon /> &nbsp;Share
            </Button>
        </WatchControl>
    )
}

export default WatchControls


import { Grid } from '@material-ui/core';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import * as watchActions from '../../actions/watchActions';
import Cast from '../../components/Watch/Cast/Cast';
import Avatar from '../../components/Avatar/Avatar';
import WatchControls from '../../components/Watch/WatchControls/WatchControls';
import { Content, Title } from '../../globalStyles';
import { InfoItem, MoreInfo, MovieTitle, OriginalTitle, Overview, VoteAverage, VoteCount } from './Watch.styles';
import Trailer from '../../components/Watch/Trailer/Trailer';
import Play from '../../components/Watch/Play/Play';
import Comment from '../../components/Watch/Comment/Comment';

const Watch = ({ name, match }) => {
    let { type: mediaType, id } = useParams();
    id = id.split("-").slice(-1)[0];
    //  
    const [playMovie, setPlayMovie] = useState(false);
    const [trailer, setTrailer] = useState([]);

    const dispatch = useDispatch();
    const infoData = useSelector(state => state.watch.infoData);
    //   
    useEffect(() => {
        dispatch(watchActions.fetchInfo(mediaType, id));
    }, [dispatch, mediaType, id]);
    useEffect(() => {
        return () => {
            dispatch(watchActions.fetchInfo(null, null));
        };
    }, [dispatch]);
    // get trailer
    const getTrailer = async () => {
        const url = `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        const trailerList = data.results;
        setTrailer(trailerList);
    };
    useEffect(() => {
        getTrailer();// eslint-disable-next-line
    }, []);
    const keyList = trailer.reduce((acc, item) => {
        if (item.type === "Trailer") {
            acc.push(item.key);
        }
        return acc;
    }, []);
    // 
    // renderStatus
    // const renderStatus = (status) => {
    //     let result = '';
    //     switch (status) {
    //         case 'Released':
    //             result = 'Đã phát hành';
    //             break;
    //         case 'Ended':
    //             result = 'Đã kết thúc';
    //             break;
    //         case 'Returning Series':
    //             result = 'Returning Series';
    //             break;
    //         default:
    //             result = status;
    //             break;
    //     }
    //     return result;
    // } 
    const convertDate = (date) => {
        if (date) return date.split("-").reverse().join('-');
    }
    return (
        <Fragment>
            <Title>{name}</Title>
            <Content>
                {
                    infoData && playMovie && (
                        <>
                            <span
                                style={{color: '#FFF', cursor: 'pointer'}}
                                onClick={() => { setPlayMovie(false) }}
                            >
                                ⇽ Back
                            </span>
                            <Play trailer={trailer} />
                        </>

                    )
                }
                {/* <Backdrop>
                    <BackdropImg
                        src={
                            infoData?.backdrop_path
                                ? `${img_500}/${infoData.backdrop_path}`
                                : unavailableLandscape
                        }
                        alt={infoData?.name || infoData?.title}
                    />
                </Backdrop> */}
                {
                    infoData && !playMovie ?
                        <Grid container spacing={2}>
                            <Grid item md={4} xs={12}  >
                                <Avatar
                                    imagePath={infoData.poster_path}
                                    imageTitle={infoData.original_title}
                                />
                            </Grid>
                            <Grid item md={8} xs={12}>
                                <MovieTitle>{infoData.title || infoData.name}</MovieTitle>
                                {
                                    // infoData.tagline === "" || infoData.tagline === infoData.title || infoData.tagline !== infoData.name ?
                                    //     (
                                    //         infoData.original_title &&
                                    //             infoData.original_title !== infoData.title ?
                                    //             (
                                    //                 <OriginalTitle>{infoData.original_title}</OriginalTitle>
                                    //             ) :
                                    //             infoData.original_name &&
                                    //             infoData.original_name !== infoData.name &&
                                    //             (
                                    //                 <OriginalTitle>{infoData.original_name}</OriginalTitle>
                                    //             )
                                    //     ) :
                                    <OriginalTitle> {infoData.tagline} </OriginalTitle>
                                }
                                <VoteAverage>
                                    <StarRatings
                                        numberOfStars={10}
                                        starRatedColor="#C2210C"
                                        rating={infoData.vote_average}
                                        starDimension="16px"
                                        starSpacing="2px"
                                    />
                                    <VoteCount>
                                        {`(${infoData.vote_average} point / ${infoData.vote_count} vote)`}
                                    </VoteCount>
                                </VoteAverage>
                                <Overview>
                                    <p>{infoData.overview}</p>
                                </Overview>
                                {/*  */}
                                <Grid container spacing={1}>
                                    <Grid item md={5} xs={12}>
                                        <WatchControls
                                            match={match}
                                            data={infoData}
                                            playMovie={setPlayMovie}
                                            type={mediaType}
                                            url={match.url}
                                            keyList={keyList}
                                        />
                                    </Grid>
                                    <Grid item md={7} xs={12} >
                                        <MoreInfo>
                                            <InfoItem label={'type'}>
                                                <span>Type: </span>
                                                <Link to='/'>{mediaType === 'tv' ? 'Tv series' : 'Movie'}</Link>
                                            </InfoItem>
                                            {
                                                infoData.number_of_episodes && (
                                                    <InfoItem label={'type'}>
                                                        <span>Number of Episodes: </span>
                                                        <p>
                                                            {infoData.number_of_episodes}
                                                            {infoData.number_of_seasons > 0 &&
                                                                (
                                                                    ' per ' + infoData.number_of_seasons + ' part '
                                                                )
                                                            }
                                                        </p>
                                                    </InfoItem>
                                                )
                                            }
                                            <InfoItem>
                                                <span>Runtime: </span>
                                                <p>
                                                    {
                                                        infoData.runtime ? Math.floor(infoData.runtime / 60) + " hour " + infoData.runtime % 60 + " minutes"
                                                            :
                                                            infoData.episode_run_time && (
                                                                infoData.episode_run_time.map((c, index) => {
                                                                    return (index ? ' ' : '') + Math.floor(c / 60) === "0" ? c % 60 + " minutes" : + Math.floor(c / 60) + " hour " + c % 60 + " minutes"
                                                                })
                                                            ) + ' / episode'
                                                    }
                                                </p>
                                            </InfoItem>
                                            {
                                                infoData.created_by &&
                                                (
                                                    <InfoItem>
                                                        <span>Director: </span>
                                                        <p>
                                                            {
                                                                infoData.created_by.length > 0 ?
                                                                    infoData.created_by.map((c, index) => {
                                                                        return (index ? ', ' : '') + c.name
                                                                    })
                                                                    : 'Updating...'
                                                            }
                                                        </p>
                                                    </InfoItem>
                                                )
                                            }
                                            <InfoItem>
                                                <span>Country: </span>
                                                <p>
                                                    {
                                                        infoData.production_countries &&
                                                        infoData.production_countries.map((c, index) => {
                                                            return (index ? ', ' : '') + c.name
                                                        })
                                                    }
                                                </p>
                                            </InfoItem>
                                            <InfoItem>
                                                <span>
                                                    {
                                                        infoData.release_date ?
                                                            'Release date: ' : 'First air date: '
                                                    }
                                                </span>
                                                <p>
                                                    {
                                                        convertDate(infoData.release_date) ||
                                                        convertDate(infoData.first_air_date)
                                                    }
                                                </p>
                                            </InfoItem>
                                            <InfoItem label={'genre'}>
                                                <span>Genre: </span>
                                                {
                                                    infoData.genres && infoData.genres.map((g) => {
                                                        return (
                                                            <Link to="/#" key={g.id} >
                                                                <LocalOfferOutlinedIcon style={{ fontSize: '11px', marginRight: 2 }} />
                                                                {g.name}
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </InfoItem>
                                        </MoreInfo>
                                    </Grid>
                                    <Grid item md={12} sm={12}>
                                        <Cast
                                            id={id}
                                            mediaType={mediaType}
                                            match={match}
                                            showAllCast={false}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        : null
                }
                {
                    infoData && !playMovie && (
                        <Trailer
                            id={id}
                            mediaType={mediaType}
                        />
                    )
                }
                {
                    infoData && (
                        <Comment id={id} />
                    )
                }
            </Content>
        </Fragment>
    )
}

export default Watch;

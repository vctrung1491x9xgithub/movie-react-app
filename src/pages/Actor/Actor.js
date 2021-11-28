import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import * as actorActions from '../../actions/actorActions';
import Avatar from '../../components/Avatar/Avatar';
import { Content, Title } from '../../globalStyles';
import { Grid } from '@material-ui/core';
import ActorDetail from '../../components/Actor/ActorDetail/ActorDetail';
import MovieCredits from '../../components/Actor/MovieCredits/MovieCredits';

const Actor = ({ name }) => {
    let { id } = useParams();
    // 
    const dispatch = useDispatch();
    const actorInfo = useSelector(state => state.actor.actorInfo);

    // 
    useEffect(() => {
        dispatch(actorActions.fetchActorInfo(id));
    }, [dispatch, id]);

    return (
        <Fragment>
            <Title>{name}</Title>
            <Content>
                {
                    actorInfo ?
                        <Grid container spacing={3}>
                            <Grid item md={4} sm={12}>
                                <Avatar
                                    imagePath={actorInfo.profile_path}
                                    imageTitle={actorInfo.name}
                                    ActorID={actorInfo.id}
                                />
                            </Grid>
                            <Grid item md={8} sm={12} >
                                <Grid item md={12} sm={12}>
                                    <ActorDetail
                                        ActorData={actorInfo}
                                    />
                                </Grid>
                                <Grid item md={12} sm={12}>
                                    <MovieCredits
                                        ActorID={actorInfo.id}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        : null
                }
            </Content>
        </Fragment>
    )
}

export default Actor

import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'; 
import { useParams } from 'react-router'; 
import * as watchActions from '../../actions/watchActions'; 
import Avatar from '../../components/Avatar/Avatar';

import { Content, Title } from '../../globalStyles';
import { Grid } from '@material-ui/core'; 
import Cast from '../../components/Watch/Cast/Cast';

const CastList = ({ name, match }) => {
    let { id, type: mediaType } = useParams();
    id = id.split("-").slice(-1)[0];

    const dispatch = useDispatch();
    const infoData = useSelector(state => state.watch.infoData);
 
    // 
    useEffect(() => {
        dispatch(watchActions.fetchInfo(mediaType, id));
    }, [dispatch, mediaType, id]);

    return (
        <Fragment>
            <Title>{name}</Title>
            <Content>
                {
                    infoData ?
                        <Grid container spacing={3}>
                            <Grid item md={4} sm={12} >
                                <Avatar
                                    imagePath={infoData.poster_path}
                                    imageTitle={infoData.original_title}
                                /> 
                            </Grid>
                            <Grid item md={8} sm={12}>
                                <Grid item md={12} sm={12}>
                                    <Cast
                                        id={id}
                                        mediaType={mediaType}
                                        match={match}
                                        showAllCast={true}
                                    />
                                </Grid>
                                <Grid item md={12} sm={12}> 
                                </Grid>
                            </Grid>
                        </Grid>
                        : null
                }
            </Content>

        </Fragment>
    )
}

export default CastList

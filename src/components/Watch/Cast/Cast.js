import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as watchActions from '../../../actions/watchActions';
import { img_300, noPicture } from '../../../config/config';
import { CastWrapper, CastContent, CastHeader, CastItem, CastItemImg, CastItemName, CastImg, MoreCast } from './Cast.styles';
// import AliceCast from 'react-alice-Cast';

const handleDragStart = (e) => e.preventDefault();

const Cast = ({ id, mediaType, match, showAllCast }) => {

    const dispatch = useDispatch();
    const castData = useSelector(state => state.watch.castData);
    // 
    useEffect(() => {
        if (id && mediaType) {
            dispatch(watchActions.fetchCast(mediaType, id));
        }
    }, [dispatch, mediaType, id]);
    // 
    const renderCast = () => {
        let items = 'Updating...';
        if (castData.length > 0) {
            if (!showAllCast) {
                items = castData?.map((c, index) => {
                    return index < 10 && (
                        <CastItem to={`/actor/${c.id}`} key={c.id}>
                            <CastItemImg>
                                <CastImg
                                    src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
                                    alt={c?.name}
                                    onDragStart={handleDragStart}
                                    title={c?.name}
                                />
                            </CastItemImg>
                            <CastItemName>{c?.name}</CastItemName>
                        </CastItem>
                    )
                });
            } else {
                items = castData?.map((c) => {
                    return (
                        <CastItem to={`/actor/${c.id}`} key={c.id} >
                            <CastItemImg  >
                                <CastImg
                                    src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
                                    alt={c?.name}
                                    onDragStart={handleDragStart}
                                    title={c?.name}
                                />
                            </CastItemImg>
                            <CastItemName>{c?.name}</CastItemName>
                        </CastItem>
                    )
                });
            }
        }
        return items;
    }

    return (
        <CastWrapper> 
            <CastHeader>
                <strong>CAST:</strong>
                {
                    castData && castData.length > 9 &&
                    !showAllCast &&
                    <MoreCast>
                        <Link to={`${match.url + '/cast-list'}`}>
                        Cast list ➜
                        </Link>
                    </MoreCast>
                }
            </CastHeader>


            <CastContent style={{color: '#FFF'}}>
                {
                    renderCast()
                }

            </CastContent>

        </CastWrapper >
    )
}

export default Cast

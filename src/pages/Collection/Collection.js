import React, { Fragment } from 'react'

import { Content, Title } from '../../globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import SingleContent from '../../components/SingleContent/SingleContent';
import * as collectionActions from '../../actions/collectionActions';

const Collection = ({ name }) => {
    const collection = useSelector(state => state.collections.collectionData);
    const dispatch = useDispatch();

    const onDeleteCollection = id => {
         dispatch(collectionActions.deleteCollection(id));
    }
    console.log(collection);
    return (
        <Fragment>
            <Title>{name}</Title>
            <Content>
                {
                    collection && collection.map(item => {
                            return (
                                <SingleContent
                                    key={item.id}
                                    item={item}
                                    media_type={item.media_type === 'tv' ? 'Tv Series' : 'Movie'}
                                    collection={true}
                                    deleteCollection={onDeleteCollection}
                                />
                            );
                        }) 
                }
            </Content>
        </Fragment>
    )
}

export default Collection

import * as collectionConstants from '../constants/collectionConstants';

export const addCollection = data => {
    return {
        type: collectionConstants.ADD_COLLECTION,
        payload: {
            data
        }
    }
}
export const deleteCollection = id => {
    return {
        type: collectionConstants.DELETE_COLLECTION,
        payload: {
            id
        }
    }
}
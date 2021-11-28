import * as collectionConstants from '../constants/collectionConstants';

const initialState = {
    collectionData: [],
}

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case collectionConstants.ADD_COLLECTION: {
            const { data } = action.payload;
            return {
                ...state,
                collectionData: data
            }
        }
        case collectionConstants.DELETE_COLLECTION: {
            const { id } = action.payload;
            const newData = [...state.collectionData].filter(x => x.id !== id);
            localStorage.setItem('collection', JSON.stringify(newData)); 
            return {
                ...state,
                collectionData: newData
            }
        }
        default:
            return {
                ...state
            };
    }
}
export default collectionReducer;
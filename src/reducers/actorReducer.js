import * as actorConstant from '../constants/actorConstants';

const initialState = {
    actorInfo: null,
    actorImage: [],
}

const actorReducer = (state = initialState, action) => {
    switch (action.type) {
        case actorConstant.FETCH_ACTOR_INFO:
            return {
                ...state,
                actorInfo: null,
                actorImage: [],
            }
        case actorConstant.FETCH_ACTOR_INFO_SUCCESS:
            const { data } = action.payload;
            return {
                ...state,
                actorInfo: data,
            }


        default:
            return {
                ...state, 
            }
    }
}

export default actorReducer;
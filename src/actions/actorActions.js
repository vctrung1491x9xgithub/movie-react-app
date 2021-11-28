import * as actorConstants from '../constants/actorConstants';

export const fetchActorInfo = (id) => {
    return {
        type: actorConstants.FETCH_ACTOR_INFO,
        payload: { 
            id
        }
    }
}

export const fetchActorInfoSuccess = data => {
    return {
        type: actorConstants.FETCH_ACTOR_INFO_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchActorInfoFailed = error => {
    return {
        type: actorConstants.FETCH_ACTOR_INFO_FAILED,
        payload: {
            error
        }
    }
}
 
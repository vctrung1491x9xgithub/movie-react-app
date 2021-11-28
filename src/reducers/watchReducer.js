import * as watchConstants from '../constants/watchConstants';

const initialState = {
    infoData: null,
    castData: [],
    crewData: [],
    infoMessage: '',
    castMessage: '',
}

const watchReducer = (state = initialState, action) => {
    switch (action.type) {
        case watchConstants.FETCH_INFO:
            return {
                ...state,
                infoData: null,
            }
        case watchConstants.FETCH_INFO_SUCCESS:
            const { data } = action.payload;
            return {
                ...state,
                infoData: data,
            }
        case watchConstants.FETCH_INFO_FAILED:
            const { error: fectInfoError } = action.payload;
            const infoErrorMessage = fectInfoError.toString();
            return {
                ...state,
                infoMessage: infoErrorMessage,
            }

            case watchConstants.FETCH_CAST:
            return {
                ...state,
                castData: [],
                crewData: [],
            }
        case watchConstants.FETCH_CAST_SUCCESS:
            const { cast, crew } = action.payload.data; 
            return {
                ...state,
                castData: cast,
                crewData: crew,
            }
        case watchConstants.FETCH_CAST_FAILED:
            const { error: fetchCastError  } = action.payload;
            const castErrorMessage = fetchCastError.toString();
            return {
                ...state, 
                castMessage: castErrorMessage,
            }
        default:
            return {
                ...state,
            }
    }
}
export default watchReducer;
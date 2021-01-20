import { getDataActionTypes } from '../action';

const InitialState = {
    getData : {}
}

export const getDataReducer = (state = InitialState,action) =>{
    switch(action.type){
        case getDataActionTypes.GET_DATA_JSON:
            return {...state};
        case getDataActionTypes.GET_DATA_JSON_SUCCESS:
            return {...state,...action.payload};
        case getDataActionTypes.GET_DATA_JSON_FAILURE:
            return {...state,...action.payload};
        default:
            return {...state};
    }
}
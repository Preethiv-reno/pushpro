import axios from 'axios';
import {put,takeEvery,call} from 'redux-saga/effects';
import { getDataActionTypes,getDataActions } from '../action';


export function* getJSONDataFromSaga(){
    try{
        const responseData = yield call(axios.get,"https://aimtell.com/files/sites.json",{});
        console.log(responseData);
        yield put(
            getDataActions.getJSONDataSuccess({
                isSucceeded:true,
                getDataFormJSON: responseData.data
            })
        )
    }
    catch(e){
       yield put(
           getDataActions.getJSONDataFailure({
               isSucceeded:false,
               getDataFormJSON:null
           })
       )
    }
}

export function* watchGetJSONDataFromSaga(){
    yield takeEvery(
        [getDataActionTypes.GET_DATA_JSON],
        getJSONDataFromSaga
    );
}
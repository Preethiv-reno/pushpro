import { all,fork } from 'redux-saga/effects';
import { watchGetJSONDataFromSaga } from './getDataSaga';

export default function* rootSaga(){
    yield all([
     fork(watchGetJSONDataFromSaga)
    ]);
}


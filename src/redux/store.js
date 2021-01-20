import { applyMiddleware,compose,createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { allReducers } from './reducer';
import rootSaga from './saga';
let store;

const sagaMiddleWare = createSagaMiddleWare();
const composeEnhancers = 
        typeof window === "object" && window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__({})
        : compose;
store = createStore(allReducers,
    composeEnhancers(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(rootSaga);

export default store;


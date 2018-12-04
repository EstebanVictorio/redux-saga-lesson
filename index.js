import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {masterSaga} from './Sagas';
import Reducers from './Reducers';
import {
  addMsgAsync,
  incrementAsync,
  dispatchMsg,
  decrement
} from './Actions';
const sagaMiddleware = createSagaMiddleware();
let Store =
  createStore(combineReducers(Reducers),applyMiddleware(sagaMiddleware));
sagaMiddleware.run(masterSaga);
  document.addEventListener('DOMContentLoaded',function(){
    let addMsgButton = document.querySelector('#add-btn');
    let dispatchButton = document.querySelector('#dispatch-btn');

    addMsgButton.addEventListener('click',function(){
      Store.dispatch(incrementAsync());
      console.log('Added new message on postbox');
    });

    dispatchButton.addEventListener('click',function(){
      let state = Store.getState();
      if(state.msgs.length > 0){
        alert(state.msgs[state.msgs.length-1].text);
        Store.dispatch(decrement());
        Store.dispatch(dispatchMsg());
      }else{
        alert('No messages to dispatch on postbox');
      }
    });
  });

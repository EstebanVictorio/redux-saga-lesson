import {delay} from 'redux-saga';
import { put, takeEvery, all, select } from 'redux-saga/effects';
import {increment,addMsg} from './Actions';
function* incrementMsgCounterAsync(){
  yield delay(3000);
  yield put(increment());
  let state = yield select();
  let newID = state.msgCounter;
  yield put(addMsg(newID,`Message ${newID}`));
}

function* listenStartMsg(){
  console.log('Started listener msg saga!');
}

function* watchIncrementMsgCounterAsync(){
  yield takeEvery('INCREMENT_ASYNC', incrementMsgCounterAsync);
}

function* masterSaga(){
    yield all(
      [
        listenStartMsg(),
        watchIncrementMsgCounterAsync()
      ]
    );
}

export {
  masterSaga
};

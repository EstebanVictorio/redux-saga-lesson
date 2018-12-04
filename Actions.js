import {
  MSG_ADD,
  INCREMENT,
  DECREMENT,
  MSG_DISPATCH,
  MSG_ADD_ASYNC,
  DECREMENT_ASYNC,
  INCREMENT_ASYNC,
  MSG_DISPATCH_ASYNC
} from './ActionTypes';

const addMsgAsync = (id,text) => ({
  type: MSG_ADD_ASYNC
});

const dispatchMsgAsync = () => ({
  type: MSG_DISPATCH_ASYNC
});

const incrementAsync = () => ({ type: INCREMENT_ASYNC });
const decrementAsync = () => ({ type: DECREMENT_ASYNC });

const addMsg = (id,text) => ({
  type: MSG_ADD,
  id: id,
  text:text
});

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const dispatchMsg = () => ({ type: MSG_DISPATCH });
export {
  dispatchMsg,
  addMsg,
  increment,
  decrement,
  addMsgAsync,
  dispatchMsgAsync,
  incrementAsync,
  decrementAsync
};

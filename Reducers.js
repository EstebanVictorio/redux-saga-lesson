import {MSG_DISPATCH,MSG_ADD,INCREMENT,DECREMENT} from './ActionTypes';
const msgCounter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return ++state;
    case DECREMENT:
      return --state;
    default:
      return state;
  }
};

const msg = (state, action) => {
  switch (action.type) {
    case MSG_ADD:
      return {
        id: action.id,
        text: action.text
      };
    default:
      return state;
  }
}

const msgs = (state = [], action) => {
  switch (action.type) {
    case MSG_DISPATCH:
      let newMsgQueue = state;
      newMsgQueue.pop();
      return newMsgQueue;
    case MSG_ADD:
      return [
        ...state,
        msg(undefined,action)
      ];
    default:
      return state;
  }
}

export default {
  msgCounter,
  msgs
};

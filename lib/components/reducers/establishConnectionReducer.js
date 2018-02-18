import { INIT_CONNECTION } from '../actions/initConnection';
import { SET_CURRENT_FETCH_DATA } from '../actions/setCurrentFetchData';
import { CONNECTED } from '../actions/connected';
const defaultState = {
  socket: 'disconnected',
  data: {}
};

export const establishConnectionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INIT_CONNECTION:
      return Object.assign({}, state, {socket: action.payload});
    case CONNECTED:
      return Object.assign({}, state, {socket: action.payload});
    case SET_CURRENT_FETCH_DATA:
      return Object.assign({}, state, {data: action.payload});
    default:
      return state;
  }
};

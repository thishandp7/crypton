import { INIT_CONNECTION } from '../actions/initConnection';
import { connected } from '../actions/connected';
import { setCurrentFetchData } from '../actions/setCurrentFetchData';
import { take, put, call, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import connect from '../utils/connect';


function subscribe(socket){
  return new eventChannel((emit) => {
    socket.on('transformedData', (data) => {
      emit(setCurrentFetchData(data));
    });
    return () => {
      //impliment unsubscribe here
    };
  });
}

function* read(socket){
  const channel = yield call(subscribe, socket);
  while (true){
    const action = yield take(channel);
    yield put(action);
  }
}

export function* establishConnectionSaga(){
  yield take(INIT_CONNECTION);
  const socket = yield call(connect);
  yield put(connected());
  yield fork(read, socket);
}

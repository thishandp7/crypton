import { delay } from 'redux-saga';

export function* testSaga(){
  while(true){
    yield delay(1000);
    console.info('saga test loop');
  }
}

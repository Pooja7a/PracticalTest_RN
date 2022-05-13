import {all} from 'redux-saga/effects'
import getNewsListSaga from "./GetNewsListSaga"

// Root Saga  combine together with generators
export default function* rootSaga(){
  yield all([
    getNewsListSaga()
  ]);
}

import {all} from 'redux-saga/effects'
import getNewsListSaga from "./GetNewsListSaga"
export default function* rootSaga(){
  yield all([
    getNewsListSaga()
  ]);
}

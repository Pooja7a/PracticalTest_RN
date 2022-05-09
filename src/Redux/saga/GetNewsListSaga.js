import { put, call, takeEvery } from 'redux-saga/effects'
import { GET_NEWS_FAILED, GET_NEWS_REQUEST, GET_NEWS_SUCCESS } from "../types"
import Api from "../../Configs/Api"

export function* FetchDetails(params) {
  try {
    const response = yield call(Api.GetNewsList, params)
    yield put({ type: GET_NEWS_SUCCESS, payload: response })
  } catch (e) {
    yield put({ type: GET_NEWS_FAILED, payload: e })
  }
}
export function* GetNewsSaga(){
  yield takeEvery(GET_NEWS_REQUEST,FetchDetails)
}
export default GetNewsSaga;
import { combineReducers } from 'redux';
import GetNewsListReducer from './GetNewsListReducer';
export default combineReducers({
  GetNewsList: GetNewsListReducer,
});

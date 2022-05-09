import {GET_NEWS_SUCCESS,GET_NEWS_FAILED,GET_NEWS_REQUEST} from '../types';
const INITIAL_STATE = {}

export default (state = INITIAL_STATE,action) => {
  switch (action.type) {
    case GET_NEWS_SUCCESS:
      return {getNewsListSuccess: true, data: action.payload};

    case GET_NEWS_FAILED:
      return {getNewsListSuccess: false, error: action.payload};

    default:
      return state;
  }
};

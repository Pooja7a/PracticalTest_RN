import { GET_NEWS_REQUEST } from '../types';

export const GetNewsListAction = (params) => {
    return {
        type: GET_NEWS_REQUEST,
        params
    };
}


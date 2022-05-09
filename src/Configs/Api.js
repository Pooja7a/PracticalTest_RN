import  {ApiKeys}  from "./ApiKeys";
const axios = require('axios');
const url =ApiKeys.url
async function DataAPI(apiName, method, params) {
    let options = method == 'GET' ? {
        method: method,
        url: `${url}${apiName}`,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    } :
    {
        method: method,
        url: `${url}${apiName}`,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: params
    }
    let response = await axios(options);
    const data = [await response.data, response.status]
    return data
}
export default  {
    async GetNewsList(params) {
        const GetNewsList = DataAPI()
        return GetNewsList;
    },
}


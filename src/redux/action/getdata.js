export const actionTypes = {
   GET_DATA_JSON : "GET_DATA_JSON",
   GET_DATA_JSON_SUCCESS:"GET_DATA_JSON_SUCCESS",
   GET_DATA_JSON_FAILURE:"GET_DATA_JSON_FAILURE"
}

export const actions = {
    getJSONData:(data)=>({
        type:actionTypes.GET_DATA_JSON,
        data
    }),
    getJSONDataSuccess:(content) =>({
       type:actionTypes.GET_DATA_JSON_SUCCESS,
       payload:content
    }),
    getJSONDataFailure:(content) =>({
        type:actionTypes.GET_DATA_JSON_FAILURE,
        payload:content
    })
}
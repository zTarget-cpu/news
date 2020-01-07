let axios = require('axios')

export function getItems(){
    return function(dispatch){
        return axios('/api/items').then(res=>{
            dispatch({
                type:'Get_Items',
                payload:res.data
            })
            return Promise.resolve(res.data);
        })
    }
}
import Axios from 'axios';

export default function callApi(method = 'GET', endpoint, data){
    return Axios({
        method: method,
        url: `http://localhost:3000/${endpoint}`,
        data: data
    }).catch(cat => {
        console.log(cat)
    })
}
import axios from "axios";
import {GetRequestTypes} from "src/Utils/Types"
const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: undefined,
};

const baseUrl = {
    production: '',
    development: 'http://localhost:7000/employees',
};
const baseEndPoint = baseUrl.development;


const requestHandler = async (endPoint:string, method, params="") => {
    return await axios.request({
        url:baseEndPoint+endPoint,
        method:method,
        params:params
    })
}

// const postRequest = async (endPoint:string, params:any, key = "") => {
//     return axios
//         .post(baseEndPoint + endPoint, params).then(({data})=>data)

// }
// const deleteRequest = async (endPoint:string,params:string) => {
//     return axios.delete(`${baseEndPoint}/${endPoint}/${params}`).then(({data})=>data)
// }
export { requestHandler }

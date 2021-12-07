import axios, { Method } from "axios";
import {GetRequestTypes} from "src/Utils/Types"
const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: undefined,
};

const baseUrl = {
    production: 'https://employe-mg.herokuapp.com',
    development: 'http://localhost:7000/employees',
};
const baseEndPoint = baseUrl.production;


const getRequest = async (endPoint:string, method:Method, params:string|void="") => {
    return await axios.request({
        url:baseEndPoint+endPoint,
        method:method,
        params:params
    })
}

const postRequest = async (endPoint:string, params:void) => {

    return axios
        .post(baseEndPoint + endPoint, params )

}
const deleteRequest = async (endPoint:string,params:void) => {
    return axios.delete(`${baseEndPoint}/${params}`)
}


export { getRequest, deleteRequest, postRequest }

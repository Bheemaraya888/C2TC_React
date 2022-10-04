import httpClient from "../http-common";


const getAll = () => {
    return httpClient.get('/shops');
}
  
const create = (data) => {
    return httpClient.post("/shops", data);
}

const get = id => {
    return httpClient.get(`/shops/${id}`);
}

const update = (data) => {
    return httpClient.put('/shops', data);
}

const remove = id => {
    return httpClient.delete(`/shops/${id}`);
}
export default { getAll, create, get, update, remove };
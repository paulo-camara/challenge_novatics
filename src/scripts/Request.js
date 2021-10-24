import axios from 'axios';

const endpoint = 'https://raw.githubusercontent.com';

export const api = axios.create({ baseURL: endpoint });

export const Request = (route, payload, success, fail, method) => {
    api[method](route, payload)
        .then((resp) => success(resp.data))
        .catch((err) => fail(err));
};

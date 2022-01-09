import Axios, {AxiosRequestConfig} from 'axios';

const get = async (endpoint, params) => {
  return Axios.get(`${endpoint}`, {
    params,
  }).then(response => {
    return response.data;
  });
};

export {get};

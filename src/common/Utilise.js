import axios from 'axios';
import api from './Api';
import NetInfo from "@react-native-community/netinfo";


const APICalling = async (
  method,
  url,
  data = null,
  authToken = null,
  contentType = `application/json`,
) => {
  let configuration = null;
  authToken = global.authToken || null;

  let headers = {
    Authorization: authToken,
    'Content-Type': data && data.constructor === FormData
      ? 'multipart/form-data'
      : 'application/json',
  };

  let timeout = 90000;

  let apiResponse = {
    status: false,
    message: null,
    data: [],
  };

  switch (method) {
    case 'GET':
      configuration = {
        method: 'get',
        url: url,
        timeout: timeout,
        headers: headers,
      };
      break;
    case 'POST':
      configuration = {
        method: 'post',
        url: url,
        timeout: timeout,
        headers: headers,
        data: data,
      };
      break;
    case 'PUT':
      configuration = {
        method: 'put',
        url: url,
        timeout: timeout,
        headers: headers,
        data: data,
      };
      break;
    default:
      break;
  }

  
  await axios(configuration)
    .then((response) => {
      if (response.status === 200) {
        apiResponse.status = response?.status;
        apiResponse.message = null;
        apiResponse.data = response?.data?.data || [];
        apiResponse.data = response?.data?.data?.token
          ? {
            ...apiResponse?.data,
            token: response?.data?.data?.token,
          }
          : response.data.data;
      } else {
        apiResponse.status = response?.status || false;
        apiResponse.message = response?.data?.message || 'Something went wrong';
        apiResponse.data = [];
      }
    })
    .catch((error) => {
      

      apiResponse.status = false;
      apiResponse.data = [];
      if (error?.response?.status) {
        switch (error?.response?.status) {
          case 404:
            apiResponse.message = 'Server is not responding.';
            break;
          case 400:
          case 401:
          case 404:
          case 403:
          case 409:
          case 422:
          case 500:
            apiResponse.message = error?.response?.data?.message;
            break;
          default:
            apiResponse.message = 'Something went wrong';
            break;
        }
      } else {
        apiResponse.message = 'Something went wrong';
      }
    });
  return apiResponse;
};

const utilise = {
  apiCalling: APICalling,
};


export default utilise;

import axios from 'axios';
// import ConstantList from "../../appConfig";

export const searchEmployee = (searchObject) => {
    var url='http://training-api.oceantech.com.vn/cms/employees/search';
    return axios.post(url, searchObject);
  };

export const createEmployee = (employeeObject) => {
    const url = 'http://training-api.oceantech.com.vn/cms/employees';
    return axios.post(url, employeeObject);
  };
  export const searchProvince = (searchObject) => {
    const url = 'http://training-api.oceantech.com.vn/cms/provinces/search';
    return axios.post(url, searchObject);
  };
  export const searchDistrict = (searchObject) => {
    const url = 'http://training-api.oceantech.com.vn/cms/districts/search';
    return axios.post(url, searchObject);
  };
  export const searchCommune = (searchObject) => {
    const url = 'http://training-api.oceantech.com.vn/cms/communes/search';
    return axios.post(url, searchObject);
  };
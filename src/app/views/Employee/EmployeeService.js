import axios from "axios";
import ConstantList from "../../appConfig";
const API_PATH = ConstantList.API_ENPOINT + "/api/menuitem";
const API_PATH_ROLE = ConstantList.API_ENPOINT + "/api/roles/";

export const getAllRoles = () => {
  var url = API_PATH_ROLE + 'all';
  return axios.get(url);
};

export const searchByPage = (searchObject) => {
  var url = API_PATH + "/searchByPage";
  return axios.post(url, searchObject);
};
export const getAllItem = () => {
  var url = ConstantList.API_ENPOINT + "/api/menuitem/getall";
  return axios.get(url);
};

export const getFlatRootChild = () => {
  var url = ConstantList.API_ENPOINT + "/api/menuitem/getflatrootchild";
  return axios.get(url);
};

export const getAllMenuItemByRoleList = () => {
  var url = ConstantList.API_ENPOINT + "/api/menuitem/getmenubyuser";
  return axios.get(url);
};

export const getAllByRoot = () => {
  var url = ConstantList.API_ENPOINT + "/api/menuitem/getallroot";
  return axios.get(url);
};

export const getItemById = id => {
  var API_PATH = ConstantList.API_ENPOINT + "/api/menuitem";
  var url = API_PATH + "/" + id;
  return axios.get(url);
};
export const deleteItem = id => {
  var API_PATH = ConstantList.API_ENPOINT + "/api/menuitem";
  var url = API_PATH + "/" + id;
  return axios.delete(url);
};
export const saveItem = item => {
  //console.log(item);
  //alert(item.name);
  var API_PATH = ConstantList.API_ENPOINT + "/api/menuitem";
  var url = API_PATH;
  return axios.post(url, item);
};

export const searchEmployee = (searchObject) => {
  var url='http://training-api.oceantech.com.vn/cms/employees/search';
  return axios.post(url, searchObject);
};
export const deleteEmployee = (id) => {
  var url=`http://training-api.oceantech.com.vn/cms/employees/${id}`;
  return axios.delete(url);
};
export const editEmployee = (data) => {
  var url=`http://training-api.oceantech.com.vn/cms/employees/${data.id}`;
  return axios.put(url , data);
};
export const createEmployee = (employeeObject) => {
  const url = 'http://training-api.oceantech.com.vn/cms/employees';
  return axios.post(url, employeeObject);
};

export const searchProvince = (searchObject) => {
  var url='http://training-api.oceantech.com.vn/cms/provinces/search';
  return axios.post(url, searchObject);
};
export const searchDistrict = (searchObject) => {
  var url='http://training-api.oceantech.com.vn/cms/districts/search';
  return axios.post(url, searchObject);
};
export const searchCommune = (searchObject) => {
  var url='http://training-api.oceantech.com.vn/cms/communes/search';
  return axios.post(url, searchObject);
};


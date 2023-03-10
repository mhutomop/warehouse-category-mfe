import axios from "axios";

const getCategories = async (name) => {
  let url = 'http://localhost:3001/api/categories';
  if (name) {
    url = `${url}?name=${name}`;
  }
  let response = await axios.get(url);
  return response;
}

const addCategory = async (data) => {
  let url = `http://localhost:3001/api/categories`;
  let response = await axios.post(url, data);
  return response;
}

const updateCategory = async (id, data) => {
  let url = `http://localhost:3001/api/categories/${id}`;
  let response = await axios.put(url, data);
  return response;
}

const deleteCategory = async (id) => {
  let url = `http://localhost:3001/api/categories/${id}`;
  let response = await axios.delete(url);
  return response;
}

export { getCategories, addCategory, updateCategory, deleteCategory };
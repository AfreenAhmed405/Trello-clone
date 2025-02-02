import axios from "axios";

const API_BASE_URL = "http://localhost:8080/tasks";

export const addTask = (task) => {
    return axios.post(API_BASE_URL, task);
}

export const getTasks = () => {
    return axios.get(`${API_BASE_URL}/task`);
}

export const getTask = (id) => {
    return axios.get(`${API_BASE_URL}/${id}`);
}

export const editTask = (id, task) => {
    return axios.put(`${API_BASE_URL}/${id}`, task);
}

export const deleteTask = (id) => {
    return axios.delete(`${API_BASE_URL}/${id}`);
}
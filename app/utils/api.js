import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const registerUser = async (userData) => {
    const { data } = await axios.post(`${API_URL}/register`, userData);
    return data;
};

export const loginUser = async (credentials) => {
    const { data } = await axios.post(`${API_URL}/login`, credentials);
    return data;
};

export const fetchUser = async (token) => {
    const { data } = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: token },
    });
    return data;
};

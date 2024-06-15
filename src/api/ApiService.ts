// apiService.js
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Severity, toggleAlert } from '../components/common/AlertSnackbar';

const api = axios.create({
    baseURL: 'http://localhost:3001', // Adjust the base URL as needed
});

const handleUnauthorizedResponse = (navigate) => {
    localStorage.clear(); // Clear all data from localStorage
    navigate('/login'); // Redirect to the login page
    
};

export const setupInterceptors = (navigate) => {
    api.interceptors.response.use(
        (response) => response, // Pass through successful responses
        (error) => {
            if (error.response && error.response.status === 401) {
                handleUnauthorizedResponse(navigate);
            }
            return Promise.reject(error);
        }
    );
};

export default api;

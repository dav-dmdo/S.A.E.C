import axios from 'axios';

// Configuración base de Axios para el servidor Laravel
const api = axios.create({
  baseURL: 'http://18.209.15.163/api/v1', 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default api;
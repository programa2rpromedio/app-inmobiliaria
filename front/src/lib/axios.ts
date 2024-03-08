import axios from 'axios'

export const baseURL = 'http://localhost:8080/api'

// Establecer configuraciones por defecto al crear la instancia
export const instanceAxios = axios.create({
  baseURL: baseURL
});


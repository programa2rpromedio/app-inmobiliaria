import axios from 'axios'

// export const baseURL = 'http://localhost:8080/api'
export const baseURL = 'https://api-alquileresya.vercel.app/api'

// Establecer configuraciones por defecto al crear la instancia
export const instanceAxios = axios.create({
  baseURL: baseURL
});


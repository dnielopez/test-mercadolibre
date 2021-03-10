/**
 * Crear y exportar el API que funcionará
 * para realizar los respectivos llamados
 * a los endpoints con la URL de ML
 */

import { create } from 'apisauce'

const api = create({
    baseURL: 'http://localhost:3001',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Daniel Lopez'
    },
    timeout: 10000
})

export const axios = api.axiosInstance

export default api
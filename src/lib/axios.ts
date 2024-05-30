import axios, { InternalAxiosRequestConfig } from 'axios'

import { env } from '@/env'

export const APIClient = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})

const delayRequests = async (config: InternalAxiosRequestConfig) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return config
}

// Intercept each request and change config or apply delay (this only apply delay before requests)
if (env.VITE_ENABLE_API_DELAY) {
  APIClient.interceptors.request.use(delayRequests)
}

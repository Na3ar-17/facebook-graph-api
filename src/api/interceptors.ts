import { EnumAuthTokens } from '@/types/auth.types'
import axios, { type CreateAxiosDefaults } from 'axios'
import Cookies from 'js-cookie'

import { BASE_URL } from '@/constants/api.constant'

const options: CreateAxiosDefaults = {
  baseURL: `${BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
}

export const axiosClassic = axios.create(options)

export const axiosPrivate = axios.create(options)

axiosPrivate.interceptors.request.use(config => {
  const accessToken = Cookies.get(EnumAuthTokens.ACCESS_TOKEN)

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

axiosPrivate.interceptors.response.use(config => config.data)

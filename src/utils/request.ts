import type { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example',
  timeout: 60000,
})

const requestHandler = async(config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
  // 新增缓存
  // const token = useAuthorization()
  // if (token.value) {
  //   config.headers.set(STORAGE_AUTHORIZE_KEY, token.value)
  // }
  return config
}

export interface ResponseBody<T = any> {
  code: number
  data?: T
  msg: string
}
const responseHandler = (response: any): ResponseBody<any> | AxiosResponse<any> | Promise<any> | any => {
  return response.data
}

const errorHandler = (error: AxiosError): Promise<any> => {
  return Promise.reject(error)
}

instance.interceptors.request.use(requestHandler, errorHandler)

instance.interceptors.response.use(responseHandler, errorHandler)

export const useGet = <T = any, R = any>(url: string, params?: T, config?: AxiosRequestConfig): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    params,
    method: 'GET',
    ...config,
  })
}

export const usePost = <T = any, R = any>(url: string, data?: T, config?: AxiosRequestConfig): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    data,
    method: 'POST',
    ...config,
  })
}

export const usePut = <T = any, R = any>(url: string, data?: T, config?: AxiosRequestConfig): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    data,
    method: 'PUT',
    ...config,
  })
}

export const useDelete = <T = any, R = any>(url: string, data?: T, config?: AxiosRequestConfig): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    data,
    method: 'DELETE',
    ...config,
  })
}

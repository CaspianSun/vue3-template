import axios, { AxiosRequestConfig, AxiosInstance, AxiosStatic } from "axios"

const baseURL = import.meta.env.VITE_API_URL
const timeout = 20000
const successStatus = [200, 0, "200", "0"]
const statusName = "status"
const messageName = "message"
const contentType = "application/json"

interface MAxiosInstance extends AxiosInstance {
  <T = unknown, R = T extends BaseResponse ? T : unknown extends T ? BaseResponseWithData<any> : BaseResponseWithData<T>, D = any>(
    config: AxiosRequestConfig<D>,
  ): Promise<R>
  <T = unknown, R = T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
}
class MAxios {
  readonly axios: MAxiosInstance
  constructor(axios: AxiosStatic, config: AxiosRequestConfig) {
    this.axios = axios.create(config)
  }
  get<T = unknown>(config: AxiosRequestConfig) {
    return this.axios<T>({
      ...config,
      method: "GET",
    })
  }
  post<T = unknown>(config: AxiosRequestConfig) {
    return this.axios<T>({
      ...config,
      method: "POST",
    })
  }
  put<T = unknown>(config: AxiosRequestConfig) {
    return this.axios<T>({
      ...config,
      method: "PUT",
    })
  }
  delete<T = unknown>(config: AxiosRequestConfig) {
    return this.axios<T>({
      ...config,
      method: "DELETE",
    })
  }
  request<T = unknown>(config: AxiosRequestConfig) {
    return this.axios<T>(config)
  }
}

const service = new MAxios(axios, {
  baseURL,
  timeout,
  headers: {
    "Content-Type": contentType,
  },
})

service.axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
service.axios.interceptors.response.use(
  (response) => {
    const { data, status: _status } = response
    let status = data && data[statusName] ? data[statusName] : _status
    if (successStatus.includes(status)) status = 200
    switch (status) {
      case 200:
        return Promise.resolve(data)
      default:
        return Promise.reject(new Error(data[messageName]))
    }
  },
  (error) => {
    const { response } = error
    switch (response?.status) {
      case 400:
      case 401:
        return Promise.resolve(response.data)
      default:
        return Promise.reject(error)
    }
  },
)

export default service
export const axiosInstance = service.axios

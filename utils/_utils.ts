import config from "@/config/config";

import axios from "axios";

const instance = axios.create()

instance.interceptors.request.use((axiosconfig) => {
  axiosconfig.baseURL = config?.BASE_URL

  return new Promise((resolve) => {
    const token = window.localStorage.getItem(config?.TOKEN_KEY ?? "")
    axiosconfig.headers.Authorization = `Bearer ${token}`
    resolve(axiosconfig)
  })
})


export default instance;

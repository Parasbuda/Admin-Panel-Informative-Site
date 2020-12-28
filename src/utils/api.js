import axios from "axios"
import { BASE_URL } from "./config"
import store from "../store"
import { INTERNAL_SERVER_ERROR } from "../Action/types"
const api=axios.create({
    baseURL:`${BASE_URL}`,
    headers:{
        "Content-Type":"application/json",
    },
})


//interceptor
api.interceptors.response.use(
    res=>res,
    err=>{
        if(err.response.status===500){
         return store.dispatch({
              type:INTERNAL_SERVER_ERROR
          })
        }
        return Promise.reject(err)
    }
)
export default api
import axios from "axios";

const apiClient =axios.create({
    baseURL:"",
    withCredentials:true,
    headers:{
        "Content-Type" : "application/json"
    }
});

apiClient.interceptors.response.use(
    (response)=>response,
    (error)=>{
        if(error.response?.status === 401){
            console.log("session is expired ")
        }
    }
)

export default apiClient
import axios from "axios";

const base = {
    server_http: Process.env
};

const api = axios.create({
    baseURL: base.env.server_http,
    headers: {
        "content-type": "application/json; charset=UTF-8",
        accept:"application/json",
        withCredentials: true,
    },
});

api.interceptors.request.use(function (config) {
 const auth = localStorage.getItem("access-token");
 const auth2 = localStorage.getItem("refresh-token");
 config.headers.common["Authorization"] = auth;
 config.headers.common["RefreshToken"] = auth2;
 
 return config;
}) 

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const auth = localStorage.getItem("access-token");
        const auth2 = localStorage.getItem("refresh-token");
        if(error.response && error.request.status === 403) {
            return api
            .post(`/member/logout`, {
                headers: {
                    Authorization: auth,
                    RefreshToken: auth2,
                },
            })
            .then((res)=>{
                if(res.data.success) {
                    window.location.href = "/";
                }
            });
        }
    }
)

export const apis = {
    logout: () => api.post(`/member/logout`),
}
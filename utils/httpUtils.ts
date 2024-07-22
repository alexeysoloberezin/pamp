import axios, { AxiosRequestConfig } from "axios";

export interface AuthResponse {
    success: boolean;
    token?: string;
    error?: string;
}

export interface HttpQuery extends Function {
    (method: string, url: string, params?: any, headers?: any, data?: any): Promise<any>;
}

export function HttpQueryFactory(): HttpQuery {
    return async function(method: string, url: string, params?: any, headers?: any, data?: any): Promise<any> {
        let defaultHeaders: any = {
            post: { "Content-Type": "application/json;charset=UTF-8" },
            put: { "Content-Type": "application/json;charset=UTF-8" },
        };
        let allheaders = {
            ...defaultHeaders[method.toLowerCase()],
            ...headers,
        };

        try {
            let res = await axios.request(<AxiosRequestConfig>{
                url: url,
                method: method,
                params: params,
                headers: allheaders,
                data: JSON.stringify(data),
            });
            return res.data;
        } catch (exc) {
            //console.log(exc, exc.response);
            throw exc;
        }
    };
}
const httpQuery = HttpQueryFactory();
export { httpQuery };

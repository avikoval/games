import { AxiosRequestConfig } from "axios";
import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";

export type BaseQueryFunction = BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
    headers?: AxiosRequestConfig["headers"];
    responseType?: AxiosRequestConfig["responseType"];
}>;

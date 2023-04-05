import { AxiosRequestConfig } from "axios";
import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { REDUCER_NAME } from "./constants";

export type ApiReducerName = typeof REDUCER_NAME;

export type BaseQueryFunction = BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
    headers?: AxiosRequestConfig["headers"];
    responseType?: AxiosRequestConfig["responseType"];
}>;

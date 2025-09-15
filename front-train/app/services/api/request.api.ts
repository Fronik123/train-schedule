import { AxiosRequestConfig } from "./../../../node_modules/axios/index.d";
import { Axios, AxiosError, AxiosResponse } from "axios";
import Toast from "react-native-toast-message";
import instance from "./interceptors.api";
import { errorCatch } from "./error.api";

export const request = async <T>(config: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse<T>) => response.data;

  const onError = (error: AxiosError<T>) => {
    Toast.show({
      type: "error",
      text1: "Request error",
      text2: errorCatch(error),
    });

    return Promise.reject(error);
  };

  return instance(config).then(onSuccess).catch(onError);
};

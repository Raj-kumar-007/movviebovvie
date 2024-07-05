import { AxiosError, AxiosResponse } from "axios";

export const getData = <T>(response: AxiosResponse<T>): T => {
  return response.data;
};
export const getErrorCode = <T>(error: AxiosError<T>): string | undefined => {
  return error.code;
};

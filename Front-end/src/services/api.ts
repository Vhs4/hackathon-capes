import axios from "axios";
import { API_URL } from "../constants";
import { UserProfileToken } from "../models/User";
import { handleError } from "../helpers/ErrorHandler";
import { toast } from "react-toastify";

export const loginAPI = async (username: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(API_URL + "authenticator/signin", {
            username: username,
            password: password,
        });
        return data;
    } catch (error) {
        handleError(error);
    }
};

export const registerAPI = async (
    email: string,
    username: string,
    password: string
  ) => {
    try {
      const data = await axios.post<UserProfileToken>(API_URL + "authenticator/signin", {
        email: email,
        username: username,
        password: password,
      });
      return data;
    } catch (error) {
      handleError(error);
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Ocorreu um erro desconhecido");
      }
    }
  };

  export const createUserAPI = async (dados: any) => {
    try {
      const data = await axios.post(API_URL + "create", dados);
      return data;
    } catch (error) {
      handleError(error);
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Ocorreu um erro desconhecido");
      }
    }
  };
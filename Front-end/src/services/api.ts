import axios from "axios";
import { API_URL } from "../constants";
import { UserProfileToken } from "../models/User";
import { handleError } from "../helpers/ErrorHandler";


export const loginAPI = async (username: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(API_URL + "/login", {
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
      const data = await axios.post<UserProfileToken>(API_URL + "account/register", {
        email: email,
        username: username,
        password: password,
      });
      return data;
    } catch (error) {
      handleError(error);
    }
  };
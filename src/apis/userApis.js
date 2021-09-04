import { baseUrl } from "./apiUtils";
import axios from "axios";

export const loginApi = async ({ loginId, password }) => {
  console.log("login apicall::", loginId, password);
  try {
    let response = await axios.post(`${baseUrl}/login`, {
      loginId: loginId,
      password: password,
    });
    console.log("login-res::", response.data);
    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllRisks = async () => {
  console.log("get All risks");
  try {
    let response = await axios.get(`${baseUrl}/risks`);
    console.log("all risks-res::", response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const getAllUser = async () => {
  console.log("get All user");
  try {
    let response = await axios.get(`${baseUrl}/users`);
    console.log("all users-res::", response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

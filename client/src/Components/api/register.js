import axios from "axios";
import { BASE_URL, REGISTER, SINGIN} from "./api_routes";

export const registerUser = async (data) => {
  return await axios.post(`${BASE_URL}/${REGISTER}`, data);
};


export const singinUser = async (data) => {
  return await axios.post(`${BASE_URL}/${SINGIN}`, data);
};


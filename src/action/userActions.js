import { LOGIN, REGISTER } from "../type/type";

const login = ({ username, password }) => {
  return { type: LOGIN, username, password };
};

const register = (data) => {
  return { type: "REGISTER", payload: data };
};

export { login, register };

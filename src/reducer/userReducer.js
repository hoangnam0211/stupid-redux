import { LOGIN, REGISTER } from "../type/type";

const initalUser = [
  {
    id: Math.random().toString(36).substring(7),
    username: "nam",
    password: "123",
  },
];

const userReducer = (state = initalUser, action) => {
  switch (action.type) {
    // case LOGIN:
    //   return {
    //     ...state,
    //     username: action.username,
    //     password: action.password,
    //   };

    case "REGISTER":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default userReducer;

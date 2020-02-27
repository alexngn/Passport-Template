import React from "react";
export const LoginContext = React.createContext({
  user: localStorage.getItem("user"),
  toggleLogin: () => {}
});

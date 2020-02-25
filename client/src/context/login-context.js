import React from "react";
export const LoginContext = React.createContext({
  user: null,
  toggleLogin: () => {}
});

import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserPrivider = (props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState({ isAdmin: false });
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

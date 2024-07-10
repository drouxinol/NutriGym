import React, { createContext, useState } from "react";

export const UserContext = createContext({
  fullName: "",
  username: "",
  weight: "",
  age: "",
  height: "",
  gender: "",
  updateUser: () => {},
});

function UserProvider({ children }) {
  const [user, setUser] = useState({
    fullName: "Daniel Rouxinol",
    username: "drouxinol",
    weight: "74",
    age: "23",
    height: "169",
    gender: "Male",
  });

  function updateUser(key, value) {
    setUser((prevValue) => ({ ...prevValue, [key]: value }));
  }

  const value = {
    user: user,
    updateUser: updateUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;

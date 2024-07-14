import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    fullName: "",
    username: "",
    weight: "",
    age: "",
    height: "",
    gender: "",
  });

  const [loadingscreen, setloadingscreen] = useState(true);

  function updateUser(updatedFields) {
    const updatedUser = {
      ...user,
      ...updatedFields,
    };

    setUser(updatedUser);

    storeUser(updatedUser); // Save updated user
  }

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem("@UserInfo");
      if (value !== null) {
        const userInfo = JSON.parse(value);
        setUser(userInfo);
        console.log("Found the user", userInfo);
      } else {
        console.log("Did not find the user");
      }
    } catch (e) {
      console.log("Error fetching the user info.", console.error(e));
    } finally {
      setloadingscreen(false);
    }
  };

  const storeUser = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@UserInfo", jsonValue);
      console.log("Saved the user", value);
    } catch (e) {
      console.log("Error saving the user info.", e.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const contextValue = {
    user,
    updateUser,
    storeUser,
    getUser,
    loadingscreen,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export default UserProvider;

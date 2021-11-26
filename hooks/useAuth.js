import React, { createContext, useContext } from "react";
import * as Google from "expo-google-app-auth";

let AuthContext = createContext({
  // initial state
});

let config = {
  androidClientId:
    "740557954988-fg70ojkfm7m4qd7s53n0899d4ua1budi.apps.googleusercontent.com",
  iosClientId:
    "740557954988-j8o5a3fr4evgkdkmjktgc7fk8ubpbehp.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }) => {
  let signInWithGoogle = async () => {
    Google.logInAsync(config).then(
      async((logInResult) => {
        if (logInResult.type === "success") {
        }
      })
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user: null,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}

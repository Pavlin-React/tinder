import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as Google from "expo-google-app-auth";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

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
  let [error, setError] = useState(null);
  let [user, setUser] = useState(null);
  let [loadingInitial, setLoadingInitial] = useState(true);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //  logged in
        setUser(user);
      } else {
        // not log in
        setUser(null);
      }
      setLoadingInitial(false);
    });
  }, []);

  let logout = () => {
    setLoading(true);

    signOut(auth)
      .catch((error) => setError(error))
      .finally(setLoading(false));
  };

  let signInWithGoogle = async () => {
    setLoading(true);
    await Google.logInAsync(config)
      .then(async (logInResult) => {
        if (logInResult.type === "success") {
          let { idToken, accessToken } = logInResult;
          let credential = GoogleAuthProvider.credential(idToken, accessToken);
          await signInWithCredential(auth, credential);
        }
        return Promise.reject();
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  let memoedValue = useMemo(() => ({
    user,
    signInWithGoogle,
    loading,
    error,
    logout,
  }), [user, loading, error])

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}

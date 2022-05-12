import { useState, useEffect, useContext } from "react";

import { FirebaseContext } from "../context/firebase";

export default function useAuthListener() {
  const userToken = JSON.parse(localStorage.getItem("authUser"));
  // let userToken = null;
  const [user, setUser] = useState(userToken);

  const { firebase } = useContext(FirebaseContext);

  // check for token when application mounts
  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      // if there is an authenticated user
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    // effect cleanup
    return () => listener();
  }, []);

  return { user };
}

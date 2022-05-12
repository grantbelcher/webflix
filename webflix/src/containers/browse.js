import React, { useState, useContext, useEffect } from "react";
import { SelectProfileContainer } from "./profile";
import { FirebaseContext } from "../context/firebase";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    console.log(profile, "selected profile");
    setTimeout(() => setLoading(false), 4000);
  }, [profile.displayName]);

  return <SelectProfileContainer user={user} setProfile={setProfile} />;
}

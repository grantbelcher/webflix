import React, { useState, useContext, useEffect } from "react";
import { SelectProfileContainer } from "./profile";
import { FirebaseContext } from "../context/firebase";
import Loading from "../components/loading";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  console.log(loading, "loading", profile);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, [profile.displayName]);

  return profile.displayName ? (
    loading ? (
      <Loading src={user.photoURL} />
    ) : (
      <p>browse appears here</p>
    )
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}

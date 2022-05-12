import { useContext } from "react";
import { HeaderContainer } from "../containers/header";
import { FirebaseContext } from "../context/firebase";
import { useContent } from "../hooks";

export default function Browse() {
  const { firebase } = useContext(FirebaseContext);

  const series = useContent("series");
  const films = useContent("films");

  console.log(series, "series here");
  console.log(films, "films here");
  const handleLogOut = () => {
    firebase.auth().signOut();
  };
  return (
    <>
      <h1>Browse PAge</h1>
      <button onClick={() => handleLogOut()}>log out</button>
    </>
  );
}
